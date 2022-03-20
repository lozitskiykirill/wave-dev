import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-lang-list',
  templateUrl: './header-lang-list.component.html',
  styleUrls: ['./header-lang-list.component.scss']
})
export class HeaderLangListComponent implements OnInit {

  step: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLangList(name: any) {
    this.step = !this.step;
  }

}
