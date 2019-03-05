import {Chart, Grid} from './main.model'
import { GRID_API, CHART_API } from '../app.api'
import {ErrorHandler} from '../app.error-handler'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class MainService {


    constructor(private http: HttpClient){}
    url_chart = CHART_API;
    url_grid = GRID_API;
    
    getGraph(): Observable<{name: string, lastname: string, participation: number}[]> {
      return this.http.get<{name: string, lastname: string, participation: number}[]>(this.url_chart)
      .map(result => result)
      .catch(ErrorHandler.handleError);
    }
    
    getChart(): Observable<Chart[]> {
      return this.http.get<Chart[]>(this.url_chart)
      .catch(ErrorHandler.handleError);
    }
    getGrid(): Observable<Grid[]> {
      return this.http.get<Grid[]>(this.url_grid)
      .catch(ErrorHandler.handleError);
    }
    
}