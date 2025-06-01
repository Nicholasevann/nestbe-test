// config/refresh-jwt.config.ts
import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';

export default registerAs(
  'refresh-jwt',
  (): JwtSignOptions => ({
    secret: process.env.REFRESH_JWT_SECRET || 'defaultRefreshSecretKey',
    expiresIn: process.env.REFRESH_JWT_EXPIRATION_TIME || '7d',
  }),
);
