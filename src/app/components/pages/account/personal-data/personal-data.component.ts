import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  isEdit:boolean = false;

  isEditPic:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.isEdit = !this.isEdit;
  }
  editPic(){
    this.isEditPic = !this.isEditPic;
  }

}
