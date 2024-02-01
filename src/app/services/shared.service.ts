import {Injectable, signal} from '@angular/core';
import { Observable } from 'rxjs';
import { CarSelected } from "../models/tesla.model";
import {toObservable} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedTeslaSignal = signal<CarSelected>({model: undefined, color: undefined});
  selectedTeslaObservable$ = toObservable(this.selectedTeslaSignal);

  setSelectedTesla(selectedObject: CarSelected): void {
    this.selectedTeslaSignal.set(selectedObject);
  }

  getSelectedTesla(): Observable<CarSelected> {
    return this.selectedTeslaObservable$;
  }
}
