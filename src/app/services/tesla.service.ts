import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Model} from "../models/tesla.model";
import {Observable} from "rxjs";
import {CarConfig} from "../models/config.model";

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

  modelApiUrl = '/models';
  optionsApiUrl = '/options';

  private http = inject(HttpClient);

  getModels() : Observable<Model[]> {
    return this.http.get<Model[]>(this.modelApiUrl);
  }

  getOptions(code: string): Observable<CarConfig> {
    return this.http.get<CarConfig>(`${this.optionsApiUrl}/${code}`);
  }
}
