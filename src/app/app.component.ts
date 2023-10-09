import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {Istd } from './shared/modals/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iostdtask';
  todoarray: Array<string> = ["angular"]; /// it is todo list info start
  onadd(todoref: HTMLInputElement) {
    let valuer = todoref.value
    this.todoarray.push(valuer)
    todoref.value = ''
  }
  todoitem(val: string) {
    this.todoarray.push(val)
  }
  //// it is todo list function end


  /// it is todo list info start


  stdArray: Array<Istd> = [
    {
      fname: "neha",
      lname: "kanke",
      email: "nehakanke@gmail.com",
      contact: 9325793540

    }
  ];
  std2array:Array<Istd>=[
  //   {
  //   fname: "shubham",
  //     lname: "hawa",
  //     email: "shubhamhawa@gmail.com",
  //     contact: 7083539646

  // }
]

  @ViewChild("fname") fname !: ElementRef;
  @ViewChild("lname") lname !: ElementRef;
  @ViewChild("email") email !: ElementRef;
  @ViewChild("contact") contact !: ElementRef
 
  addstd() {
    let stdobj: Istd = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value
    }
    this.fname.nativeElement.value = "",
      this.lname.nativeElement.value = "",
      this.email.nativeElement.value = '',
      this.contact.nativeElement.value = ""
    this.stdArray.push(stdobj)
  }

//// it is std info function end

;

getstddata(std:Istd){
  this.std2array.push(std)

}
}
