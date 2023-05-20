import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MapLocationPage } from './mapLocation.page';

describe('Tab2Page', () => {
  let component: MapLocationPage;
  let fixture: ComponentFixture<MapLocationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapLocationPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MapLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
