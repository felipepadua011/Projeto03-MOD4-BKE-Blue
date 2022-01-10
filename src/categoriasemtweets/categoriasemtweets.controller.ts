import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasemtweetsService } from './categoriasemtweets.service';
import { CreateCategoriasemtweetDto } from './dto/create-categoriasemtweet.dto';
import { UpdateCategoriasemtweetDto } from './dto/update-categoriasemtweet.dto';

@Controller('categoriasemtweets')
export class CategoriasemtweetsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly categoriasemtweetsService: CategoriasemtweetsService) {}

  @Post()
  create(@Body() createCategoriasemtweetDto: CreateCategoriasemtweetDto) {
    return this.categoriasemtweetsService.createPrisma(createCategoriasemtweetDto);
  }

  @Get()
  findAll() {
    return this.categoriasemtweetsService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasemtweetsService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriasemtweetDto: UpdateCategoriasemtweetDto) {
    return this.categoriasemtweetsService.updatePrisma(+id, updateCategoriasemtweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasemtweetsService.removePrisma(+id);
  }
}
