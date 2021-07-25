import { Connection } from 'typeorm';
import { Operation } from './entities/operation.entity';
import {
  DATABASE_CONNECTION,
  OPERATIONS_REPO_PROVIDER,
} from '../shared/constants';

export const operationsProviders = [
  {
    provide: OPERATIONS_REPO_PROVIDER,
    useFactory: (connection: Connection) => connection.getRepository(Operation),
    inject: [DATABASE_CONNECTION],
  },
];
