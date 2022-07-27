import { Controller, Get } from '@nestjs/common';
import { Books } from 'src/entities/book.entity';
import { BooksService } from 'src/services/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Books[]> {
    return this.booksService.findAll();
  }
}
