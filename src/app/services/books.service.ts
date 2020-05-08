import { Injectable } from '@angular/core';
import { Book } from 'src/models/book.model';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];

  bookSubject = new Subject<Book[]>();

  constructor() { }

  emitBookSubject() {
    this.bookSubject.next(this.books);
  }

  saveBooks() {
    firebase.database().ref('/books').set(this.books);
    }

  getBooks() {
      firebase.database().ref('/books').on( 'value' , (data) => {
        this.books = data.val() ? data.val() : [];
        this.emitBookSubject();
      });
      }

  getSingleBook(id: number) {
    return new Promise(
      ( resolve, reject) => {
        firebase.database().ref('/books/' + id ).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBook(book: Book) {
    this.books.push(book);
    this.saveBooks();
    this.emitBookSubject();
  }

  removeBook(book: Book) {
    const bookIndexRemove = this.books.findIndex(
      (bookEl) => {
        if ( bookEl === book) {
        return true;
        }
      }
      );
    this.books.splice(bookIndexRemove, 1);
    this.saveBooks();
    this.emitBookSubject();
  }

}
