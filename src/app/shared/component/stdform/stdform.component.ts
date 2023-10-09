import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../modals/std';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
  
  //  @Output() senddataparent : EventEmitter<Istd>=new EventEmitter()
@Output() emittdata : EventEmitter <Istd>=new EventEmitter<Istd>();
@ViewChild("fname") fname !: ElementRef;
  @ViewChild("lname") lname !: ElementRef;
  @ViewChild("email") email !: ElementRef;
  @ViewChild("contact") contact !: ElementRef

  constructor() { }

  ngOnInit(): void {
  }



  addstd(){
    let stdobj: Istd = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
    }
    this.fname.nativeElement.value = "",
      this.lname.nativeElement.value = "",
      this.email.nativeElement.value = '',
      this.contact.nativeElement.value = ""
    this.emittdata.emit(stdobj)

  }
}
