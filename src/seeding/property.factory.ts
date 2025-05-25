import { Property } from '../entities/property.entity';
import { setSeederFactory } from 'typeorm-extension';

export const propertyFactory = setSeederFactory(Property, (faker) => {
  const property = new Property();
  property.name = faker.lorem.words(3);
  property.description = faker.lorem.paragraph();
  property.price = faker.number.int({ min: 100000, max: 1000000 });
  property.area = faker.location.city();
  return property;
});
