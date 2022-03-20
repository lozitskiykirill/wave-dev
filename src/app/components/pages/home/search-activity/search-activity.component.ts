import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-activity',
  templateUrl: './search-activity.component.html',
  styleUrls: ['./search-activity.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchActivityComponent implements OnInit {
  today: string;

  directions: any;
  activeDirectionItem: string = "";
  directionPlaceholder: string = "";

  activityTypeList: any;
  activeActivityTypeItem: string = "";
  activityTypePlaceholder: string = "";

  adultNumberList: any;
  activeAdultNumberItem: string = "";
  adultNumberPlaceholder: string = "";

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

  searchLocation_selected = [
    // {id: 2, name: 'Юниверсити Сити'},
    // {id: 8, name: 'Юрмала'}
  ];

  searcType = [
    {id: 1, name: 'Активный отдых'},
    {id: 2, name: 'Малоактивный отдых'},
    {id: 3, name: 'Среднеактивный отдых'},
  ];
  searcType_selected = [
  ];

  searchDate = [
    {id: 1, name: '01.01.2022'},
    {id: 2, name: '02.01.2022'},
    {id: 3, name: '03.01.2022'},
  ];
  searchDate_selected = [
  ];

  searchParticipants = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'},
    {id: 4, name: 'все'},
  ];
  searchParticipants_selected = [
  ];



  constructor() {
    this.today = ''
  }

  ngOnInit(): void {
    this.fetchDirectionList();
    this.fetchActivityTypesList();
    this.fetchAdultNumberList();

    this.directionPlaceholder = this.directions[0].location;
    this.activityTypePlaceholder = this.activityTypeList[0].type;
    this.adultNumberPlaceholder = this.adultNumberList[0].option;

    this.today = new Date().toISOString().split('T')[0];
  }

  onKey(event: any) {
    console.log('event: ' + event.target.value)
  }

  fetchDirectionList() {
    this.directions = this.directionList;
  }

  fetchActivityTypesList() {
    this.activityTypeList = this.activityTypeArray;
  }

  fetchAdultNumberList() {
    this.adultNumberList = this.adultNumberArray;
  }

  setActiveDirection(item: string, i: number) {
    this.activeDirectionItem = item;
    this.directionPlaceholder = this.directions[i].location;
  }

  setActiveActivityType(item: string, i: number) {
    this.activeActivityTypeItem = item;
    this.activityTypePlaceholder = this.activityTypeList[i].type;
  }

  setAdultNumber(item: string, i: number) {
    this.activeAdultNumberItem = item;
    this.adultNumberPlaceholder = this.adultNumberList[i].option;
  }

}
