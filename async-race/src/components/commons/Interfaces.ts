export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface ICreateCar {
  name: string;
  color: string;
}

export interface ISpeed {
  id: number;
  speed: number;
}

export interface IGaragePage {
  page: number;
  limit: number;
  isRace: boolean;
  currentRace: number;
}

export interface ICars {
  name: string;
  color: string;
  id: number;
}
