import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-time',
  templateUrl: './order-time.component.html',
  styleUrls: ['./order-time.component.scss']
})
export class OrderTimeComponent implements OnInit {
  amount:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  amountPlus(){
    this.amount++;
  }
  amountMinus(){
    if (this.amount > 1) {
      this.amount--;
    }
  }

}
