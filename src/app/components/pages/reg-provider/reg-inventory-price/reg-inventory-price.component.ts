import {Component, Input, OnInit} from '@angular/core';
import {Provider} from "../../../../interfaces/provider";

@Component({
  selector: 'app-reg-inventory-price',
  templateUrl: './reg-inventory-price.component.html',
  styleUrls: ['./reg-inventory-price.component.scss']
})
export class RegInventoryPriceComponent implements OnInit {

  provider_name: string = '';

  @Input() providerData!: Provider[];

  constructor() { }

  ngOnInit(): void {
  }

}
