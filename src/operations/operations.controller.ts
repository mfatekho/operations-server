import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
} from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { map } from 'rxjs/operators';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  create(@Body() createOperationDto: CreateOperationDto) {
    return this.operationsService.create(createOperationDto);
  }

  @Get()
  findAll() {
    return this.operationsService.findAll();
  }

  @Sse('sse')
  sse() {
    return this.operationsService.operationsSubject$.pipe(
      map((operations) => ({ data: { operations } } as MessageEvent)),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOperationDto: UpdateOperationDto,
  ) {
    return this.operationsService.update(+id, updateOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operationsService.remove(+id);
  }
}
