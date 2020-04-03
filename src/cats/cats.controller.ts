import { Controller, Get, Post, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateCatDTO, ListAllEntities, UpdateCatDTO } from './dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService) {}

    @Post()
    async create(@Body() createCatDTO: CreateCatDTO) {
        this.catService.create(createCatDTO);
    }

    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        return this.catService.finalAll();
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
