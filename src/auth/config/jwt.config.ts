import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET || 'defaultSecretKey',
    signOptions: {
      expiresIn: process.env.JWT_EXPIRATION_TIME || '1h',
    },
  }),
);
