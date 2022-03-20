export interface Activity {
  id: number,
  title: string,
  type: string,
  address: string,
  distance: string,
  options: string,
  description: string,
  label: Array<ActivityLabels>,
  facilities: Array<ActivityFacilities>,
  worktime: Array<ActivityWorkTime>,
  rating: Array<ActivityRating>,
}

export interface ActivityLabels {
  image: string,
  name: string,
}

export interface ActivityFacilities {
  icon: string,
  name: string,
}

export interface ActivityWorkTime {
  value: string,
}

export interface ActivityRating {
  name: string,
  rating: number,
}

export interface ActivityFare {
  id: number,
  options: Array<ActivityFares>,
}

export interface ActivityFares {
  name: string,
  price: number,
}
