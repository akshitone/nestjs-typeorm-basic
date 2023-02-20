import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '172.17.0.2',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'books',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};
