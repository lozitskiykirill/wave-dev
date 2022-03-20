import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isPersonalDataPage: boolean = true;
  isPreferencesPage: boolean = false;
  isSafetyPage: boolean = false;
  isPaymentDetailsPage: boolean = false;
  isBusinessPage: boolean = false;

  isBusinessPageList:boolean = false;

  isMobileMenuActive:boolean = false;
  public getScreenWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  setActivePersonalDataPage () {
    this.isPersonalDataPage = true;
    this.isPreferencesPage = false;
    this.isSafetyPage = false;
    this.isPaymentDetailsPage = false;
    this.isBusinessPage = false;
    this.isBusinessPageList = false;
  }

  setActivePreferencesPage () {
    this.isPersonalDataPage = false;
    this.isPreferencesPage = true;
    this.isSafetyPage = false;
    this.isPaymentDetailsPage = false;
    this.isBusinessPage = false;
    this.isBusinessPageList = false;
  }

  setActiveSafetyPage () {
    this.isPersonalDataPage = false;
    this.isPreferencesPage = false;
    this.isSafetyPage = true;
    this.isPaymentDetailsPage = false;
    this.isBusinessPage = false;
    this.isBusinessPageList = false;
  }

  setActivePaymentDetailsPage () {
    this.isPersonalDataPage = false;
    this.isPreferencesPage = false;
    this.isSafetyPage = false;
    this.isPaymentDetailsPage = true;
    this.isBusinessPage = false;
    this.isBusinessPageList = false;
  }

  setActiveBusinessPage () {
    this.isPersonalDataPage = false;
    this.isPreferencesPage = false;
    this.isSafetyPage = false;
    this.isPaymentDetailsPage = false;
    this.isBusinessPage = true;
    this.isBusinessPageList = false;
  }

  setActiveBusinessPageList(){
    this.isPersonalDataPage = false;
    this.isPreferencesPage = false;
    this.isSafetyPage = false;
    this.isPaymentDetailsPage = false;
    this.isBusinessPage = false;
    this.isBusinessPageList = true;
  }

  mobileMenu() {
    if(this.getScreenWidth < 576) {
      this.isMobileMenuActive = !this.isMobileMenuActive;
    }
  }

}
