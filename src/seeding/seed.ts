import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { propertyFactory } from './property.factory';
import { userFactory } from './user.factory';
import { propertyFeatureFactory } from './propertyFeature.factory';
import { MainSeeder } from './main.seeder';
import dbConfig from 'src/config/db.config';

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig(),
  factories: [propertyFactory, userFactory, propertyFeatureFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);
dataSource
  .initialize()
  .then(async () => {
    await dataSource.synchronize();
    await runSeeders(dataSource);
    process.exit();
  })
  .then(() => {
    console.log('Seeding completed successfully!');
    return dataSource.destroy();
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
