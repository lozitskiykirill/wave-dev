import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthorizationComponent} from "../authorization/authorization.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  username: string = "Aллахьяр";

  headerNotifications = [
    {
      text: "Сообщения от Wave"
    },
    {
      text: "Ответ на отзыв от Кон-Тики"
    },
    {
      text: "Бронирование успешно отменено"
    },
  ];

  notifications: any;
  notification: any;



  constructor() {}

  ngOnInit(): void {
    this.fetchNotifications();
    console.log(this.notification);
  }

  @ViewChild(AuthorizationComponent)
  child: AuthorizationComponent = new AuthorizationComponent;
  activeAuth() {
    // child is set
    this.child.activate();
  }

  fetchNotifications() {
    this.notifications = this.headerNotifications;
  }

  triggerState (value: boolean) {
    this.isLoggedIn = value;
  }
}
