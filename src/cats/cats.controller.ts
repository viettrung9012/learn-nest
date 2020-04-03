import { Controller, Get, Post, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateCatDTO, ListAllEntities, UpdateCatDTO } from './dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDTO: CreateCatDTO): string {
        return 'This action adds a new cat.';
    }

    @Get()
    findAll(@Query() query: ListAllEntities): string {
        return `This action return all cats but with limit of ${query.limit}.`;
    }

    @Get(':id')
    findOne(@Param('id') id: number): string {
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
