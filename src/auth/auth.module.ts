import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './strategies/local.strateg';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || '',
      signOptions: { expiresIn: '1d' }, // Set token expiration time
    }),
  ], // Add your entities here if needed
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy],
})
export class AuthModule {}
