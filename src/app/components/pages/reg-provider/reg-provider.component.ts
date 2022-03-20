import { Component, OnInit } from '@angular/core';
import {Provider} from "../../../interfaces/provider";

@Component({
  selector: 'app-reg-provider',
  templateUrl: './reg-provider.component.html',
  styleUrls: ['./reg-provider.component.scss']
})
export class RegProviderComponent implements OnInit {

  isPageRegProviderType: boolean = false;
  isPageRegTypeRental: boolean = false;
  isPageRegTypeObject: boolean = false;
  isPageRegTypeAddress: boolean = false;
  isPageRegLocation: boolean = false;
  isPageRegLocationMap: boolean = false;

  isPageRegInfoServices: boolean = false;
  isPageRegInfoDescription: boolean = false;
  isPageRegInfoTimetable: boolean = false;

  isPageRegInventoryAdd: boolean = true;
  isPageRegInventoryType: boolean = false;
  isPageRegInventoryPrice: boolean = false;
  isPageRegInventoryCancellation: boolean = false;
  isPageRegInventorySale: boolean = false;
  isPageRegAvailability: boolean = false;

  isPageRegProviderPhoto: boolean = false;

  isPageRegProviderLegal: boolean = false;

  isPageRegProviderSuccess: boolean = false;

  page : string = 'pageRegInventoryAdd';

  provider: Provider[];

  constructor() {

    this.provider = getProviderInfo();

    function getProviderInfo() {
      let providerInfo = [
        {
          provider_name: 'Название провайдера',
          providertype_id: 1,
          recreationfacilitytype_id: 1,
          user_id: 1,

          geolocation: '44.678, 34.456',
          location: 'Расположение',
          address: 'Адресс',
          post_index: 'индекс',
          equipments: [
            {
              equipment_id: 1,
              availabilitydate: '01.01.2022',
              cancellationdate: 10,
              quantity: 10,
              fares: [
                {
                  duration: 2,
                  time_unit: 'fare_unit',
                  fare: 1
                }
              ]
            }
          ],
          services: [
            {
              services_name: 'services_name',
            }
          ],
          languages: [
            {
              language_name: 'language_name'
            }
          ],
          descriptions: [
            {
              locale: 'locale',
              descriptiontype: 'descriptiontype',
              content: 'content'
            },
          ],
          images: [
            {
              src: 'assets/images/prototype/top-activity-1.jpg'
            }
          ],
        },
        {
          provider_name: 'Название провайдера 2',
          providertype_id: 1,
          recreationfacilitytype_id: 1,
          user_id: 1,

          geolocation: '44.678, 34.456',
          location: 'Расположение',
          address: 'Адресс',
          post_index: 'индекс',
          equipments: [
            {
              equipment_id: 1,
              availabilitydate: '01.01.2022',
              cancellationdate: 10,
              quantity: 10,
              fares: [
                {
                  duration: 2,
                  time_unit: 'fare_unit',
                  fare: 1
                }
              ]
            }
          ],
          services: [
            {
              services_name: 'services_name',
            }
          ],
          languages: [
            {
              language_name: 'language_name'
            }
          ],
          descriptions: [
            {
              locale: 'locale',
              descriptiontype: 'descriptiontype',
              content: 'content'
            },
          ],
          images: [
            {
              src: 'assets/images/prototype/top-activity-1.jpg'
            }
          ],
        },
        {
          provider_name: 'Название провайдера 3',
          providertype_id: 1,
          recreationfacilitytype_id: 1,
          user_id: 1,

          geolocation: '44.678, 34.456',
          location: 'Расположение',
          address: 'Адресс',
          post_index: 'индекс',
          equipments: [
            {
              equipment_id: 1,
              availabilitydate: '01.01.2022',
              cancellationdate: 10,
              quantity: 10,
              fares: [
                {
                  duration: 2,
                  time_unit: 'fare_unit',
                  fare: 1
                }
              ]
            }
          ],
          services: [
            {
              services_name: 'services_name',
            }
          ],
          languages: [
            {
              language_name: 'language_name'
            }
          ],
          descriptions: [
            {
              locale: 'locale',
              descriptiontype: 'descriptiontype',
              content: 'content'
            },
          ],
          images: [
            {
              src: 'assets/images/prototype/top-activity-1.jpg'
            }
          ],
        },
      ];
      return providerInfo;
    };
  }

  ngOnInit(): void {
  }

  closeAllRegComponents() {
    this.isPageRegProviderType = false;
    this.isPageRegTypeRental = false;
    this.isPageRegTypeObject = false;
    this.isPageRegTypeAddress = false;
    this.isPageRegLocation = false;
    this.isPageRegLocationMap = false;

    this.isPageRegInfoServices = false;
    this.isPageRegInfoDescription = false;
    this.isPageRegInfoTimetable = false;

    this.isPageRegInventoryAdd = false;
    this.isPageRegInventoryType = false;
    this.isPageRegInventoryPrice = false;
    this.isPageRegInventoryCancellation = false;
    this.isPageRegInventorySale = false;
    this.isPageRegAvailability = false;

    this.isPageRegProviderPhoto = false;

    this.isPageRegProviderLegal = false;

    this.isPageRegProviderSuccess = false;
  }

  nextPage() {
    this.closeAllRegComponents();
    switch (this.page) {
      case 'pageRegType':  this.setPageRegTypeRental (); break;
      case 'pageRegTypeRental':  this.setPageRegTypeObject (); break;
      case 'pageRegTypeObject':  this.setPageRegTypeAddress (); break;
      case 'pageRegTypeAddress':  this.setPageRegLocation (); break;
      case 'pageRegLocation':  this.setPageRegLocationMap (); break;
      case 'pageRegLocationMap':  this.setPageRegInfoServices (); break;
      case 'pageRegInfoServices': this.setPageRegInfoDescription (); break;
      case 'pageRegInfoDescription':  this.setPageRegInfoTimetable (); break;
      case 'pageRegInfoTimetable':  this.setPageRegInventoryAdd (); break;
      case 'pageRegInventoryAdd': this.setPageRegInventoryType (); break;
      case 'pageRegInventoryType': this.setPageRegInventoryPrice (); break;
      case 'pageRegInventoryPrice': this.setPageRegInventoryCancellation (); break;
      case 'pageRegInventoryCancellation': this.setPageRegInventorySale (); break;
      case 'pageRegInventorySale': this.setPageRegAvailability (); break;
      case 'pageRegAvailability': this.setPageRegProviderPhoto (); break;
      case 'pageRegProviderPhoto': this.setPageRegProviderLegal (); break;
      case 'pageRegProviderLegal': this.setPageRegProviderSuccess (); break;
      case 'pageRegProviderSuccess': this.setPageRegProviderSuccess (); break;

      default: this.setPageRegTypeRental (); break;
    }
  };

  prevPage() {
    this.closeAllRegComponents();
    switch (this.page) {
      case 'pageRegType': this.setPageRegProviderType (); break;
      case 'pageRegTypeRental': this.setPageRegProviderType (); break;
      case 'pageRegTypeObject': this.setPageRegTypeRental (); break;
      case 'pageRegTypeAddress': this.setPageRegTypeObject (); break;
      case 'pageRegLocation': this.setPageRegTypeAddress (); break;
      case 'pageRegLocationMap': this.setPageRegLocation (); break;
      case 'pageRegInfoServices': this.setPageRegLocationMap (); break;
      case 'pageRegInfoDescription': this.setPageRegInfoServices (); break;
      case 'pageRegInfoTimetable': this.setPageRegInfoDescription (); break;
      case 'pageRegInventoryAdd': this.setPageRegInfoTimetable (); break;
      case 'pageRegInventoryType': this.setPageRegInventoryAdd (); break;
      case 'pageRegInventoryPrice': this.setPageRegInventoryType (); break;
      case 'pageRegInventoryCancellation': this.setPageRegInventoryPrice (); break;
      case 'pageRegInventorySale': this.setPageRegInventoryCancellation (); break;
      case 'pageRegAvailability': this.setPageRegInventorySale (); break;
      case 'pageRegProviderPhoto': this.setPageRegAvailability (); break;
      case 'pageRegProviderLegal': this.setPageRegProviderPhoto (); break;
      case 'pageRegProviderSuccess': this.setPageRegProviderLegal (); break;

      default: this.setPageRegProviderType(); break;
    }
  };

  setPageRegProviderType () {
    this.isPageRegProviderType = true;
    this.page = 'pageRegType';
  }
  setPageRegTypeRental () {
    this.isPageRegTypeRental = true;
    this.page = 'pageRegTypeRental';
  }
  setPageRegTypeObject () {
    this.isPageRegTypeObject = true;
    this.page = 'pageRegTypeObject';
  }
  setPageRegTypeAddress () {
    this.isPageRegTypeAddress = true;
    this.page = 'pageRegTypeAddress';
  }
  setPageRegLocation () {
    this.isPageRegLocation = true;
    this.page = 'pageRegLocation';
  }
  setPageRegLocationMap () {
    this.isPageRegLocationMap = true;
    this.page = 'pageRegLocationMap';
  }
  setPageRegInfoServices () {
    this.isPageRegInfoServices = true;
    this.page = 'pageRegInfoServices';
  }
  setPageRegInfoDescription () {
    this.isPageRegInfoDescription = true;
    this.page = 'pageRegInfoDescription';
  }
  setPageRegInfoTimetable () {
    this.isPageRegInfoTimetable = true;
    this.page = 'pageRegInfoTimetable';
  }

  setPageRegInventoryAdd () {
    this.isPageRegInventoryAdd = true;
    this.page = 'pageRegInventoryAdd';
  }
  setPageRegInventoryType () {
    this.isPageRegInventoryType = true;
    this.page = 'pageRegInventoryType';
  }
  setPageRegInventoryPrice () {
    this.isPageRegInventoryPrice = true;
    this.page = 'pageRegInventoryPrice';
  }
  setPageRegInventoryCancellation () {
    this.isPageRegInventoryCancellation = true;
    this.page = 'pageRegInventoryCancellation';
  }
  setPageRegInventorySale () {
    this.isPageRegInventorySale = true;
    this.page = 'pageRegInventorySale';
  }
  setPageRegAvailability () {
    this.isPageRegAvailability = true;
    this.page = 'pageRegAvailability';
  }
  setPageRegProviderPhoto () {
    this.isPageRegProviderPhoto = true;
    this.page = 'pageRegProviderPhoto';
  }
  setPageRegProviderLegal () {
    this.isPageRegProviderLegal = true;
    this.page = 'pageRegProviderLegal';
  }
  setPageRegProviderSuccess () {
    this.isPageRegProviderSuccess = true;
    this.page = 'pageRegProviderSuccess';
  }

}
