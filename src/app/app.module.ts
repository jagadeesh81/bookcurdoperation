import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/service/shared.module';
import { AuthorModule } from './modules/authors/author.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,AuthorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
