import { PropertyType } from './src/entities/propertyType.entity';
import { Property } from './src/entities/property.entity';
import { PropertyFeature } from './src/entities/propertyFeatureEntity';
import { User } from './src/entities/user.entity';

export const pgConfig = () => ({
  // put in the env
  url: 'postgresql://neondb_owner:npg_rOo29uHjSwCt@ep-raspy-sound-a59ug6v8-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: true, // Explicitly declare SSL
  entities: [Property, PropertyFeature, User, PropertyType],
  //   dont set this to true in production
  synchronize: false, // Set to false to avoid accidental schema changes in production
  type: 'postgres' as const,
});
