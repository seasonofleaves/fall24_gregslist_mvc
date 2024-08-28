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
  }

  get cardHTMLTemplate() {
    return `
     <div class="col-12 p-0 mb-3">
      <div class="row bg-light shadow">
        <div class="col-4 p-0">
          <img class="img-fluid car-img"
            src="https://images.unsplash.com/photo-1716167950737-ac635698a16a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cool car picture">
        </div>
        <div class="col-8">
          <div class="p-2">
            <p class="fs-3">2002 Honda Civic</p>
            <p class="fs-4">$2000</p>
            <p>Red car goes fast</p>
            <p class="fs-3">
              <i class="mdi mdi-car-shift-pattern" title="Manual Transmission"></i>
              <i class="mdi mdi-refresh-auto" title="Automatic Transmission"></i>
            </p>
            <p>2000000000 miles</p>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
