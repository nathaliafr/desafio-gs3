import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PhotoGalleryPage } from './photoGallery.page';

describe('Tab1Page', () => {
  let component: PhotoGalleryPage;
  let fixture: ComponentFixture<PhotoGalleryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGalleryPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
