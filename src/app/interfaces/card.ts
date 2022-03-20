export interface Card {
  id: number,
  image: string,
  title: string,
  address: string,
  distance: string,
  feedbacks: number,
  rating: number,
  options: Array<CardOptions>,
  isPopular: boolean,
  isCheap: boolean,
  sale: string,
}

export interface CardOptions {
  name: string,
  number: number,
  price: number,
}
