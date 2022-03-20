import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {

  isMain:boolean = true;
  isChangePassword:boolean = false;
  isTwoStepAuth:boolean = false;
  isActiveSessions:boolean = false;
  isRemoveAccoubt:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  changePassoword(){
    this.isMain = false;
    this.isChangePassword = true;
    this.isTwoStepAuth = false;
    this.isActiveSessions = false;
    this.isRemoveAccoubt = false;
  }
  activeSessions(){
    this.isMain = false;
    this.isChangePassword = false;
    this.isTwoStepAuth = false;
    this.isActiveSessions = true;
    this.isRemoveAccoubt = false;
  }

}
