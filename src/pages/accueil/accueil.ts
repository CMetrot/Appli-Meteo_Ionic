import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiMeteoProvider } from '../../providers/api-meteo/api-meteo';
import { Day } from '../../interfaces/Day';
import { DayInfo } from '../../interfaces/DayInfo';
import { City } from '../../interfaces/city';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  index: Number;
  private formulaire : FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiMeteo: ApiMeteoProvider,
    private formBuilder: FormBuilder) {

      this.formulaire = this.formBuilder.group({
        jour: ['', Validators.required]
      });
    }

  ionViewDidLoad(a) {
    this.dayInfo = [];
    this.apiMeteo.getMeteo().subscribe(data =>{
      this.meteo = data;
      if(a == null || a == 0 || !a) {
        this.day = data.fcst_day_0;
        this.index = 0;
      }
      if(a == "Mercredi") {
        this.day = data.fcst_day_0;
        this.index = 0;
      }
      if(a == "Jeudi") {
        this.day = data.fcst_day_1;
        this.index = 1;
      }
      if(a == "Vendredi") {
        this.day = data.fcst_day_2;
        this.index = 2;
      }
      if(a == "Samedi") {
        this.day = data.fcst_day_3;
        this.index = 3;
      }
      if(a == "Dimanche") {
        this.day = data.fcst_day_4;
        this.index = 4;
      }
      this.dayInfo.push(data.fcst_day_0);
      this.dayInfo.push(data.fcst_day_1);
      this.dayInfo.push(data.fcst_day_2);
      this.dayInfo.push(data.fcst_day_3);
      this.dayInfo.push(data.fcst_day_4);
      this.city = data.city_info;
    });
  }

  onSearch(){
    let jour = this.formulaire.value['jour'];
    this.ionViewDidLoad(jour);
  }

}

