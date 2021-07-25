import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { DatabaseModule } from '../database/database.module';
import { operationsProviders } from './operations.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OperationsController],
  providers: [...operationsProviders, OperationsService],
})
export class OperationsModule {}
