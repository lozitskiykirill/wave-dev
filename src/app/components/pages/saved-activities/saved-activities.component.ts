import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-activities',
  templateUrl: './saved-activities.component.html',
  styleUrls: ['./saved-activities.component.scss']
})
export class SavedActivitiesComponent implements OnInit {

  activities: any;

  activitiesData = {
    activities: [
      {
        image: '../../../assets/images/prototype/pop-activity-1.jpg',
        name: 'Гребля на байдарке',
        provider: 'Центр приключений “Кон-Тики”',
        price: '200',
        link: '/activity',
        provider_link: '/provider',
      },
      {
        image: '../../../assets/images/prototype/pop-activity-2.jpg',
        name: 'Гребля на SUP',
        provider: 'Каяк-Каное Центр',
        price: '400',
        link: '/activity',
        provider_link: '/provider',
      },
      {
        image: '../../../assets/images/prototype/pop-activity-3.jpg',
        name: 'Прогулка на велосипеде',
        provider: 'Porto Riva',
        price: '360',
        link: '/activity',
        provider_link: '/provider',
      },
      {
        image: '../../../assets/images/prototype/pop-activity-1.jpg',
        name: 'Вейкбординг',
        provider: 'Pool&Beach',
        price: '200',
        link: '/activity',
        provider_link: '/provider',
      },
      {
        image: '../../../assets/images/prototype/pop-activity-2.jpg',
        name: 'Гребля на байдарке',
        provider: 'База клуба “Байдарка”',
        price: '400',
        link: '/activity',
        provider_link: '/provider',
      },
      {
        image: '../../../assets/images/prototype/pop-activity-3.jpg',
        name: 'Гребля на байдарке',
        provider: 'Центр приключений “Кон-Тики”',
        price: '360',
        link: '/activity',
        provider_link: '/provider',
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.fetchActivities();
  }

  fetchActivities() {
    this.activities = this.activitiesData;
  }

}
