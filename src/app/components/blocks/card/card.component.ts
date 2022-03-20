import {Component, Input, OnInit} from '@angular/core';
import {Card, CardOptions} from "../../../interfaces/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData!: Card;

  title: string = "";
  feedbacks: number = 0;
  address: string = "";
  distance: string = "";
  card: any;
  rating: number = 0;
  isOpened: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.fetchCard();
    this.title = this.card.title;
    this.feedbacks = this.card.feedbacks;
    this.address = this.card.address;
    this.distance = this.card.distance;
    this.rating = this.card.rating;
  }

  fetchCard() {
    this.card = this.cardData;
  }

  showHide() {
    this.isOpened = !this.isOpened;
  }

}
