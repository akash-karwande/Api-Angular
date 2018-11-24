import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { Http, Headers, Response } from '@angular/http';

import { AppRoutingModule, routingComponents} from './app-routing.module';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable()
export class LogicService {

  constructor(private http:HttpClient) { }

  getCountryNames(){

  	console.log('hey');

  	 return this.http.get('https://restcountries.eu/rest/v2/all');

 }


 getCountryInfo(name){
 		var nam = name;
  	 	var url = 'https://restcountries.eu/rest/v2/name/'+nam;
 
  	 return this.http.get(url)	 
 }


  }

