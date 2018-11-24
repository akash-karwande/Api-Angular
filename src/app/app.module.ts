import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicService } from './logic.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [LogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
