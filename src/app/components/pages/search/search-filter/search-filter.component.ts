import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import {CardOptions} from "../../../../interfaces/card";

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})

export class SearchFilterComponent implements OnInit {
  today: string;
  value: number = 40;
  highValue: number = 80;

  directions: any;
  activeDirectionItem: string = "";
  directionPlaceholder: string = "";

  activityTypeList: any;
  activeActivityTypeItem: string = "";
  activityTypePlaceholder: string = "";

  timeStartList: any;
  activeTimeStartItem: string = "";
  timeStartPlaceholder: string = "";


  timeFinishList: any;
  activeTimeFinishItem: string = "";
  timeFinishPlaceholder: string = "";

  adultNumberList: any;
  activeAdultNumberItem: string = "";
  adultNumberPlaceholder: string = "";

  childrenNumberList: any;
  activeChildrenNumberItem: string = "";
  childrenNumberPlaceholder: string = "";

  activityParameterList: any;
  centerDistanceList: any;
  activityOptionList: any;

  options: Options = {
    floor: 0,
    ceil: 200
  };

  directionList = [
    {
      location: 'Киев',
    },
    {
      location: 'Харьков',
    },
    {
      location: 'Днепр',
    },
    {
      location: 'Запородье',
    },
    {
      location: 'Львов',
    },
    {
      location: 'Херсон',
    },
    {
      location: 'Черкассы',
    },
    {
      location: 'Чернигов',
    },
    {
      location: 'Винница',
    },
  ];

  activityTypeArray = [
    {
      type: 'Гребля на байдарке',
    },
    {
      type: 'Аренда снаряжения',
    },
    {
      type: 'Пешие туры',
    },
    {
      type: 'Картинг',
    },
    {
      type: 'Пейнтбол',
    },
    {
      type: 'Прыжки с парашютом',
    },
    {
      type: 'Рафтинг',
    },
    {
      type: 'Яхтинг',
    },
    {
      type: 'Фитнес туры',
    },
    {
      type: 'Особо крутой тип активности длинной в 2 строки или даже больше',
    },
    {
      type: 'Авиа туры',
    },
  ];

  timeStartArray = [
    {
      time: '08:00',
    },
    {
      time: '09:00',
    },
    {
      time: '10:00',
    },
    {
      time: '11:00',
    },
    {
      time: '12:00',
    },
    {
      time: '13:00',
    },
    {
      time: '14:00',
    },
    {
      time: '15:00',
    },
    {
      time: '16:00',
    },
    {
      time: '17:00',
    },
    {
      time: '18:00',
    },
    {
      time: '19:00',
    },
    {
      time: '20:00',
    },
    {
      time: '21:00',
    },
    {
      time: '22:00',
    }
  ];

  timeFinishArray = [
    {
      time: '08:00',
    },
    {
      time: '09:00',
    },
    {
      time: '10:00',
    },
    {
      time: '11:00',
    },
    {
      time: '12:00',
    },
    {
      time: '13:00',
    },
    {
      time: '14:00',
    },
    {
      time: '15:00',
    },
    {
      time: '16:00',
    },
    {
      time: '17:00',
    },
    {
      time: '18:00',
    },
    {
      time: '19:00',
    },
    {
      time: '20:00',
    },
    {
      time: '21:00',
    },
    {
      time: '22:00',
    }
  ];

  adultNumberArray = [
    {
      option: '1',
    },
    {
      option: '2',
    },
    {
      option: '3',
    },
    {
      option: 'без взрослых',
    },
  ];

  childrenNumberArray = [
    {
      option: '1',
    },
    {
      option: '2',
    },
    {
      option: '3',
    },
    {
      option: 'без детей',
    },
  ];

  activityParameterArray = [
    {
      name: '1-местная байдарка',
    },
    {
      name: '2-местная байдарка',
    },
    {
      name: '3-местная байдарка',
    },
    {
      name: '4-местная байдарка',
    },
    {
      name: 'без байдарки',
    },
    {
      name: 'по суше',
    },
  ];

  centerDistanceArray = [
    {
      distance: 'меньше 3 км',
    },
    {
      distance: 'меньше 5 км',
    },
    {
      distance: 'меньше 10 км',
    },
  ];

  activityOptionArray = [
    {
      option: 'бесплатный wi-fi',
    },
    {
      option: 'камера хранения',
    },
    {
      option: 'кафе',
    },
    {
      option: 'туалет',
    },
    {
      option: 'душ',
    },
    {
      option: 'раздевалка',
    },
    {
      option: 'велопарковка',
    },
    {
      option: 'парковка',
    },
  ];

  constructor() {
    this.today = ''
  }

  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];

    this.fetchDirectionList();
    this.fetchActivityTypesList();
    this.fetchTimeStartList();
    this.fetchTimeFinishList();
    this.fetchAdultNumberList();
    this.fetchChildrenNumberList();
    this.fetchActivityParameterList();
    this.fetchCenterDistanceList();
    this.fetchActivityOptionList();

    this.directionPlaceholder = this.directions[0].location;
    this.activityTypePlaceholder = this.activityTypeList[0].type;
    this.timeStartPlaceholder = this.timeStartList[0].time;
    this.timeFinishPlaceholder = this.timeFinishList[0].time;
    this.adultNumberPlaceholder = this.adultNumberList[0].option;
    this.childrenNumberPlaceholder = this.childrenNumberList[0].option;
  }

  fetchDirectionList() {
    this.directions = this.directionList;
  }

  fetchActivityTypesList() {
    this.activityTypeList = this.activityTypeArray;
  }

  fetchTimeStartList() {
    this.timeStartList = this.timeStartArray;
  }

  fetchTimeFinishList() {
    this.timeFinishList = this.timeFinishArray;
  }

  fetchAdultNumberList() {
    this.adultNumberList = this.adultNumberArray;
  }

  fetchChildrenNumberList() {
    this.childrenNumberList = this.childrenNumberArray;
  }

  fetchActivityParameterList() {
    this.activityParameterList = this.activityParameterArray;
  }

  fetchCenterDistanceList() {
    this.centerDistanceList = this.centerDistanceArray;
  }

  fetchActivityOptionList() {
    this.activityOptionList = this.activityOptionArray;
  }

  setActiveDirection(item: string, i: number) {
    this.activeDirectionItem = item;
    this.directionPlaceholder = this.directions[i].location;
  }

  setActiveActivityType(item: string, i: number) {
    this.activeActivityTypeItem = item;
    this.activityTypePlaceholder = this.activityTypeList[i].type;
  }

  setTimeStart(item: string, i: number) {
    this.activeTimeStartItem = item;
    this.timeStartPlaceholder = this.timeStartList[i].time;
  }

  setTimeFinish(item: string, i: number) {
    this.activeTimeFinishItem = item;
    this.timeFinishPlaceholder = this.timeFinishList[i].time;
  }

  setAdultNumber(item: string, i: number) {
    this.activeAdultNumberItem = item;
    this.adultNumberPlaceholder = this.adultNumberList[i].option;
  }

  setChildrenNumber(item: string, i: number) {
    this.activeChildrenNumberItem = item;
    this.childrenNumberPlaceholder = this.childrenNumberList[i].option;
  }

}
