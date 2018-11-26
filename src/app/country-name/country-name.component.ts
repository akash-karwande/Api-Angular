import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {Observable} from 'rxjs/Observable';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-country-name',
  templateUrl: './country-name.component.html',
  styleUrls: ['./country-name.component.css'],
})
export class CountryNameComponent implements OnInit {

	public countries: any;
  
 constructor( private logicService: LogicService) {
   this.logicService.getCountryNames()
             .subscribe( data => {this.countries = data;
                     console.log(data);},

              err => console.error(err),
     
              () => console.log('done loading Countries')
  );
           }

 ngOnInit() {

}
  
  };
