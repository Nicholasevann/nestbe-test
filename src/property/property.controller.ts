import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}
  @Get()
  findAll(@Query() paginationDTO: PaginationDto) {
    return this.propertyService.findAll(paginationDTO);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }
  @Get(':id/location/:location')
  findOneWithLocation(
    @Param('id') id: string,
    @Param('location') location: string,
  ) {
    return `Hello World ${id} ${location}`;
  }

  @Post()
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.create(body);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() body: UpdatePropertyDto,
  ) {
    return this.propertyService.update(id, body);
  }
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id', ParseIdPipe) id: string) {
    return this.propertyService.delete(id);
  }
}
