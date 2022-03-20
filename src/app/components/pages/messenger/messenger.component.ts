import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  
  isMobileAside:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  mobileAside(){
    this.isMobileAside = !this.isMobileAside;
  }

}
