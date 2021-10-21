import { garagePage } from "./store";
import { Car } from "./views/garage/car/car";
import { GarageElement } from "./views/garage/garage";
import { API } from "./api";

export class Controller {
  target!: HTMLElement;

  tagApp: HTMLElement | null = null;

  appAPi: API;

  garageElement!: GarageElement;

  constructor(appAPi: API, garageElement: GarageElement) {
    this.garageElement = garageElement;
    this.appAPi = appAPi;
    this.listener();
  }

  async listener() {
    document.body.addEventListener("click", async (event) => {
      this.target = event.target as HTMLElement;

      if (this.target.classList.contains("btnGenerate")) {
        
        const listCars = await this.appAPi.getCars(1);
        const prevLength: number = listCars.length;
        this.garageElement.setterCars = listCars;
      }

      if (this.target.classList.contains("btnDelete")) {
       
        const id = parseInt(this.target.id.split("delete_")[1], 10);

        await this.appAPi.deleteCar(id);

        const listCars = await this.appAPi.getCars(1);
        this.garageElement.setterCars = listCars;
      }

      if (this.target.classList.contains("btnCreateCar")) {
        try {
          await this.appAPi.createCar();
          await (this.garageElement.setterCars = await this.appAPi.getCars(1));
        } catch (e) {
          console.error("error", e);
        }
      }

      if (this.target.classList.contains("btnStart")) {
        
        const id = parseInt(this.target.id.split("start_")[1], 10);
        try {
          const result: number = (await this.appAPi.startEngine(id)).velocity;
          // alert(`${result} = velocity`);
          localStorage.setItem("speed", `${result}`);
        } catch (e) {
          console.error("error", e);
        }
      }
      if (this.target.classList.contains("btnRaceMode")) {
        // Store.garagePage.isRace = true;
      }
    });
  }
}
