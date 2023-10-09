import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
     @Input() gettodoarray:Array<string>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
