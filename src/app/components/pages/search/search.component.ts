import {Component, Input, OnInit} from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';
import {CardOptions} from "../../../interfaces/card";
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  dateList: any;
  cards: any;

  currentDate = [
    {
      id: 0,
      date: '01.12',
      day:'сб'
    },
    {
      id: 1,
      date: '02.12',
      day:'вс'
    },
    {
      id: 2,
      date: '03.12',
      day:'пн'
    },
    {
      id: 3,
      date: '04.12',
      day:'вт'
    },
    {
      id: 4,
      date: '05.12',
      day:'ср'
    },
    {
      id: 5,
      date: '06.12',
      day:'чт'
    },
    {
      id: 6,
      date: '07.12',
      day:'пт'
    },
    {
      id: 7,
      date: '08.12',
      day:'сб'
    },
    {
      id: 8,
      date: '09.12',
      day:'вс'
    },
    {
      id: 9,
      date: '10.12',
      day:'пн'
    },
    {
      id: 10,
      date: '11.12',
      day:'вт'
    },
    {
      id: 11,
      date: '12.12',
      day:'сб'
    },
  ];

  cardsData = [
    {
      id: 1,
      image: "assets/images/prototype/top-activity-1.jpg",
      title: 'Центр приключений “Кон-Тики”',
      address: "г.Запорожье ул. Глиссерная, 26а",
      distance: '4 км от центра',
      feedbacks: 123,
      rating: 10.0,
      options: [
        {
          name: 'Вариант типа 1',
          number: 1,
          price: 300,
        },
        {
          name: 'Вариант типа 2',
          number: 2,
          price: 400,
        },
        {
          name: 'Вариант типа 3',
          number: 3,
          price: 600,
        },
      ],
      isPopular: true,
      isCheap: false,
      sale: '10%',
    },
    {
      id: 2,
      image: "assets/images/prototype/top-activity-2.jpg",
      title: 'Pool&Beach',
      address: "г. Запорожье, ул. Прибрежная автомагистраль, 60б",
      distance: '5 км от центра',
      feedbacks: 695,
      rating: 9.5,
      options: [
        {
          name: 'Вариант типа 1',
          number: 9,
          price: 250,
        },
        {
          name: 'Вариант типа 2',
          number: 7,
          price: 400,
        },
        {
          name: 'Вариант типа 3',
          number: 4,
          price: 700,
        },
      ],
      isPopular: false,
      isCheap: true,
      sale: '10%',
    },
    {
      id: 2,
      image: "https://image.shutterstock.com/image-photo/spectacular-mountain-views-hiking-trail-260nw-709728043.jpg",
      title: 'Непредсказуемое длинное название которое неожиданно появилось в карточке и несет в себе много важной, полезной и ценной информации',
      address: "Очень длинный адрес в городе Днепродзержинске улица Красногвардейцев-Запорожцев 195 корпус 5 квартира 1076",
      distance: '0',
      feedbacks: 0,
      rating: 1,
      options: [
        {
          name: 'Длинный вариант типа какого-нибудь 1',
          number: 9,
          price: 12250,
        },
        {
          name: '2',
          number: 7,
          price: 4000,
        },
        {
          name: '2',
          number: 7,
          price: 4000,
        },
        {
          name: '2',
          number: 7,
          price: 4000,
        },
        {
          name: 'еще один вариант, но длинный, который может быть еще длиннее',
          number: 7,
          price: 4000,
        },
        {
          name: '2',
          number: 7,
          price: 4000,
        },
        {
          name: '2',
          number: 7,
          price: 4000,
        },
        {
          name: 'Вариант для всех участников',
          number: 4,
          price: 7000,
        },
      ],
      isPopular: true,
      isCheap: false,
      sale: '100%',
    },
    {
      title: 'пустой (вот так будет выглядеть, если что-то не подгрузится)',
    },
    {
      address: "А вот так без названия будет выглядеть",
    },
    {
      title: 'Посмотрите на Эйфелеву башню в полный рост!',
      image: "https://w.histrf.ru/uploads/media/article/0001/25/thumb_24300_article_middle.jpeg",
    },
  ];

  configSearchDate: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.search_next',
      prevEl: '.search_prev'
    },
    breakpoints: {
      1199: {
        slidesPerView: 7,
        spaceBetween: 10
        // spaceBetween: 20
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 4,
        spaceBetween: 10
        // spaceBetween: 20
      },
      // when window width is >= 640px
      575: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.fetchDateList();
    this.fetchCardsData();
  }

  fetchDateList() {
    this.dateList = this.currentDate;
  }

  fetchCardsData() {
    this.cards = this.cardsData;
  }

}
