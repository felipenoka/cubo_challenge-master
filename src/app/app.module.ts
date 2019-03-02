import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartComponent } from './main/chart/chart.component';
import { MainService } from './main/main.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 75,
      animation: true,
      titleFontSize: "40",
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
