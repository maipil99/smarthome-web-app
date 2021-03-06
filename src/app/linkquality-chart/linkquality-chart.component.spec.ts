import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';

import { LinkqualityChartComponent } from './linkquality-chart.component';

describe('LinkqualityChartComponent', () => {
  let component: LinkqualityChartComponent;
  let fixture: ComponentFixture<LinkqualityChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkqualityChartComponent ],
      imports: [ ChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkqualityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
