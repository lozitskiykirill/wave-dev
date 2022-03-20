import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-box',
  templateUrl: './price-box.component.html',
  styleUrls: ['./price-box.component.scss']
})

export class PriceBoxComponent implements OnInit {

  //activityPrice: number = '0';

  //@Input() price;

  constructor() { }

  ngOnInit(): void {
    //this.activityPrice = this.price;
  }

}
