import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarSelected } from "../models/tesla.model";

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedTeslaSubject: BehaviorSubject<CarSelected> = new BehaviorSubject<CarSelected>({ model: undefined, color: undefined });

  selectedTeslaSubject$: Observable<CarSelected> = this.selectedTeslaSubject.asObservable();

  setSelectedTesla(selectedObject: CarSelected): void {
    this.selectedTeslaSubject.next(selectedObject);
  }

  getSelectedTesla(): Observable<CarSelected> {
    return this.selectedTeslaSubject$;
  }
}
