import { BaseComponent } from "../../commons/base-component";
import { IWinner } from "../../commons/Interfaces";

export class WinnerRow extends BaseComponent {
  private columnPlace!: BaseComponent;

  private columnName!: BaseComponent;

  private columnTime!: BaseComponent;

  private columnWins!: BaseComponent;

  private parentNode: HTMLElement;

  constructor(parentNode: HTMLElement, readonly winnerInfo: IWinner) {
    super(null, "div", ["winners-row"]);
    this.parentNode = parentNode;
  }

  async createWinnerRow(): Promise<HTMLElement> {
    // TODO:  const carInfo = await new WinnerCar(this.winnerInfo.id).returnWinnerCar();

    this.columnPlace = new BaseComponent(
      this.parentNode,
      "div",
      ["place_column"],
      "1",
    );
    this.columnName = new BaseComponent(
      this.parentNode,
      "div",
      ["place_name"],
      "Ford",
    );
    this.columnTime = new BaseComponent(
      this.parentNode,
      "div",
      ["place_time"],
      "2.34",
    );
    this.columnWins = new BaseComponent(
      this.parentNode,
      "div",
      ["place_wins"],
      "2",
    );

    return this.element;
  }
}
