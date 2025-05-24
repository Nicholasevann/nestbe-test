import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  bedrooms: string;
  @Column()
  bathrooms: string;
  @Column()
  parkingSpots: string;
  @Column()
  area: number;
  @Column()
  hasBalcony: boolean;
  @Column()
  hasGarden: boolean;
  @Column()
  hasPool: boolean;
  @OneToOne(() => Property, (property) => property.propertyFeature)
  @JoinColumn()
  // take property id from property table
  property: Property;
}
