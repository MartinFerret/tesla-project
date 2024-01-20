import {IConfig} from "./config.model";

export interface IModel {
  code: string;
  description: string;
  colors: IColor[];
}

export interface IColor {
  code: string;
  description: string;
  price: number;
}

export interface IModelWithoutColors extends Omit<IModel, 'colors'> {}

export interface ICarSelected {
  model: IModelWithoutColors | undefined;
  color: IColor | undefined;
  config?: IConfig;
  tow?: boolean;
  yoke?: boolean
}
