import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TweetfavoritoService } from './tweetfavorito.service';
import { CreateTweetfavoritoDto } from './dto/create-tweetfavorito.dto';
import { UpdateTweetfavoritoDto } from './dto/update-tweetfavorito.dto';

@Controller('tweetfavorito')
export class TweetfavoritoController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly tweetfavoritoService: TweetfavoritoService) {}

  @Post()
  create(@Body() createTweetfavoritoDto: CreateTweetfavoritoDto) {
    return this.tweetfavoritoService.createPrisma(createTweetfavoritoDto);
  }

  @Get()
  findAll() {
    return this.tweetfavoritoService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetfavoritoService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetfavoritoDto: UpdateTweetfavoritoDto) {
    return this.tweetfavoritoService.updatePrisma(+id, updateTweetfavoritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetfavoritoService.removePrisma(+id);
  }
}
