import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import {Model} from "../models/tesla.model";
import {TeslaService} from "../services/tesla.service";

export const modelsResolver: ResolveFn<Model[]> = () => {
  return inject(TeslaService).getModels();
};
