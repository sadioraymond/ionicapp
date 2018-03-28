import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MeteoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoProvider {

  apikey= 'bf00f74765cabbcc';
  url;

  constructor(public http: Http) {
    console.log('Hello MeteoProvider Provider');
    this.url='http://api.wunderground.com/api/'+this.apikey+'/conditions/q';

  }

  getMeteo(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res => res.json());
  }
}
