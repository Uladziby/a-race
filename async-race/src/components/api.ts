import { ICreateCar, ICars } from "./commons/Interfaces";
import { RandomCar } from "./commons/randomize";

export class API {
  private base = "http://127.0.0.1:3000";

  private garage = `${this.base}/garage`;

  private engine = `${this.base}/engine`;

  public async getCars(page: number): Promise<Array<ICars>> {
    const res = await fetch(`${this.garage}?_page${page}`);
    const arrOut = await res.json();
    return arrOut;
  }

  public async getCar(id: number) {
    const res = await fetch(`${this.garage}/${id}`);
    return res.json();
  }

  public async createCar() {
    const body = await new RandomCar().createRandomCar();
    console.log("body", body);
    const req = (
      await fetch(this.garage, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
  }

  public async deleteCar(id: number) {
    console.log("delete", id);
    const req = (
      await fetch(`${this.garage}/${id}`, {
        method: "DELETE",
      })
    ).json();
  }

  public async startEngine(id: number) {
    const res = await fetch(`${this.engine}?id=${id}&status=started`);
    return res.json();
  }

  public async stopEngine(id: number) {
    return (await fetch(`${this.engine}?id=${id}&status=stopped`)).json();
  }
}
