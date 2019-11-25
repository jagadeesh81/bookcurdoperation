import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/authors.model';
import { AuthorService } from '../../shared/service/author/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  
  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.getAllAuthor();
  }

  getAllAuthor() {
    this.authorService.getAllAuthor();
  }

  editAuthor(author: Author) {
    this.authorService.currentAuthor = Object.assign({}, author);
  }

  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe(
      (data) => {
        this.getAllAuthor();
      });
  }
}

