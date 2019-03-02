import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js'

declare var Parallax: any;

@Component({
  selector: 'cb-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeIpunt: true,
      hoverOnly: true
    });
  }
}
