import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-list-item',
  templateUrl: './date-list-item.component.html',
  styleUrls: ['./date-list-item.component.scss']
})
export class DateListItemComponent implements OnInit {

  dateData: any;

  @Input() date = '';

  constructor() { }

  ngOnInit(): void {
    this.dateData = this.date;
  }

}
