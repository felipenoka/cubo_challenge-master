import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js'
import { MainService } from './main.service';
import {Chart} from 'chart.js';
import { FormsModule } from '@angular/forms'
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'cb-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, AfterViewInit {
chart: String;
charts: Object[] = [];
grids: Object[] = [];
names: String[];
participations: Number[];

  constructor(private mainService: MainService) { }
  ngAfterViewInit() {
    
  }

  ngOnInit() {
    this.chartGraph();
    this.parallax();
  }
  chartGraph() {
    this.mainService.getChart().subscribe(data => this.charts = data)
    this.mainService.getGrid().subscribe(data => this.grids = data)
    let ctx = document.getElementById('myChart')  
    this.mainService.getGraph()
    .subscribe(res => {
      this.names = res.map(_ => _.name + ' ' + _.lastname);
      this.participations = res.map(_ => _.participation);
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: this.names,
            datasets: [{
                label: 'Participações',
                data: this.participations,
                backgroundColor: [
                    '#15b999',
                    '#bdc3c7',
                    '#2d97de',
                    '#9c55b8',
                    '#e94b35'
                ],
                borderWidth: 5
            }]
        },
        options: {
          responsive: true,
          legend: {
              display: false,
              position: 'left',  
                  labels: {
                      fontSize:10,
                      hidden: false
                  }
              }
          }
    });
  })
  }
  parallax() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeIpunt: true,
      hoverOnly: true
    });
  }
  checkSubmit(submit: any) {
    console.log(submit);
    event.preventDefault();
    let form = document.getElementById("formulario");
    let resultado = document.getElementById("resultado");
    form.classList.remove("d-flex");
    form.classList.add("d-none");
    resultado.style.display = "inline";
  
    resultado.innerHTML = `<h3 class="text-white mt-3 text-uppercase">Cadastro realizado com sucesso! :)</h3>`;
  }
}
