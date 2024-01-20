import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICarSelected } from "../models/tesla.model";

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedTeslaSubject: BehaviorSubject<ICarSelected> = new BehaviorSubject<ICarSelected>({ model: undefined, color: undefined });

  selectedTeslaSubject$: Observable<ICarSelected> = this.selectedTeslaSubject.asObservable();

  setSelectedTesla(selectedObject: ICarSelected): void {
    this.selectedTeslaSubject.next(selectedObject);
  }

  getSelectedTesla(): Observable<ICarSelected> {
    return this.selectedTeslaSubject$;
  }
}
