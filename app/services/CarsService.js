import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"

class CarsService {
  createCar(carFormData) {
    const cars = AppState.cars
    // make sure we turn the POJO from the form into a Car before it goes into the appstate
    const newCar = new Car(carFormData)
    cars.push(newCar)
  }
}

export const carsService = new CarsService()