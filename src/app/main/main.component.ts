import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import * as Parallax from 'parallax-js'
import {Chart} from './main.model'
import { MainService } from './main.service';

@Component({
  selector: 'cb-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  charts

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.charts = this.mainService.chartsArray()

    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeIpunt: true,
      hoverOnly: true
    });
  }

}
