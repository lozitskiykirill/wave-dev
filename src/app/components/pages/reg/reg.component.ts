import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

//import {user} from "../../../interfaces/user";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})

export class RegComponent implements OnInit {

  userForm: FormGroup;

  blinkingPassword: boolean = false;
  blinkingPasswordConfirm: boolean = false;
  statusPass: boolean = true;
  statusPassConf: boolean = true;
  clickEvent() {
    this.statusPass = !this.statusPass;
    this.blinkingPassword = !this.blinkingPassword
  }
  clickEvent2() {
    this.statusPassConf = !this.statusPassConf;
    this.blinkingPasswordConfirm = !this.blinkingPasswordConfirm
  }
  //user: user;

  constructor() {
    // this.showPassword = false;

    this.userForm = new FormGroup({
      //'courseName': new FormControl(null, Validators.required),
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'phoneCode': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'passwordConfirm': new FormControl(null),
    });

    // function registerUser() {
    //   let user =
    //     {
    //       firstName: 'string',
    //
    //       lastName: 'string',
    //       phoneCode: 'string',
    //       phone: 'string',
    //       email: 'string',
    //       password: 'string',
    //     }
    // }

  }
  // showPassword: boolean
  // showPassword = true
  // @Input() showPassword: boolean;

  ngOnInit() {
    this.initForm();
  }


  onSubmit() {
    console.log(this.userForm);
  }

  private initForm() {
    this.userForm = new FormGroup({
      //'courseName': new FormControl(null, Validators.required),
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'phoneCode': new FormControl(null),
      'phone': new FormControl(null),
      'password': new FormControl(null),
      'passwordConfirm': new FormControl(null),
    });
  }

}
