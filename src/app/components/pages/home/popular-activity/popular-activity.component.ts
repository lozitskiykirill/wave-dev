import {Component, Input, OnInit} from '@angular/core';
import { PopularActivity } from '../../../../interfaces/popularActivities';

@Component({
  selector: 'app-popular-activity',
  templateUrl: './popular-activity.component.html',
  styleUrls: ['./popular-activity.component.scss']
})

export class PopularActivityComponent {

  popActivityImage: string = '';
  popActivityName: string = '';
  popActivityOffers: number =  0;
  popActivityPrice: number =  1;
  @Input() popularActivity!: PopularActivity;

  constructor() {
  }

  ngOnInit(): void {
    this.popActivityImage = this.popularActivity.activity_image;
    this.popActivityName = this.popularActivity.activity_name;
    this.popActivityOffers = this.popularActivity.offers;
    this.popActivityPrice = this.popularActivity.start_price;
  }

}
