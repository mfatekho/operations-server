import { Inject, Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { OPERATIONS_REPO_PROVIDER } from '../shared/constants';
import { Operation } from './entities/operation.entity';
import { Repository } from 'typeorm';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OperationsService {
  operationsSubject$: BehaviorSubject<Operation[]> = new BehaviorSubject<
    Operation[]
  >([]);

  constructor(
    @Inject(OPERATIONS_REPO_PROVIDER)
    private operationsRepository: Repository<Operation>,
  ) {
    this.fillOperations();
  }

  private async fillOperations() {
    const operations: Operation[] = await this.operationsRepository.find();
    this.operationsSubject$.next(operations);
  }

  async create(createOperationDto: CreateOperationDto) {
    const operationEntity: Operation =
      this.operationsRepository.create(createOperationDto);
    const operation = await operationEntity.save();
    this.imitateOperationProcess(operation);
    return operation;
  }

  findAll() {
    return this.operationsRepository.find();
  }

  async findOne(id: number) {
    return await this.operationsRepository.findOne(id);
  }

  update(id: number, updateOperationDto: UpdateOperationDto) {
    return `This action updates a #${id} operation`;
  }

  async remove(id: number) {
    const operation: Operation = await this.operationsRepository.findOne(id);
    if (!operation) {
      return;
    }
    return operation.remove();
  }

  private imitateOperationProcess(operation: Operation) {
    const operations = this.operationsSubject$.getValue();
    this.operationsSubject$.next([...operations, operation]);
    setTimeout(async () => {
      const operations = this.operationsSubject$.getValue();
      const updatedOperation = operations.map((op) =>
        op.id === operation.id ? ({ ...op, status: 'Ready' } as Operation) : op,
      );
      operation.status = 'Ready';
      await operation.save();
      this.operationsSubject$.next(updatedOperation);
    }, 5000);
  }
}
