import { Component, OnInit } from '@angular/core';
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.scss'],
})
export class ShowDateComponent implements OnInit {

  myDate = new Date();

  constructor() {
    //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
}
