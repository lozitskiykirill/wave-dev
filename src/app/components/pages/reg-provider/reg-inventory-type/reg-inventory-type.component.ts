import {Component, Input, OnInit} from '@angular/core';
import {Provider} from "../../../../interfaces/provider";

@Component({
  selector: 'app-reg-inventory-type',
  templateUrl: './reg-inventory-type.component.html',
  styleUrls: ['./reg-inventory-type.component.scss']
})
export class RegInventoryTypeComponent implements OnInit {

  provider_name: string = '';

  @Input() providerData!: Provider[];

  constructor() { }

  ngOnInit(): void {
  }

}
