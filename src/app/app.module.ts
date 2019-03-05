import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule   } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MainService } from './main/main.service';
import {NgxMaskModule} from 'ngx-mask'
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    TextMaskModule,
    NgCircleProgressModule.forRoot({
      radius: 75,
      animation: true,
      titleFontSize: "30",
      showSubtitle: false,
      outerStrokeWidth: 10,
      innerStrokeWidth: 8,
      outerStrokeColor: "#404a58",
      innerStrokeColor: "#fff",
      space: -9,
      outerStrokeLinecap: "butt",
      imageHeight: 30,
      imageWidth: 30,
      showUnits: false,
      
    })
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
