import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { City } from "../../interfaces/city";
import { Day } from "../../interfaces/Day";
import { DayInfo } from "../../interfaces/DayInfo";

/*
  Generated class for the ApiMeteoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiMeteoProvider {
  private baseUrl: string = "../../assets/api/meteo.json";
 
  cityVar: City[];
  dayVar: Day[];
  dayInfoVar: DayInfo[];

  constructor(
    private readonly http: HttpClient,
  ) {}
 
  getMeteo(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}