import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  isCurrencyEdit:boolean = false;

  isLanguageEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  CurrencyEdit(){
    this.isCurrencyEdit = !this.isCurrencyEdit;
  }

  LanguageEdit(){
    this.isLanguageEdit = !this.isLanguageEdit;
  }

}
