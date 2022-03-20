import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  isPageOrderTime: boolean = true;
  isPageOrderOptions: boolean = false;
  isPageOrderPayment: boolean = false;
  isPageOrderSuccess: boolean = false;

  page : string = 'pageOrderTime';

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    switch (this.page) {
      case 'pageOrderTime':
        this.isPageOrderTime = false;
        this.isPageOrderOptions = true;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderOptions';
        break;
      case 'PageOrderOptions':
        this.isPageOrderTime = false;
        this.isPageOrderOptions = false;
        this.isPageOrderPayment = true;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderPayment';
        break;
      case 'PageOrderPayment':
        this.isPageOrderTime = false;
        this.isPageOrderOptions = false;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = true;

        this.page = 'PageOrderSuccess';
        break;
      case 'PageOrderSuccess':
        this.isPageOrderTime = false;
        this.isPageOrderOptions = false;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = true;

        this.page = 'PageOrderSuccess';
        break;
      default:
        this.isPageOrderTime = false;
        this.isPageOrderOptions = true;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderOptions';
        break;
    }
  };

  prevPage() {
    switch (this.page) {
      case 'PageOrderTime':
        this.isPageOrderTime = true;
        this.isPageOrderOptions = false;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderTime';
        break;
      case 'PageOrderOptions':
        this.isPageOrderTime = true;
        this.isPageOrderOptions = false;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderTime';
        break;
      case 'PageOrderPayment':
        this.isPageOrderTime = false;
        this.isPageOrderOptions = true;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderOptions';
        break;
      case 'PageOrderSuccess':
        this.isPageOrderTime = false;
        this.isPageOrderOptions = false;
        this.isPageOrderPayment = true;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderPayment';
        break;
      default:
        this.isPageOrderTime = true;
        this.isPageOrderOptions = false;
        this.isPageOrderPayment = false;
        this.isPageOrderSuccess = false;

        this.page = 'PageOrderTime';
        break;
    }
  };

}
