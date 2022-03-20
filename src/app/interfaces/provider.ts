export interface Provider {
  provider_name: string,
  providertype_id: number,
  recreationfacilitytype_id: number,
  user_id: number,

  geolocation: string,
  location: string,
  address: string,
  post_index: string,
  equipments: Array<ProviderEquipments>,
  services: Array<ProviderServices>,
  languages: Array<ProviderLanguages>,
  descriptions: Array<ProviderDescriptions>,
  images: Array<ProviderImages>,
}

export interface ProviderEquipments {
  equipment_id: number,
  availabilitydate: string,
  cancellationdate: number,
  quantity: number,
  fares: Array<ProviderEquipmentsFares>,
}

export interface ProviderEquipmentsFares {
  duration: number,
  time_unit: string,
  fare: number,
}

export interface ProviderServices {
  services_name: string,
}

export interface ProviderLanguages {
  language_name: string,
}

export interface ProviderDescriptions {
  locale: string,
  descriptiontype: string,
  content: string
}

export interface ProviderImages {
  src: string;
}

