import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeteoProvider } from '../../providers/meteo/meteo';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  meteo: any;
  location: {
    city:string,
    state:string;
  }
  constructor(public navCtrl: NavController,
    private meteoProvider:MeteoProvider,private storage:Storage) {

  }

  ionViewWillEnter(){
this.storage.get('location').then((val)=>{
  if(val!=null){
    this.location=JSON.parse(val);
  }else{
    this.location={
      city: 'Dakar',
      state: 'SN'
    }
  }
  this.meteoProvider.getMeteo(this.location.city,this.location.state)
  .subscribe(meteo=>{
    this.meteo=meteo.current_observation;
  });
});
  }

}
