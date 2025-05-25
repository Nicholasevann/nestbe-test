import { PropertyFeature } from '../entities/propertyFeatureEntity';
import { setSeederFactory } from 'typeorm-extension';

export const propertyFeatureFactory = setSeederFactory(
  PropertyFeature,
  (faker) => {
    const propertyFeature = new PropertyFeature();
    propertyFeature.area = faker.number.int({ min: 30, max: 500 }); // area as number
    propertyFeature.bathrooms = faker.number.int({ min: 1, max: 5 }).toString(); // bathrooms as string
    propertyFeature.bedrooms = faker.number.int({ min: 1, max: 5 }).toString(); // bedrooms as string
    propertyFeature.hasBalcony = faker.datatype.boolean();
    propertyFeature.hasGarden = faker.datatype.boolean();
    propertyFeature.hasPool = faker.datatype.boolean();
    propertyFeature.parkingSpots = faker.lorem.words(3);
    return propertyFeature;
  },
);
