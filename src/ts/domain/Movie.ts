import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor (
    readonly id: number,
    readonly imaxAvailable: boolean,
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genres: string[],
    readonly timeLengthMinutes: number,
    readonly price: number,
  ) {}
}