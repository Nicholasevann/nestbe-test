import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_PAGINATION } from 'src/utils/constant';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async findAll(paginationDTO: PaginationDto) {
    const property = await this.propertyRepo.find({
      skip: paginationDTO.skip,
      take: paginationDTO.limit ?? DEFAULT_PAGINATION,
    });
    if (!property) {
      return { message: 'Property not found' };
    }
    return property;
  }

  async findOne(id: string) {
    const property = await this.propertyRepo.findOne({
      where: { id: Number(id) },
    });
    if (!property) {
      return { message: 'Property not found' };
    }
    return property;
  }

  async create(dto: CreatePropertyDto) {
    try {
      return await this.propertyRepo.save(dto);
    } catch (error) {
      console.log('Error:', error);
      return error;
    }
  }

  async update(id: number, body: UpdatePropertyDto) {
    try {
      return await this.propertyRepo.update({ id }, body);
    } catch (error) {
      console.log('Error:', error);
      return error;
    }
  }
  async delete(id: string) {
    return await this.propertyRepo.delete({ id: Number(id) });
  }
}
