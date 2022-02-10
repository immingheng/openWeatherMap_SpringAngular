import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Weather } from "./weather.model";

@Injectable()
export class WeatherService{

  constructor(private http:HttpClient){}

  getWeather(city:string) : Promise<Weather> {
    return lastValueFrom(
      this.http.get<Weather>(`/api/weather/${city}`)
    )
  }


}
