import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../modals/std';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
  @Input() getdata:Array<Istd>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
