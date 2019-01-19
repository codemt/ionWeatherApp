import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data :{};
  name : {};
  temp : {};
  temperature : string;

  constructor(public navCtrl: NavController,private WeatherProvider : WeatherProvider) {

  }


  ionViewWillEnter(){


  this.WeatherProvider.getWeather().subscribe(res => {

        console.log(res);  
        this.name = res['name'];
        this.temp = res['main'];
        console.log(this.name);  
        console.log(this.temp);
        this.temperature = this.temp['temp'];
        console.log(this.temperature);
        // console.log(this.temp['temp']);
    
    });


     

  }


}
