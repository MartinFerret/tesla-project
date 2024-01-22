import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {SharedService} from "../services/shared.service";
import {map} from "rxjs";

export const stepOneGuard: CanActivateFn = () => {
  return inject(SharedService).getSelectedTesla().pipe(
    map((selectedTesla) => {
      return !!selectedTesla.color;
    })
  );
};
