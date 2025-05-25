import { Property } from '../entities/property.entity';
import { PropertyFeature } from '../entities/propertyFeatureEntity';
import { PropertyType } from '../entities/propertyType.entity';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { faker } from '@faker-js/faker';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const propertyTypeRepository = dataSource.getRepository(PropertyType);
    const propertyTypes = await propertyTypeRepository.save([
      { name: 'Apartment' },
      { name: 'House' },
      { name: 'Condo' },
    ]);
    await propertyTypeRepository.save(propertyTypes);
    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(10);
    console.log('Users seeded:', users.length);
    const propertyFactory = factoryManager.get(Property);
    const propertyFeatureFactory = factoryManager.get(PropertyFeature);
    const properties = await Promise.all(
      Array(10)
        .fill('')
        .map(async () => {
          const property = await propertyFactory.make({
            user: faker.helpers.arrayElement(users),
            type: faker.helpers.arrayElement(propertyTypes),
            propertyFeature: await propertyFeatureFactory.save(),
          });
          return property;
        }),
    );
    const propertyRepository = dataSource.getRepository(Property);
    await propertyRepository.save(properties);
  }
}
