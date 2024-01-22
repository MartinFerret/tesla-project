import {Config} from "./config.model";

export interface Model {
  code: string;
  description: string;
  colors: Color[];
}

export interface Color {
  code: string;
  description: string;
  price: number;
}

export interface ModelWithoutColors extends Omit<Model, 'colors'> {}

export interface CarSelected {
  model: ModelWithoutColors | undefined;
  color: Color | undefined;
  config?: Config;
  tow?: boolean;
  yoke?: boolean
}
