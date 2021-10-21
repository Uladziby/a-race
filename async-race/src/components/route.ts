import { WinnersElement } from "./views/winners/winners";
import { GarageElement } from "./views/garage/garage";
import { App } from "../app";

enum PagesEnum {
  garage = "garage",
  winners = "winners",
}

export class Route {
  private appElement!: HTMLElement | null;

  private routing!: { name: string; component: () => void }[];

  private app: App;

  constructor() {
    this.appElement = document.getElementById("app");

    this.app = new App(this.appElement);

    this.routing = [
      {
        name: PagesEnum.garage,
        component: () => {
          this.app.showCurrentPage(new GarageElement(this.app.element));
        },
      },
      {
        name: PagesEnum.winners,
        component: () => {
          this.app.showCurrentPage(new WinnersElement(this.app.element));
        },
      },
    ];
  }

  init() {
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = this.routing.find(
      (p: { name: string }) => p.name === currentRouteName,
      console.log(currentRouteName),
    );
    currentRoute?.component();
  }
}

interface IRouting {
  name: string;
  component: () => void;
}
