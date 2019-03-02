import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cb-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  
  @Input() chart: any

  constructor() { }

  ngOnInit() {
  }

}
