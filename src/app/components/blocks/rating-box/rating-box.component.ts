import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-box',
  templateUrl: './rating-box.component.html',
  styleUrls: ['./rating-box.component.scss']
})
export class RatingBoxComponent implements OnInit {

  activityRating: number = 0;

  @Input() rating = 1;

  constructor() { }

  ngOnInit(): void {
    this.activityRating = this.rating;
  }

}
