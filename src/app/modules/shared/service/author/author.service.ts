import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from 'src/app/model/authors.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthorService {

  mockUrl: string = 'http://localhost:3000/Author';
  allAuthor: Author[];

  currentAuthor: Author = {
    id: null,
    firstName: '',
    lastName: '',
    bookCode: null,
    contactNumber: null,
    address: '',
    price:null,
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllAuthor() {
    return this.http.get(this.mockUrl).subscribe(
      (data: Author[]) => {
        this.allAuthor = data;
        console.table(this.allAuthor);
      });
  }

  deleteAuthor(id: Number): Observable<Author> {
    return this.http.delete<Author>(this.mockUrl + '/' + id, headerOption);
  }

  createAuthor(Author:Author): Observable<Author> {
    return this.http.post<Author>(this.mockUrl,Author, headerOption);
  }

  updateAuthor(Author: Author): Observable<Author> {
    return this.http.put<Author>(this.mockUrl + '/' + Author.id, Author, headerOption);
  }
}
