import {Component, Input, OnInit, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {Provider} from "../../../../interfaces/provider";

@Component({
  selector: 'app-reg-inventory-add',
  templateUrl: './reg-inventory-add.component.html',
  styleUrls: ['./reg-inventory-add.component.scss']
})
export class RegInventoryAddComponent implements OnInit {

  provider_name: string = '';

  @Input() providerData!: Provider[];

  constructor() {
  }

  ngOnInit(): void {
  }

  // createRecaptchaContainer() {
  //   // Use Angular's Renderer2 to create the div element
  //   const recaptchaContainer = this.renderer.createElement('div');
  //   // Set the id of the div
  //   this.renderer.setProperty(recaptchaContainer, 'class', 'inventory-item');
  //   this.renderer.setValue('html', 'hello');
  //   // Append the created div to the body element
  //   this.renderer.appendChild(document.body, recaptchaContainer);
  //
  //   return recaptchaContainer;
  // }
}
