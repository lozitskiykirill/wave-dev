import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-type-rental',
  templateUrl: './reg-type-rental.component.html',
  styleUrls: ['./reg-type-rental.component.scss']
})
export class RegTypeRentalComponent implements OnInit {

  rent0:string = 'Как называется Ваш центр проката?';
  object0:string = 'Как называется Ваш объект отдыха?';
  rent1:string = 'Название центра';
  object1:string = 'Название объекта';

  isRent:boolean = true;

  current0:string = 'Как называется Ваш центр проката?';
  current1:string = 'Название центра';

  constructor() { }

  ngOnInit(): void {
  }

  typeRent() {
    this.current0 = this.rent0;
    this.current1 = this.rent1;
    this.isRent = true;
  }
  typeObject() {
    this.current0 = this.object0;
    this.current1 = this.object1;
    this.isRent = false;
  }

}
