export class Car {
  // NOTE we will pass through a single object when newing up this car class
  /**
   * @param {{ make: String; model: String; year: Number; price: Number; color: String; imgUrl: String; description: String; transmission: String; mileage: Number; }} data
   */
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

    // NOTE if no arguments are passed through the Date constructor, it will default to your computers' date and time
    this.listedAt = new Date()
  }

  get cardHTMLTemplate() {
    return `
     <div class="col-12 p-0 mb-3">
      <div class="row bg-light shadow car-border" style="border-color: ${this.color};">
        <div class="col-4 p-0">
          <img class="img-fluid car-img"
            src="${this.imgUrl}"
            alt="${this.year} ${this.make} ${this.model}">
        </div>
        <div class="col-8">
          <div class="p-2">
            <p class="fs-3">${this.year} ${this.make} ${this.model}</p>
            <p class="fs-4">
             Listed on ${this.listedDate} at ${this.listedTime} 
            </p>
            <p class="fs-4">$${new Intl.NumberFormat().format(this.price)}</p>
            <p>${this.description}</p>
            <p class="fs-3">
              ${this.transmissionIcon}
            </p>
            <p>${this.mileage} miles</p>
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

  get transmissionIcon() {
    if (this.transmission == 'manual') {
      return '<i class="mdi mdi-car-shift-pattern" title="Manual Transmission"></i>'
    }
    if (this.transmission == 'automatic') {
      return '<i class="mdi mdi-refresh-auto" title="Automatic Transmission"></i>'
    }
    return '<i class="mdi mdi-help" title="Unknown Transmission"></i>'
  }
}
