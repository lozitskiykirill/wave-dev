import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-box-left',
  templateUrl: './rating-box-left.component.html',
  styleUrls: ['./rating-box-left.component.scss']
})
export class RatingBoxLeftComponent implements OnInit {

  varikiActive: string = "Самый дешевый";
  // varikiActive: string = "Популярный";

  @Input() variki = "Популярный";
  // @Input() variki = "Дешевый";

  constructor() { }

  ngOnInit(): void {
    this.varikiActive = this.variki;
  }

}
