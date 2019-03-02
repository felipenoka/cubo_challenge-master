import {Chart} from './main.model'


export class MainService {

    charts = [{
        name: "Carlos",
        lastname: "Moura",
        participation: 5.00
      }, {
        name: "Fernanda",
        lastname: "Oliveira",
        participation: 15.00
      }]
    constructor(){

    }
    chartsArray(): Chart[] {
        return this.charts;
    }
}