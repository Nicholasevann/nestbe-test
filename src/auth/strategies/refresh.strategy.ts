import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthJwtPayload } from '../types/auth-jwtPayload';
import { ConfigType } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import refreshJwtConfig from '../config/refresh-jwt.config';
import { AuthService } from '../auth.service';
import { Request } from 'express';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  'refresh-jwt',
) {
  constructor(
    @Inject(refreshJwtConfig.KEY)
    private refreshJwtConfiguration: ConfigType<typeof refreshJwtConfig>,
    private authService: AuthService,
  ) {
    if (!refreshJwtConfiguration.secret) {
      throw new Error('JWT secret is not defined');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: refreshJwtConfiguration.secret,
      passReqToCallback: true,
      ignoreExpiration: false, // Set to true if you want to ignore expiration
    });
  }
  validate(req: Request, payload: AuthJwtPayload) {
    const authHeader =
      req.headers['authorization'] || req.headers['Authorization'];
    const refreshToken =
      typeof authHeader === 'string'
        ? authHeader.replace('Bearer ', '').trim()
        : '';
    const userId = payload.sub;
    if (!refreshToken) {
      throw new Error('Refresh token not found');
    }
    return this.authService.validateRefreshToken(userId, refreshToken);
  }
}
