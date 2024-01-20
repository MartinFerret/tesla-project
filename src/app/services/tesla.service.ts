import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IModel} from "../models/tesla.model";
import {Observable} from "rxjs";
import {ICarConfig} from "../models/config.model";

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

  modelApiUrl = '/models';
  optionsApiUrl = '/options';
  constructor(private http: HttpClient) { }

  getModels() : Observable<IModel[]> {
    return this.http.get<IModel[]>(this.modelApiUrl);
  }

  getOptions(code: string): Observable<ICarConfig> {
    return this.http.get<ICarConfig>(`${this.optionsApiUrl}/${code}`);
  }
}
