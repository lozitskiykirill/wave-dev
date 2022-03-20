import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  provider: any;

  providerData = {
    id: 0,
    title: 'Центр приключений “Кон-Тики”',
    address: 'г. Запорожье, ул. Глиссерная, 26а',
    distance: '4 км от центра',
    reviews_num: '966 отзывов',
    activities: [
      {
        image: 'assets/images/prototype/buggy.jpg',
        name: 'Багги',
        price: '400',
        link: '/activity',
      },
      {
        image: '../../../assets/images/prototype/quadro.jpg',
        name: 'Квадроциклы',
        price: '230',
        link: '/activity',
      },
      {
        image: '../../../assets/images/prototype/aviasim.jpg',
        name: 'Полет на авиасимуляторе',
        price: '660',
        link: '/activity',
      },
      {
        image: '../../../assets/images/prototype/boat.jpg',
        name: 'Прогулка на яхте',
        price: '990',
        link: '/activity',
      },
      {
        image: '../../../assets/images/prototype/ship.jpg',
        name: 'Теплоход',
        price: '2900',
        link: '/activity',
      },
      {
        image: '../../../assets/images/prototype/cart.jpg',
        name: 'Картинг',
        price: '470',
        link: '/activity',
      },
      {
        image: '../../../assets/images/prototype/rope.jpg',
        name: 'Веревочный парк',
        price: '190',
        link: '/activity',
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.fetchProvider();
  }

  fetchProvider() {
    this.provider = this.providerData;
  }

}
