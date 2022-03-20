import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-providers',
  templateUrl: './saved-providers.component.html',
  styleUrls: ['./saved-providers.component.scss']
})
export class SavedProvidersComponent implements OnInit {

  providers: any;

  providersData = {
    providers: [
      {
        image: 'assets/images/prototype/pop-activity-1.jpg',
        name: 'Центр приключений “Кон-Тики”',
        address: 'г. Запорожье, ул. Глиссерная, 26а',
        link: '/provider',
      },
      {
        image: 'assets/images/prototype/pop-activity-2.jpg',
        name: '“Каяк-Каное Центр”',
        address: 'г. Запорожье, ул. Чубанова, 13',
        link: '/provider',
      },
      {
        image: 'assets/images/prototype/pop-activity-3.jpg',
        name: 'Porto Riva',
        address: 'г. Запорожье, ул. Привокзальная, 15',
        link: '/provider',
      },
      {
        image: 'assets/images/prototype/pop-activity-1.jpg',
        name: 'Pool&Beach',
        address: 'г. Запорожье, ул. Набережная магистраль, 60б',
        link: '/provider',
      },
      {
        image: 'assets/images/prototype/pop-activity-2.jpg',
        name: 'База клуба “Байдарка”',
        address: 'г. Запорожье, ул. Скальная, 76а',
        link: '/provider',
      },
      {
        image: 'assets/images/prototype/pop-activity-3.jpg',
        name: 'Центр приключений “Кон-Тики”',
        address: 'г. Запорожье, ул. Глиссерная, 26а',
        link: '/provider',
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.fetchProviders();
  }

  fetchProviders() {
    this.providers = this.providersData;
  }

}
