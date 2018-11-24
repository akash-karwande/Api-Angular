import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryNameComponent } from './country-name/country-name.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [

		{ path:'List', component:CountryNameComponent },
		{ path:'detail/:name', component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CountryNameComponent, DetailsComponent,]
