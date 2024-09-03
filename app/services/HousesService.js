import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { loadState, saveState } from "../utils/Store.js"

export class HousesService {
  deleteHouse(houseId) {
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => houseId.id == houseId)
    houses.splice(houseIndex, 1)
    this.saveHouses()
  }

  createHouse(houseFormData) {
    const houses = AppState.houses
    const newHouse = new House(houseFormData)
    houses.push(newHouse)
    this.saveHouses()
  }

  saveHouses() {
    saveState('houses', AppState.houses)
  }

  loadHouses() {
    const housesFromLocalStorage = loadState('houses', [House])
    AppState.houses = housesFromLocalStorage
  }
}

export const housesService = new HousesService()