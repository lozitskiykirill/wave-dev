import {Component, Input, OnInit} from '@angular/core';
import { UpcomingEvent } from '../../../../interfaces/upcomingEvent';
//import any = jasmine.any;

@Component({
  selector: 'app-upcoming-activity',
  templateUrl: './upcoming-activity.component.html',
  styleUrls: ['./upcoming-activity.component.scss']
})

export class UpcomingActivityComponent implements OnInit {

  eventImage: string = '';
  eventName: string = '';
  eventId: number = 1;
  @Input() upcomingEvent!: UpcomingEvent;

  constructor() {
  }

  ngOnInit(): void {
    this.eventImage = this.upcomingEvent.image;
    this.eventId = this.upcomingEvent.upcomingEventId;
    this.eventName = this.upcomingEvent.name;
  }
}
