import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
   @Output() gettodo :EventEmitter<string>=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  
  }
  ontodoitem(todoref:HTMLInputElement){
    let val=todoref.value;
    this.gettodo.emit(val);
    todoref.value=""
  }
}
function output(): (target: TodoformComponent, propertyKey: "gettodo") => void {
  throw new Error('Function not implemented.');
}

