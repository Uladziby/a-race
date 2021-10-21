import { BaseComponent } from "../commons/base-component";

export class Header extends BaseComponent {
  private linkGarage: BaseComponent;

  private linkWinners: BaseComponent;

  constructor() {
    super(null, "header", ["header"]);
    this.linkGarage = new BaseComponent(
      this.element,
      "a",
      ["header_link-garage", "activate"],
      "Garage",
    );
    this.linkWinners = new BaseComponent(
      this.element,
      "a",
      ["header_link-winners"],
      "Winners",
    );

    this.linkGarage.element.addEventListener("click", () => {
      window.location.hash = "#garage";
      this.linkGarage.element.classList.add("activate");
      this.linkWinners.element.classList.remove("activate");
    });
    this.linkWinners.element.addEventListener("click", () => {
      this.linkGarage.element.classList.remove("activate");
      this.linkWinners.element.classList.add("activate");
      window.location.hash = "#winners";
    });
  }
}
