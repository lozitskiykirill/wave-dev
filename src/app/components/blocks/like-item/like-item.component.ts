import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-item',
  templateUrl: './like-item.component.html',
  styleUrls: ['./like-item.component.scss']
})
export class LikeItemComponent implements OnInit {

  step: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(name: any) {
    this.step = !this.step;
  }
}
