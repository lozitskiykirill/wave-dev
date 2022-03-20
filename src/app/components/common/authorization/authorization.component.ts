import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  isActive:boolean = false;
  isPasswordShow:boolean = false;

  @Output() loggedIn = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    this.isActive = !this.isActive;
  }

  showPassword() {
    this.isPasswordShow = !this.isPasswordShow;
  }

  login() {
    this.loggedIn.emit(true);
    this.activate();
  }
}
