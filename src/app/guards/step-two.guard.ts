import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {SharedService} from "../services/shared.service";
import {map, Observable} from "rxjs";

export const stepTwoGuard: CanActivateFn = () => {
  return inject(SharedService).getSelectedTesla().pipe(
    map((selectedTesla) => {
      return !!selectedTesla.config;
    })
  );
};
