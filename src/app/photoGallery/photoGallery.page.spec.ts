import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoGalleryPage } from './photoGallery.page';

describe('PhotoGalleryPage', () => {
  let component: PhotoGalleryPage;
  let fixture: ComponentFixture<PhotoGalleryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGalleryPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
