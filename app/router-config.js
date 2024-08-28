import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view: /*html*/`
    <div class="container">
      <section class="row">
        <div class="col-12">
          <div class="text-center">
            <h1>Welcome to Gregslist</h1>
            <h2>Choose a listing type</h2>
            <div>
              <button class="btn btn-dark">
                Cars <i class="mdi mdi-car-convertible"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/jeremy',
    view: /*html*/`
    <h1>Jeremy Page!</h1>
    `
  }
])