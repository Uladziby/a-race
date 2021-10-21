import { ICreateCar } from "./Interfaces";

export class RandomCar {
  private colorSpectrum : number = 16777215;

  private arrayModel: Array<string> = [
    "VW",
    "Porsche",
    "BMW",
    "Opel",
    "Honda",
    "Toyota",
    "Audi",
    "Jeep",
    "Kia",
    "Ford",
  ];

  createRandomCar(): ICreateCar {
    const randomCar: ICreateCar = { name: "", color: "" };
    const model = this.arrayModel[Math.floor(Math.random() * this.arrayModel.length)];
    const color = Math.floor(Math.random() * this.colorSpectrum).toString(16);
    randomCar.name = model;
    randomCar.color = color;

    return randomCar;
  }
}
