import { AppState } from "../AppState.js";

export class CarsController {
  constructor() {
    console.log('Cars controller is loaded 🚗');
    this.drawCars()
  }

  drawCars() {
    const cars = AppState.cars
    let carHTMLContent = ''
    cars.forEach(car => carHTMLContent += car.cardHTMLTemplate)
    const carsElem = document.getElementById('car-listings')
    carsElem.innerHTML = carHTMLContent
  }
}