import { API } from "../../api";
import { garagePage } from "../../store";
import { Car } from "./car/car";
import { PanelGarageElement } from "./panelGarageElement";
import { BaseComponent } from "../../commons/base-component";
import "./garage.scss";
import { ICars } from "../../commons/Interfaces";

export class GarageElement extends BaseComponent {
  private carsList: BaseComponent;

  private panelGarageElement: PanelGarageElement;

  private api = new API();

  private listOfCars: Array<ICars> = [];

  private car!: Car;

  private arrCars: Array<Car> = [];

  constructor(parentNode: HTMLElement | null) {
    super(parentNode, "div", ["garage_container"], "");
    this.panelGarageElement = new PanelGarageElement(
      this.element,
      this.listOfCars,
    );
    this.carsList = new BaseComponent(this.element, "ul", [
      "garage_container__listCars",
    ]);

    this.init();
  }

  init() {
    this.panelGarageElement.onGetList = async () => {
      await this.api.getCars(1).then(() => {
        this.createCarsList();
      });
    };

    this.panelGarageElement.onClearGarage = () => {
      this.clearAllCars(this.getterCars);
    };
    this.panelGarageElement.onCreateCar = () => {
      this.carsList.element.innerHTML = "";
      this.createCarsList();
    };
    this.panelGarageElement.onRaceMode = (evt: MouseEvent) => {
      this.raceMode();
    };
  }

  async raceMode() {
    if (garagePage.isRace === true) {
      this.panelGarageElement.btnRaceMode.element.classList.remove("disabled");
      garagePage.isRace = false;

      Promise.all(
        this.arrCars.map(async (item) => {
          const res: { velocity: number; distance: number } = await this.api.startEngine(item.getIdCar);
          await item.setCurrentPosition(`${res.velocity}`);
        }),
      ).finally(() => this.panelGarageElement.btnRaceMode.element.classList.add("disabled"));
    } else {
      garagePage.isRace = true;
    }
  }

  async createCarsList() {
    this.arrCars = [];
    await this.panelGarageElement.showDataCars(this.listOfCars);

    this.listOfCars.forEach((item) => {
      this.car = new Car(this.carsList.element, item.id, item.name, item.color);
      this.arrCars.push(this.car);
    });
  }

  clearAllCars(arr: Array<ICars>) {
    this.arrCars.forEach((el) => {
      el.element.remove();
    });
    console.log(this.arrCars);
    return this.arrCars;
  }

  set setterCars(value: Array<ICars>) {
    this.listOfCars = value;
  }

  get getterCars(): Array<ICars> {
    return this.listOfCars;
  }
}
