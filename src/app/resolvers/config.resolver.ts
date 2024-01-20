import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import {TeslaService} from "../services/tesla.service";
import {ICarConfig} from "../models/config.model";

export const configResolver: ResolveFn<ICarConfig> = (route) => {
  return inject(TeslaService).getOptions(route.params['codeModel']);
};
