import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export const RequestHeader = createParamDecorator(
  (targetsDto: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const headers = request.headers;
    const dto = plainToInstance(targetsDto, headers, {
      excludeExtraneousValues: true,
    });
    return dto;
  },
);
