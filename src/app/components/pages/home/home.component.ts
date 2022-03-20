import { Component, OnInit,  } from '@angular/core';
import { BestRecreationalFacility } from '../../../interfaces/bestRecreationalFacilities';
import { UpcomingEvent } from '../../../interfaces/upcomingEvent';
import { PopularActivity } from '../../../interfaces/popularActivities';

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  configFacilities: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      575: {
        slidesPerView: 2,
        spaceBetween: 15
      }
    }
  };

  configPopActivity: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.home-pop-activities_next',
      prevEl: '.home-pop-activities_prev'
    },
    breakpoints: {
      1199: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 25
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  };

  homeBannerImage: string;
  homeBannerText: string;

  bestFacilities: BestRecreationalFacility[];
  upcomingEvents: UpcomingEvent[];
  popularActivities: PopularActivity[];

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() {
    this.homeBannerImage = getHomeBannerImage();
    this.homeBannerText = getHomeBannerText();

    this.upcomingEvents = getUpcomingEvents();
    this.bestFacilities = getBestFacilities();
    this.popularActivities = getPopularActivities();

    function getHomeBannerImage() {
      let homeBannerImage = 'assets/images/prototype/main-photo.jpg';
      return homeBannerImage;
    };
    function getHomeBannerText() {
      let homeBannerText = 'Найдите тип отдыха и активности, наиболее выгодный для Вас!';
      return homeBannerText;
    };

    function getUpcomingEvents() {
      let upcomingEvents = [
        {
          upcomingEventId: 1,
          name: 'событие 12222',
          image: 'assets/images/prototype/upcoming-activity-1.jpg',
        },
        {
          upcomingEventId: 2,
          name: 'событие 2',
          image: 'assets/images/prototype/upcoming-activity-2.jpg',
        },
        {
          upcomingEventId: 3,
          name: 'событие 3',
          image: 'assets/images/prototype/upcoming-activity-3.jpg',
        },
        {
          upcomingEventId: 4,
          name: 'событие 4',
          image: 'assets/images/prototype/upcoming-activity-4.jpg',
        },
        {
          upcomingEventId: 5,
          name: 'событие 5',
          image: 'assets/images/prototype/upcoming-activity-5.jpg',
        },
      ];
      return upcomingEvents;
    };

    function getPopularActivities() {
      let popularActivities = [
        {
          activity_image: 'assets/images/prototype/pop-activity-1.jpg',
          start_price: 200,
          activity_name: 'событие концертное',
          offers: 17,
        },
        {
          activity_image: 'assets/images/prototype/pop-activity-2.jpg',
          start_price: 400,
          activity_name: 'велосипед',
          offers: 17,
        },
        {
          activity_image: 'assets/images/prototype/pop-activity-3.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },{
          activity_image: 'assets/images/prototype/pop-activity-4.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },
        {
          activity_image: 'assets/images/prototype/pop-activity-1.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },
        {
          activity_image: 'assets/images/prototype/pop-activity-2.jpg',
          start_price: 200,
          activity_name: 'событие 12222',
          offers: 17,
        },
        {
          activity_image: 'assets/images/prototype/pop-activity-3.jpg',
          start_price: 200,
          activity_name: 'банка кетчупа',
          offers: 17,
        },
      ];
      return popularActivities;
    };

    function getBestFacilities() {
      let BestFacilities = [
        {
          recreationalfacility_id: 1,
          name: 'Отдых с очень длинным названием, которое будет обрезаться',
          description: 'Очень длинный текст, который настолько длинный что вылазить начнет из контейнера, который специально предназначен для того, чтоб показывать лишь ограниченное колличество контента',
          location: 'Длинногородск долгоадресовович бульвар длиннобуквенный 17в корпус 12 подьезд 6 квартира 134',
          adress: 'test',
          rating: 5.6,
          feedbacks: 17,
          image: 'assets/images/prototype/top-activity-1.jpg',
        },
        {
          recreationalfacility_id: 2,
          name: 'Компотная',
          description: 'есть доставка',
          location: 'Поселок завтраково',
          adress: 'test address 2',
          rating: 7.2,
          feedbacks: 24,
          image: 'assets/images/prototype/top-activity-2.jpg',
        },
        {
          recreationalfacility_id: 3,
          name: 'Экскурсия по Сыктывкару',
          description: 'Автобусный тур',
          location: 'Бьеларус',
          adress: 'test address 3',
          rating: 8.4,
          feedbacks: 0,
          image: 'assets/images/prototype/top-activity-3.jpg',
        },
        {
          recreationalfacility_id: 4,
          name: 'Абонемент на купание в пруду',
          description: 'Мальдивы',
          location: 'Мальдивы',
          adress: 'test address 4',
          rating: 10.0,
          feedbacks: 214,
          image: 'assets/images/prototype/top-activity-4.jpg',
        },
        {
          recreationalfacility_id: 5,
          name: 'Скафандр на прокат',
          description: 'test description',
          location: 'Алюминиевый завод',
          adress: 'test address 5',
          rating: 1,
          feedbacks: 5,
          image: 'assets/images/prototype/top-activity-1.jpg',
        },
        {
          recreationalfacility_id: 6,
          name: 'Философия Чебурашки',
          description: 'test description',
          location: 'любой университет',
          adress: 'test address 6',
          rating: 1,
          feedbacks: 24578,
          image: 'assets/images/prototype/top-activity-2.jpg',
        }
      ];
      return BestFacilities;
    };
  }

  ngOnInit(): void {
    //this.upcomingEvents = getUpcomingEvents();
  }

}
