import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoaddataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaddataProvider {



  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }

  getapart(){
    const url = 'http://localhost/todoslim3/public/index.php/apartment';
    return this.http.get(url);
  }
  getcondo(){
    const url = 'http://localhost/todoslim3/public/index.php/condominium';
    return this.http.get(url);
  }
  getmansion(){
    const url = 'http://localhost/todoslim3/public/index.php/Mansion';
    return this.http.get(url);
  }
  getdorm(){
    const url = 'http://localhost/todoslim3/public/index.php/dorm';
    return this.http.get(url);
  }
  searchMovie(query){
    const url = 'http://localhost/todoslim3/public/index.php/Mansion/'+ query;
    return this.http.get(url);
  }
}
