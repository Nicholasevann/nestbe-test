import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { CreateProPertySchema } from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'Hello World';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `Hello World ${id} `;
  }
  @Get(':id/location/:location')
  findOneWithLocation(
    @Param('id') id: string,
    @Param('location') location: string,
  ) {
    return `Hello World ${id} ${location}`;
  }

  @Post()
  // @HttpCode(201)
  @UsePipes(new ZodValidationPipe(CreateProPertySchema))
  create(@Body() body: CreatePropertyDto) {
    return body;
  }
  @Patch(':id')
  @HttpCode(201)
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() body: CreatePropertyDto,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeadersDto,
  ) {
    return { ...body, ...headers };
  }
}
