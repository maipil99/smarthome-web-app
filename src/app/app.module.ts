import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ChartsModule} from "ng2-charts";
import { RouterModule } from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';


import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {NavComponent} from './nav/nav.component';
import {DashComponent} from './dash/dash.component';
import {DeviceModalComponent} from './device-modal/device-modal.component';

import { LinkqualityChartComponent } from './linkquality-chart/linkquality-chart.component';
import { LinkqualityService } from 'src/Services/Linkquality-service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    DeviceModalComponent,
    LinkqualityChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSliderModule,
    ChartsModule,
    RouterModule

  ],
  providers: [LinkqualityService],
  bootstrap: [AppComponent],
  entryComponents: [DeviceModalComponent]
})
export class AppModule {
}


