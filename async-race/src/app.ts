import { Header } from "./components/header/header";
import { Controller } from "./components/controller";
import { RandomCar } from "./components/commons/randomize";
import { WinnersElement } from "./components/views/winners/winners";
import { GarageElement } from "./components/views/garage/garage";
import { API } from "./components/api";
import { BaseComponent } from "./components/commons/base-component";

export class App extends BaseComponent {
  navigationPanel: Header;

  private pageGarage!: GarageElement;

  private pageWinners!: WinnersElement;

  private app!: API;

  private controller!: Controller;

  constructor(parentNode: HTMLElement | null) {
    super(parentNode, "div", ["container"]);

    this.navigationPanel = new Header();
    if (parentNode) {
      document.body.before(this.navigationPanel.element);
    }
  }

  showCurrentPage(page: GarageElement | WinnersElement): void {
    this.element.innerHTML = "";
    this.element.append(page.element);
    this.app = new API();

    if (page instanceof GarageElement) {
      this.pageGarage = page;
      this.controller = new Controller(this.app, this.pageGarage);
    } else if (page instanceof WinnersElement) {
      this.pageWinners = page;
    }
  }
}
