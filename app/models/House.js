import { generateId } from "../utils/GenerateId.js"

export class House {
  /**@param {{make: String; year: String; name: String; bedrooms: Number; bathrooms: Number; sqft: Number; price: Number; description: String; imgUrl: String; listedAt?: String }} data*/
  constructor(data) {
    this.id = generateId()

    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl

    this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
  }

  get houseHTMLTemplate() {
    return `
    <div class="col-12 p-0 mb-3">
      <div class="row bg-light shadow car-border">
        <div class="col-md-4 p-0">
          <img class="img-fluid car-img"
            src="${this.imgUrl}"
            alt="House">
        </div>
        <div class="col-md-8">
          <div class="p-2">
            <p class="fs-3">
            ${this.bedrooms} beds ${this.bathrooms} baths ${this.sqft} sqft
              <i onclick="app.CarsController.deleteHouse('${this.id}')" class="mdi mdi-delete-forever text-danger"
                role="button" title="Delete this listing"></i>
            </p>
            <p class="fs-4">
              Listed on ${this.listedDate} at ${this.listedTime}
            </p>
            <p class="fs-4">$${this.price}</p>
            <p>Built in: ${this.year}</p>
            <p>${this.description}</p>
            <p class="fs-3">
             Contact: ${this.name}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get listedDate() {
    return this.listedAt.toLocaleDateString()
  }
  get listedTime() {
    return this.listedAt.toLocaleTimeString()
  }
}
