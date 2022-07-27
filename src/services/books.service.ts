import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books } from 'src/entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books) private booksRepository: Repository<Books>,
  ) {}

  findAll(): Promise<Books[]> {
    return this.booksRepository.find();
  }
}
