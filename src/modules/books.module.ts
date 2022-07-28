import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './../services/books.service';
import { Books } from 'src/entities/book.entity';
import { BooksController } from 'src/controllers/books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
