import { AppState } from "../AppState.js"
import { HousesService } from "../services/HousesService.js"

export class HousesController {
  constructor() {
    console.log('HousesController is working')
    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    console.log('Houses in the AppState', houses);
    let houseHTMLContent = ''
    houses.forEach(house => houseHTMLContent += house.houseHTMLTemplate)
    const housesElm = document.getElementById('house-listings')
    housesElm.innerHTML = houseHTMLContent
  }

  createHouse() {
    event.preventDefault()
    console.log('creating a house!')

  }

}