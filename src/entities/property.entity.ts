import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyFeature } from './propertyFeatureEntity';
import { User } from './user.entity';
import { PropertyType } from './propertyType.entity'; // Ensure this import exists

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ default: 0 })
  price: number;
  @Column()
  area: string;
  @OneToOne(
    () => PropertyFeature,
    (propertyFeature) => propertyFeature.property,
    { cascade: true },
  )
  propertyFeature: PropertyFeature;

  @ManyToOne(() => User, (user) => user.properties)
  user: User;

  @ManyToMany(() => User, (user) => user.likedProperties)
  likedBy: User[];

  @ManyToOne(() => PropertyType, { nullable: false }) // Ensure this is set to nullable: false
  type: PropertyType;
}
