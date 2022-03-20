import { Component, Input } from '@angular/core';
import { BestRecreationalFacility } from '../../../../interfaces/bestRecreationalFacilities';

@Component({
  selector: 'app-top-rate-activities',
  templateUrl: './top-rate-activities.component.html',
  styleUrls: ['./top-rate-activities.component.scss']
})


export class TopRateActivitiesComponent {

  topRateActivitiesImage: string = '';
  topRateActivitiesIndex: number = 1;
  topRateActivityName: string = '';
  topActivityAddress: string = '';
  topRateActivitiesDescription: string = '';
  topRateActivityRating: number = 0;
  topRateActivitiesFeedbacks: number = 3;

  step: boolean = false;


  @Input() bestFacility!: BestRecreationalFacility;

  constructor() {
  }



  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.topRateActivitiesImage = this.bestFacility.image;
    this.topRateActivityName = this.bestFacility.name;
    this.topActivityAddress = this.bestFacility.location;
    this.topRateActivitiesDescription = this.bestFacility.description;
    this.topRateActivityRating = this.bestFacility.rating;
    this.topRateActivitiesFeedbacks = this.bestFacility.feedbacks;
  }

  onClickMe(name: any) {
    //alert('clicked. Name: ' + name);
    this.step = !this.step;
  }

}
