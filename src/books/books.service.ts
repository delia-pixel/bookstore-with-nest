import { HttpException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { MockBooks } from '../mock/mock-books';
const books = MockBooks;
@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    books.push(createBookDto);
    return books;
  }

  findAll() {
    return books;
  }

  findOne(id: number) {
    const book = books.find((book) => book.id === id);
    if (!book) {
      throw new HttpException('Book does not exist', 404);
    } else {
      return book;
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const oldBook = this.findOne(id);
    if (updateBookDto.id) {
      oldBook.id = updateBookDto.id;
    }
    if (updateBookDto.title) {
      oldBook.title = updateBookDto.title;
    }
    if (updateBookDto.description) {
      oldBook.description = updateBookDto.description;
    }
    if (updateBookDto.author) {
      oldBook.author = updateBookDto.author;
    }
    return oldBook;
  }

  remove(id: number) {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
      throw new HttpException('Book not found', 404);
    } else {
      books.splice(index, 1);
      return books;
    }
  }
}
