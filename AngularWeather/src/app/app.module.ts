import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather.component';
import {HttpClientModule} from '@angular/common/http'
import { WeatherService } from './weather.service';
import { CitiesComponent } from './components/cities.component';

const appRoutes: Routes = [
  {path: '', component: CitiesComponent},
  {path:'weather/:city', component: WeatherComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule
    ,RouterModule.forRoot(appRoutes, {useHash:true}),
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
