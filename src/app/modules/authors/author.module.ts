import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorService } from '../shared/service/author/author.service';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorComponent } from './author/author.component';
import { SharedModule } from '../shared/service/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
   AuthorComponent,
    AuthorListComponent
  ],
  exports: [
   AuthorComponent,
   AuthorListComponent
  ],
  providers: [
    AuthorService
  ]
})
export class AuthorModule { }