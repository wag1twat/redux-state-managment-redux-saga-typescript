export type TImage = {
  url: string
  id: number
}
export type TCountry = {
  id: number
  name: string
}
export type TPrice = {
  isOffer: boolean
  offerValue: number
  offerPercent: number
  value: number
}
export type TPopularGood = {
  id: number
  isFavorite: boolean
  name: string
  volume: number
  strength: number
  country: TCountry
  price: TPrice
  image: TImage
}
