import { Component, OnInit } from '@angular/core';
import {  Author } from 'src/app/model/authors.model';
import { AuthorService } from '../../shared/service/author/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
  }

  createAuthor(currentAuthor: Author) {
    if (currentAuthor.id === null) {
      console.log('Create');
      this.authorService.createAuthor(currentAuthor).subscribe(
        (data) => {
          this.authorService.getAllAuthor();
        });
    } else {
      console.log('Update');
      this.authorService.updateAuthor(currentAuthor).subscribe(
        (data) => {
          this.authorService.getAllAuthor();
        });
    }
  }

  clearAuthor(currentAuthor: Author) {
    this.authorService.currentAuthor = {
      id: null,
      firstName: '',
      lastName: '',
      bookCode: null,
      contactNumber: null,
      address: '',
      price:null
    }
  }
}
