import { Images } from "../../../../../public/images";
import { ButtonElement } from "../../../commons/btn";
import { BaseComponent } from "../../../commons/base-component";

export class Car extends BaseComponent {
  private model: BaseComponent;

  private idCar: number;

  private btnEngine: BaseComponent;

  private btnStop: BaseComponent;

  private containerCar: BaseComponent;

  private btnDelete: BaseComponent;

  private raceField: BaseComponent;

  private id: BaseComponent;

  onStart: (() => void) | null = null;

  onRemoveCar: (() => void) | null = null;

  onCreateCar: (() => void) | null = null;

  private driveMode!: NodeJS.Timeout;

  private finishPoint!: HTMLElement;

  private roadDistance!: number;

  constructor(
    parentNode: HTMLElement,
    idCar: number,
    model: string,
    color: string,
  ) {
    super(parentNode, "li", ["garage_container__listCars-car"]);

    this.idCar = idCar;
    this.id = new BaseComponent(
      this.element,
      "div",
      ["car_property"],
      `${idCar}`,
      `car${idCar}`,
    );
    this.model = new BaseComponent(
      this.element,
      "div",
      ["car_property"],
      `${model}`,
      `car${idCar}`,
    );

    this.model.element.style.color = `#${color}`;
    this.btnEngine = new ButtonElement(
      this.element,
      ["btnStart"],
      "start",
      `${idCar}`,
    );
    this.btnStop = new ButtonElement(
      this.element,
      ["btnStop"],
      "stop",
      `${idCar}`,
    );

    this.btnDelete = new ButtonElement(
      this.element,
      ["btnDelete"],
      "delete",
      `${idCar}`,
    );

    this.raceField = new BaseComponent(
      this.element,
      "div",
      ["raceField"],
      "",
      `${idCar}`,
    );
    this.containerCar = new BaseComponent(
      this.raceField.element,
      "div",
      ["raceField_Car"],
      "",
      `car-${idCar}`,
    );

    this.finishPoint = document.createElement("img");
    this.finishPoint.setAttribute("src", `${Images.imgFlag}`);
    this.raceField.element.append(this.finishPoint);

    this.containerCar.element.innerHTML = `${Images.imgCar}`;
    const svg = this.containerCar.element.getElementsByClassName("tractorg")[0];

    svg.setAttribute("fill", `#${color}`);

    this.btnEngine.element.addEventListener("click", async () => {
      const velocity = await localStorage.getItem("speed");
      this.setCurrentPosition(velocity);
    });

    this.btnDelete.element.addEventListener("click", () => {
      this.element.remove();
    });
  }

  public get getIdCar(): number {
    return this.idCar;
  }

  public setCurrentPosition(velocity: string | null): void {
    const distance = 50000;
    const speed = distance / parseInt(velocity!, 10);
    this.roadDistance = this.raceField.element.clientWidth - this.containerCar.element.offsetLeft;
    this.containerCar.element.style.transform = `translateX(${this.roadDistance}px)`;
    this.containerCar.element.style.transitionDuration = `${speed / 1000}s`;
  }
}
