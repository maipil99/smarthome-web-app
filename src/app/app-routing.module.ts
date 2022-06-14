import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashComponent} from './dash/dash.component';
import {LinkqualityChartComponent} from "./linkquality-chart/linkquality-chart.component";


  const routes: Routes = [
      { path: 'dashboard', component: DashComponent },
      { path: 'link-quality', component: LinkqualityChartComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
