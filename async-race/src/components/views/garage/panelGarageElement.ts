import { ICars } from "../../commons/Interfaces";
import { ButtonElement } from "../../commons/btn";
import { BaseComponent } from "../../commons/base-component";

export class PanelGarageElement extends BaseComponent {
  private btnGenerate: ButtonElement;

  private btnClearGarage: ButtonElement;

  private btnCreateCar: ButtonElement;

  private areaCars: BaseComponent;

  public btnRaceMode: BaseComponent;

  public listCars = "Cars in Garage";

  public listCarsArr: Array<ICars> = [];

  onGetList: (() => void) | null = null;

  onCreateCar: (() => void) | null = null;

  onClearGarage: (() => void) | null = null;

  onRaceMode: ((evt: MouseEvent) => void) | null = null;

  constructor(parentNode: HTMLElement, items: Array<ICars>) {
    super(parentNode, "div", ["garage_container__panel"]);

    this.btnGenerate = new ButtonElement(
      this.element,
      ["btnGenerate"],
      "Generate",
    );
    this.btnClearGarage = new ButtonElement(
      this.element,
      ["btnPanel"],
      "ClearGarage",
    );
    this.btnCreateCar = new ButtonElement(
      this.element,
      ["btnCreateCar"],
      "CreateCar",
    );
    this.areaCars = new BaseComponent(this.element, "div", ["area_cars"]);

    this.btnRaceMode = new ButtonElement(this.element, ["btnRaceMode"], "Race");
    this.btnRaceMode.element.classList.add("disabled");

    this.btnRaceMode.element.addEventListener("click", (evt) => {
      if (this.onRaceMode) {
        this.onRaceMode(evt);
      }
    });

    this.btnGenerate.element.addEventListener("click", () => {
      if (this.onGetList) {
        this.onGetList();
      }
    });
    this.btnClearGarage.element.addEventListener("click", async () => {
      if (this.onClearGarage) {
        this.onClearGarage();
      }
    });

    this.btnCreateCar.element.addEventListener("click", async () => {
      if (this.onCreateCar) {
        this.onCreateCar();
      }
    });
  }

  async showDataCars(data: Array<ICars>) {
    this.areaCars.element.innerText = `Garage (${data.length})`;

    data.map((x) => {
      this.areaCars.element.innerText += `\n${x.name} ${x.color} ${x.id}`;
    });
  }
}
