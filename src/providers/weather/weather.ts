import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey='b6907d289e10d714a6e88b30761fae22';
  url;
  data : string;

  constructor(public http: HttpClient) {

    //this.url ='https://jsonplaceholder.typicode.com/posts';
    this.url='https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(){
 
    return this.http.get(this.url);
    
  }

}
