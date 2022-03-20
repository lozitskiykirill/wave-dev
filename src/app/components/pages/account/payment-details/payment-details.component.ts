import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  isMain:boolean = true;
  isAddCard:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  addCard(){
    this.isMain = false;
    this.isAddCard = true;
  }
}
