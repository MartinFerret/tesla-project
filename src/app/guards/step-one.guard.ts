import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {SharedService} from "../services/shared.service";
import {Observable} from "rxjs";

export const stepOneGuard: CanActivateFn = (route, state) => {
  const selectedCar = inject(SharedService).getSelectedTesla();
  return new Observable<boolean>((observer) => {
    selectedCar.subscribe((s) => {
      if (s.color) {
        observer.next(true);
      } else {
        observer.next(false);
      }
    });
  });
};
