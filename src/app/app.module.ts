import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './shared/component/todolist/todolist.component';
import { TodoformComponent } from './shared/component/todoform/todoform.component';
import { StdformComponent } from './shared/component/stdform/stdform.component';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoformComponent,
    StdformComponent,
    StdtableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
