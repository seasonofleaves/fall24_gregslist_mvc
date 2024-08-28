import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { loadState, saveState } from "../utils/Store.js"

class CarsService {
  deleteCar(carId) {
    const cars = AppState.cars

    const carIndex = cars.findIndex(car => car.id == carId)

    cars.splice(carIndex, 1)

    this.saveCars()
  }
  createCar(carFormData) {
    const cars = AppState.cars
    // make sure we turn the POJO from the form into a Car before it goes into the appstate
    const newCar = new Car(carFormData)
    cars.push(newCar)

    this.saveCars()
  }

  saveCars() {
    saveState('cars', AppState.cars)
  }

  loadCars() {
    const carsFromLocalStorage = loadState('cars', [Car])
    AppState.cars = carsFromLocalStorage
  }
}

export const carsService = new CarsService()