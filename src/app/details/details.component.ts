import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	public fullDetails: any;
	public name : string;
	private subs: any;

  constructor(private logicService: LogicService, private route : ActivatedRoute) {}

  ngOnInit() {

 

  	 this.subs = this.route.params.subscribe(params => {
       this.name = params['name'];
       console.log(this.name)

       

       this.logicService.getCountryInfo(this.name).subscribe(
      // the first argument is a function which runs on success
       data => { this.fullDetails = data;
         console.log(this.fullDetails);},
      // the second argument is a function which runs on error
       err => console.log(err),
      // the third argument is a function which runs on completion
       () => console.log('done loading country information')
  );
       // In a real app: dispatch action to load the details here.
    });


  }

    
}
