import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-opportunities',
  templateUrl: './business-opportunities.component.html',
  styleUrls: ['./business-opportunities.component.scss']
})
export class BusinessOpportunitiesComponent implements OnInit {
  
  isAddProvider:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  addProvider(){
    this.isAddProvider = true;
  }
}
