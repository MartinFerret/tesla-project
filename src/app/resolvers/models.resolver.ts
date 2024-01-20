import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import {IModel} from "../models/tesla.model";
import {TeslaService} from "../services/tesla.service";

export const modelsResolver: ResolveFn<IModel[]> = () => {
  return inject(TeslaService).getModels();
};
