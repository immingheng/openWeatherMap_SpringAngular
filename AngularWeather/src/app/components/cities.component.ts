import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: string[] = ["Singapore", "Tokyo", "London", "New York", "Saigon", "Beijing", "Kuala Lumpur"];

  @Input() city!: string;

  weather! : Weather;

  @Output() result! : {};


  constructor(private router: Router,
  private weatherSvc: WeatherService) { }

  ngOnInit(): void {
  }

  go(city:string){
    const params = {
      fields: 'imperial',
    }
    this.router.navigate(['/weather', city],{queryParams: params});

  }

  getWeather(city:string){
    console.info(city);
    this.weatherSvc.getWeather(city).then(result=>{
      this.result = result;
      console.info(result);
    })

  }

}
