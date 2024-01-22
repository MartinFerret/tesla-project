import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import {TeslaService} from "../services/tesla.service";
import {CarConfig} from "../models/config.model";

export const configResolver: ResolveFn<CarConfig> = (route) => {
  return inject(TeslaService).getOptions(route.params['codeModel']);
};
