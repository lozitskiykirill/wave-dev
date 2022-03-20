import { Component, OnInit } from '@angular/core';
// import {SwiperOptions} from "swiper";
import { PopularActivity } from '../../../interfaces/popularActivities';
//import { Activity } from '../../../interfaces/Activity';
//import { ActivityFare } from '../../../interfaces/Activity';



import SwiperCore, { SwiperOptions, Navigation } from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  fareActivityStatus: boolean = false;
  fareActivityButtonText: string = '';
  activeButton: number = 0;
  isSale: boolean = false;
  configRecentSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.search_next',
      prevEl: '.search_prev'
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 30
        // spaceBetween: 20
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 10
        // spaceBetween: 20
      },
      // when window width is >= 640px
      575: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  };

  configActivityButtonsSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.activity-buttons-next',
      prevEl: '.activity-buttons-prev'
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
        spaceBetween: 50
        // spaceBetween: 20
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 20
        // spaceBetween: 20
      },
      // when window width is >= 640px
      575: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  };


  image: string = '';
  fare: any;
  //faresList: ActivityFare[];

  activityImages = [
    {
      id: 0,
      name: '../../../../assets/images/prototype/activity-big-1.jpg',
    },
    {
      id: 1,
      name: '../../../../assets/images/prototype/activity-big-2.jpg',
    },
    {
      id: 2,
      name: '../../../../assets/images/prototype/activity-big-2.jpg',
    },
    {
      id: 3,
      name: '../../../../assets/images/prototype/main-photo.jpg',
    },
    {
      id: 4,
      name: '../../../../assets/images/prototype/activity-big-1.jpg',
    },
    {
      id: 5,
      name: '../../../../assets/images/prototype/activity-big-2.jpg',
    },
    {
      id: 6,
      name: '../../../../assets/images/prototype/main-photo.jpg',
    },
    {
      id: 7,
      name: '../../../../assets/images/prototype/activity-big-1.jpg',
    },
    {
      id: 8,
      name: '../../../../assets/images/prototype/activity-big-2.jpg',
    },
    {
      id: 9,
      name: '../../../../assets/images/prototype/main-photo.jpg',
    },
  ];

  activityFares = [
    {
      id: 0,
      name: '1-местная байдарка',
      isOnSale: true,
      options: [
        {
          name: "1 час",
          price: 100,
          old_price: 150
        },
        {
          name: "2 часа",
          price: 200,
          old_price: 150
        },
        {
          name: "3 часа",
          price: 300,
          old_price: 150
        },
        {
          name: "4 часа",
          price: 400,
          old_price: 150
        },
        {
          name: "5 часов",
          price: 500,
          old_price: 150
        },
        {
          name: "6 часов",
          price: 600,
          old_price: 150
        },
        {
          name: "1 час",
          price: 100,
          old_price: 150
        },
        {
          name: "2 часа",
          price: 200,
          old_price: 150
        },
        {
          name: "3 часа",
          price: 300,
          old_price: 150
        },
        {
          name: "4 часа",
          price: 400,
          old_price: 150
        },
        {
          name: "5 часов",
          price: 500,
          old_price: 150
        },
        {
          name: "6 часов",
          price: 600,
          old_price: 150
        },
        {
          name: "1 час",
          price: 100,
          old_price: 150
        },
        {
          name: "2 часа",
          price: 200,
          old_price: 150
        },
        {
          name: "3 часа",
          price: 300,
          old_price: 150
        },
        {
          name: "4 часа",
          price: 400,
          old_price: 150
        },
        {
          name: "5 часов",
          price: 500,
          old_price: 150
        },
        {
          name: "6 часов",
          price: 600,
          old_price: 150
        },
      ]
    },
    {
      id: 1,
      name: '2-местная байдарка',
      isOnSale: false,
      options: [
        {
          name: "вариант 2 1 час",
          price: 100
        },
        {
          name: "вариант 2 2 часа",
          price: 200
        },
        {
          name: "вариант 2 3 часа",
          price: 300
        },
        {
          name: "вариант 2 4 часа",
          price: 400
        },
        {
          name: "вариант 2 5 часов",
          price: 500
        },
        {
          name: "вариант 2 6 часов",
          price: 600
        }
      ]
    },
    {
      id: 2,
      name: '3-местная байдарка',
      isOnSale: false,
      options: [
        {
          name: "вариант 4 1 час",
          price: 100
        },
        {
          name: "вариант 4 2 часа",
          price: 200
        },
        {
          name: "вариант 4 3 часа",
          price: 300
        },
        {
          name: "вариант 4 4 часа",
          price: 400
        },
        {
          name: "вариант 4 5 часов",
          price: 500
        },
        {
          name: "вариант 4 6 часов",
          price: 600
        }
      ]
    },
    {
      id: 3,
      name: '4-местная байдарка',
      isOnSale: false,
      options: [
        {
          name: "вариант 4 1 час",
          price: 100
        },
        {
          name: "вариант 4 2 часа",
          price: 200
        },
        {
          name: "вариант 4 3 часа",
          price: 300
        },
        {
          name: "вариант 4 4 часа",
          price: 400
        },
        {
          name: "вариант 4 5 часов",
          price: 500
        },
        {
          name: "вариант 4 6 часов",
          price: 600
        }
      ]
    },
    {
      id: 4,
      name: '6-местная байдарка',
      isOnSale: false,
      options: [
        {
          name: "вариант 5 1 час",
          price: 100
        },
        {
          name: "вариант 5 2 часа",
          price: 200
        },
        {
          name: "вариант 5 3 часа",
          price: 300
        },
        {
          name: "вариант 5 4 часа",
          price: 400
        },
        {
          name: "вариант 5 5 часов",
          price: 500
        },
        {
          name: "вариант 5 6 часов",
          price: 600
        }
      ]
    },
    {
      id: 5,
      name: 'вплавь без байдарки',
      isOnSale: false,
      options: [
        {
          name: "вариант 6 1 час",
          price: 100
        },
        {
          name: "вариант 6 2 часа",
          price: 200
        },
        {
          name: "вариант 6 3 часа",
          price: 300
        },
        {
          name: "вариант 6 4 часа",
          price: 400
        },
        {
          name: "вариант 6 5 часов",
          price: 500
        },
        {
          name: "вариант 6 6 часов",
          price: 600
        }
      ]
    },
    {
      id: 6,
      name: 'По суше',
      isOnSale: false,
      options: [
        {
          name: "вариант 7 1 час",
          price: 100
        },
        {
          name: "вариант 7 2 часа",
          price: 200
        },
        {
          name: "вариант 7 3 часа",
          price: 300
        },
        {
          name: "вариант 7 4 часа",
          price: 400
        },
        {
          name: "вариант 7 5 часов",
          price: 500
        },
        {
          name: "вариант 7 6 часов",
          price: 600
        }
      ]
    },
    {
      id: 7,
      name: 'сидеть дома на диване',
      isOnSale: false,
      options: [
        {
          name: "вариант 8 1 час",
          price: 100
        },
        {
          name: "вариант 8 2 часа",
          price: 200
        },
        {
          name: "вариант 8 3 часа",
          price: 300
        },
        {
          name: "вариант 8 4 часа",
          price: 400
        },
        {
          name: "вариант 8 5 часов",
          price: 500
        },
        {
          name: "вариант 8 6 часов",
          price: 600
        }
      ]
    }
  ];

  feedbacks = [
    {
      name: 'Аллахьяр Сайядманеш',
      image: '../../../assets/images/prototype/userlogo-1.png',
      date: '28 сентября 2021',
      dislikes: 87,
      likes: 65,
      rating: 9.0,
      description: 'Все супер! Вчера спонтанно решили с друзьями поплавать на сапах, нашли Кон-Тики по приемлемой цене и рассположению, забронировали. Очень понравилось качество сапов и помощь инстрокторов. Приедем к вам еще!\n',
      isAnswer: false,
      isNoBorder: false,
    },
    {
      name: 'Сурело Кирилл',
      image: '../../../assets/images/prototype/userlogo-2.png',
      date: '09 сентября 2021',
      dislikes: 87,
      likes: 65,
      rating: 9.0,
      description: 'Обслуживание на уровне, есть туалет/душ/раздевалка. Очень порадовало\n' +
        ', что есть парковка, где я смог оставить свой BMW :)\n',
      isAnswer: false,
      isNoBorder: false,
    },
    {
      name: 'Берестовой Валентин',
      image: '../../../assets/images/prototype/userlogo-3.png',
      date: '24 августа 2021',
      dislikes: 1,
      likes: 100,
      rating: 3.0,
      description: 'Хуже места не посещал! Все началось с того, что мы с супругой' +
        'забронировали 1 двух местную байдарку на 30.11 с 11:00 до 15:45, приехали' +
        'за 15 минут подошли на ресепшен, на вопрос где можно переодеться, нам так' +
        'никто внятно и не ответил, а после начался вообще ТРЕШШШШ!...',
      isAnswer: false,
      isNoBorder: true,
    },
    {
      name: 'Администрация Кон-Тики',
      image: '../../../assets/images/icons/avatar.svg',
      date: '24 августа 2021',
      dislikes: 1,
      likes: 100,
      rating: 3.0,
      description: 'Приносим вам наши извинения за наших сотрудников, которые не проявили к вам' +
        'внимания в должной мере. Больше этого не повторится!' +
        'Что касается не той байдарке, то это был глюк в системе приложения Wave, но это не повод больше к нам не приезжать',
      isAnswer: true,
      isNoBorder: false,
    },
  ];

  activityData = {
    id: 0,
    title: 'Центр приключений “Кон-Тики”:',
    type: 'Гребля на байдарке',
    address: 'г. Запорожье, ул. Глиссерная, 26а',
    distance: '4 км от центра',
    descriptions: [
      {
        title: "Об активности",
        text: 'Запорожский край и остров Хортица — один из самых богатых на речные эмоции. Бери каяк, SUP или велосипед и вперёд к приключениям. Мы хотим, чтобы ты сам ощутил это на себе!' +
          'Наши каяки (они же байдарки) — широкие и устойчивые. В них можно плавать с животными, детьми, бабушками и дедушками, камерами и мобильными телефонами. Всё будет в целостности и сохранности.' +
          'Каждые выходные наши инструкторы выходят на воду и показывают лучшие речные места нашего края.\n Присоединяйтесь!\n' +
          'Хочешь покорить Днепр стоя? Любишь вёсла и не боишься воды? Тогда жёсткие и надувные SUP доски лучших мир' +
          'овых производителей ждут тебя!',
      },
      {
        title: "О провайдере",
        text: 'Запорожский край и остров Хортица — один из самых богатых на речные эмоции. Бери каяк, SUP или велосипед и вперёд к приключениям. Мы хотим, чтобы ты сам ощутил это на себе!' +
          'Наши каяки (они же байдарки) — широкие и устойчивые. В них можно плавать с животными, детьми, бабушками и дедушками, камерами и мобильными телефонами.',
      },
      {
        title: "О местности",
        text: 'Запорожский край и остров Хортица — один из самых богатых на речные эмоции. Бери каяк, SUP или велосипед и вперёд к приключениям. Мы хотим, чтобы ты сам ощутил это на себе!' +
          'Наши каяки (они же байдарки) — широкие и устойчивые. В них можно плавать с животными, детьми, бабушками и дедушками, камерами и мобильными телефонами.',
      }
    ],
    label: [
      {
        name: "Кофе на территории клуба",
        image: "./../../../assets/images/icons/activity-options/card-option-coffee.svg",
      },
      {
        name: "Парковка близко к воде",
        image: "./../../../assets/images/icons/activity-options/card-option-parking.svg",
      },
      {
        name: "Место для ночлега",
        image: "./../../../assets/images/icons/activity-options/card-option-tent.svg",
      },
      {
        name: "Персонал говорит на английском языке",
        image: "./../../../assets/images/icons/activity-options/card-option-eng.svg",
      },
    ],
    facilities: [
      {
        name: "бесплатный wi-fi,",
        icon: "./../../../assets/images/icons/activity-options/wifi.svg",
      },
      {
        name: "кафе,",
        icon: "./../../../assets/images/icons/activity-options/cafe.svg",
      },
      {
        name: "раздевалка,",
        icon: "./../../../assets/images/icons/activity-options/hanger.svg",
      },
      {
        name: "туалет,",
        icon: "./../../../assets/images/icons/activity-options/wc.svg",
      },
      {
        name: "душ,",
        icon: "./../../../assets/images/icons/activity-options/shower.svg",
      },
      {
        name: "велопарковка",
        icon: "./../../../assets/images/icons/activity-options/bycicle.svg",
      },
    ],
    worktime: [
      {
        value: "пн-ср - 9:30-18:00",
      },
      {
        value: "чт - 9:30-19:00",
      },
      {
        value: "пт-вс - 9:30-20:00",
      },
    ],
    rating: [
      {
        name: "Чисто",
        rating: 9.7,
      },
      {
        name: "Приветливый персонал",
        rating: 8,
      },
      {
        name: "Красивый вид",
        rating: 10.00,
      },
    ]
  };


  // configRecentSlider: SwiperOptions = {
  //   slidesPerView: 2,
  //   spaceBetween: 15,
  //   loop: true,
  //   navigation: {
  //     nextEl: '.home-pop-activities_next',
  //     prevEl: '.home-pop-activities_prev'
  //   },
  //   breakpoints: {
  //     1199: {
  //       slidesPerView: 5,
  //       spaceBetween: 30
  //     },
  //     991: {
  //       slidesPerView: 4,
  //       spaceBetween: 25
  //     },
  //     767: {
  //       slidesPerView: 4,
  //       spaceBetween: 20
  //     },
  //     575: {
  //       slidesPerView: 3,
  //       spaceBetween: 15
  //     }
  //   }
  // };



  popularActivities: PopularActivity[];
  activity: any;

  constructor() {
    this.popularActivities = getPopularActivities();
    this.activity = this.fetchActivity();

    function getPopularActivities() {
      let popularActivities = [
        {
          activity_image: '../../../assets/images/prototype/pop-activity-1.jpg',
          start_price: 200,
          activity_name: 'событие концертное',
          offers: 17,
        },
        {
          activity_image: '../../../assets/images/prototype/pop-activity-2.jpg',
          start_price: 400,
          activity_name: 'велосипед',
          offers: 17,
        },
        {
          activity_image: '../../../assets/images/prototype/pop-activity-3.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },{
          activity_image: '../../../assets/images/prototype/pop-activity-4.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },
        {
          activity_image: '../../../assets/images/prototype/pop-activity-1.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },
        {
          activity_image: '../../../assets/images/prototype/pop-activity-2.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },
        {
          activity_image: '../../../assets/images/prototype/pop-activity-3.jpg',
          start_price: 200,
          activity_name: 'банка кетчупа',
          offers: 17,
        },
      ];
      return popularActivities;
    };
  }

  ngOnInit(): void {
    this.changeActivityData(0);
    this.fetchActivity();
    this.fareActivityButtonText = 'Показать больше';
  }

  fetchActivity() {
    this.activity = this.activityData;
  }

  fetchFares (id: number) {
    this.fare = this.activityFares[id].options;
    this.isSale = this.activityFares[id].isOnSale;
  }

  fetchImages(id: number) {
    this.image = this.activityImages[id].name;
  }

  changeActivityData(id : number) {
    this.fetchImages(id);
    this.fetchFares(id);
    this.activeButton = id;
  }

  faresShowHide() {
    this.fareActivityStatus = !this.fareActivityStatus; 
    if (this.fareActivityStatus) {
      this.fareActivityButtonText = 'Свернуть';
    } else {
      this.fareActivityButtonText = 'Показать больше';
    }
  }
}
