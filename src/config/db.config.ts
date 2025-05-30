import { registerAs } from '@nestjs/config';
import { Property } from 'src/entities/property.entity';
import { PropertyFeature } from 'src/entities/propertyFeatureEntity';
import { PropertyType } from 'src/entities/propertyType.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default registerAs(
  'dbconfig.dev',
  (): PostgresConnectionOptions => ({
    // put in the env
    url: process.env.url,
    ssl: true, // Explicitly declare SSL
    entities: [Property, PropertyFeature, User, PropertyType],
    //   dont set this to true in production
    synchronize: true, // Set to false to avoid accidental schema changes in production
    type: 'postgres' as const,
  }),
);
