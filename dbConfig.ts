import { Property } from 'src/entities/property.entity';
import { PropertyFeature } from 'src/entities/propertyFeatureEntity';

export const pgConfig = () => ({
  // put in the env
  url: 'postgresql://neondb_owner:npg_rOo29uHjSwCt@ep-raspy-sound-a59ug6v8-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  port: 3306,
  entities: [Property, PropertyFeature],
  //   dont set this to true in production
  synchronize: true,
  type: 'postgres' as const,
});
