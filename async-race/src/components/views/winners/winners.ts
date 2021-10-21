import { IWinner } from "../../commons/Interfaces";
import { BaseComponent } from "../../commons/base-component";
import "./winners.scss";
import { WinnerRow } from "./winnersRow";

export class WinnersElement extends BaseComponent {
  private container: BaseComponent;

  private table: BaseComponent;

  private tableHeader: BaseComponent;

  private headerPlace: BaseComponent;

  private headerName: BaseComponent;

  private headerTime: BaseComponent;

  private headerWins: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["winners_page"]);
    this.container = new BaseComponent(this.element, "div", [
      "container_winners",
    ]);
    this.table = new BaseComponent(this.container.element, "div", ["table"]);
    this.tableHeader = new BaseComponent(this.table.element, "table", [
      "table_header",
    ]);
    this.headerPlace = new BaseComponent(
      this.tableHeader.element,
      "div",
      ["table_header__place"],
      "place",
    );
    this.headerName = new BaseComponent(
      this.tableHeader.element,
      "div",
      ["table_header__name"],
      "name",
    );
    this.headerTime = new BaseComponent(
      this.tableHeader.element,
      "div",
      ["table_header__time"],
      "time",
    );
    this.headerWins = new BaseComponent(
      this.tableHeader.element,
      "div",
      ["table_header__wins"],
      "wins",
    );
    const infoCar: IWinner = { id: 1, wins: 2, time: 3 };
    const winnersRow = new WinnerRow(
      this.tableHeader.element,
      infoCar,
    ).createWinnerRow();
  }
}
