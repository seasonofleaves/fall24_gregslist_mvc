export class Car {
  // NOTE we will pass through a single object when newing up this car class
  constructor(data) {
    this.model = data.model
    this.make = data.make
    this.year = data.year
    this.transmission = data.transmission
    this.color = data.color
    this.imgUrl = data.imgUrl
    this.mileage = data.mileage
    this.price = data.price
    this.description = data.description
  }
}
