import { Component } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ActivatedRoute } from '@angular/router'; 
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router'; 

declare var results: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countries';
}
