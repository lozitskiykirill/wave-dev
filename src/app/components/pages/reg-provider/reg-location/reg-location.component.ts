import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-location',
  templateUrl: './reg-location.component.html',
  styleUrls: ['./reg-location.component.scss']
})
export class RegLocationComponent implements OnInit {
  disable:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.disable = !this.disable;
  }

}
