export interface IConfig {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}

export interface ICarConfig {
  configs: IConfig[];
  towHitch: boolean;
  yoke: boolean;
}
