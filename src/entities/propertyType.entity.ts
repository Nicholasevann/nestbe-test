import { Entity } from 'typeorm';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PropertyType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
