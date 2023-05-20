import { Component } from '@angular/core'; 
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';



@Component({
  selector: 'app-photo-gallery',
  templateUrl: 'photoGallery.page.html',
  styleUrls: ['photoGallery.page.scss']
})
export class PhotoGalleryPage {
  photos: string[] = [];

  constructor() {}
 
  async choosePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    this.photos.push(image.dataUrl!);
  }

  deletePhoto(index: number) {
    this.photos.splice(index, 1);
  }
}


