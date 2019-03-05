import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'Home', component: MainComponent},
  {path: 'Service', component: MainComponent},
  {path: 'About', component: MainComponent},
  {path: 'Data', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
