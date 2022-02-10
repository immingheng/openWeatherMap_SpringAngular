import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cities-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather!: Weather;

  city=''
  fields = ''
  result=''

  constructor(private activatedRoute: ActivatedRoute,
              private weatherSvc:WeatherService){}

  ngOnInit(): void {
    this.city = this.activatedRoute.snapshot.params['city']
    this.fields=this.activatedRoute.snapshot.queryParams['fields']
    console.log('fields= ', this.fields);

    this.weatherSvc.getWeather(this.city).then(w=>this.weather = w)
    }



}
