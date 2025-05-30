import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value);
    if (isNaN(val)) {
      throw new BadRequestException('Id must be a number');
    }
    if (val <= 0) {
      throw new BadRequestException('Id must be positive');
    }
    return val;
  }
}
