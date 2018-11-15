import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiMeteoProvider } from '../../providers/api-meteo/api-meteo';
import { Day } from '../../interfaces/Day';
import { DayInfo } from '../../interfaces/DayInfo';
import { City } from '../../interfaces/city';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  city: City;
  dayInfo: DayInfo[]=[];
  day: Day;
  meteo = [];
  i: number;
  index: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiMeteo: ApiMeteoProvider ) {
  }

  ionViewDidLoad() {
    this.apiMeteo.getMeteo().subscribe(data =>{
      this.meteo = data;
      this.day = data.fcst_day_0;
      this.dayInfo.push(data.fcst_day_0);
      this.dayInfo.push(data.fcst_day_1);
      this.dayInfo.push(data.fcst_day_2);
      this.dayInfo.push(data.fcst_day_3);
      this.dayInfo.push(data.fcst_day_4);
      this.city = data.city_info;
    });
  }

  onSearch(){
    
  }

}

