import { Controller, Get, Post, Param, Body, Query, Put, Delete, ForbiddenException, UseFilters, UsePipes, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common';
import { CreateCatDTO, ListAllEntities, UpdateCatDTO } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { ValidationPipe } from 'src/validation.pipe';
import { ParseIntPipe } from 'src/parse-int.pipe';
import { Roles } from 'src/roles.decorator';
import { LoggingInterceptor } from 'src/logging.interceptor';
import { TransformInterceptor } from 'src/transform.interceptor';

@Controller('cats')
@Roles('admin')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
    constructor(private catService: CatsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    @SetMetadata('roles', ['admin'])
    async create(@Body() createCatDTO: CreateCatDTO) {
        this.catService.create(createCatDTO);
    }

    @Get()
    @UseInterceptors(TransformInterceptor)
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        return this.catService.finalAll();
    }

    @Get(':id')
    @UseFilters(HttpExceptionFilter)
    findOne(@Param('id', ParseIntPipe) id: number): string {
        if (id === 3) {
            throw new ForbiddenException();
        }
        return `This action return cat with id ${id}.`;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDTO: UpdateCatDTO): string {
        return `This action update cat with id ${id}.`;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return `This action remove cat with id ${id}.`;
    }
}
