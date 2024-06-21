import { Component,OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor() {}

    //use
    ngOnInit() {
      // Listen for app state changes
      App.addListener('appStateChange', (state) => {
        console.log('App state changed. Is active:', state.isActive);
      });

      // Get the app's state
      this.getAppState();
    }

    async getAppState() {
      const state = await App.getState();
      console.log('App state:', state);
    }

    async openBrowser() {
      await Browser.open({ url: 'https://www.example.com' });
    }

    async takePhoto() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      const imageUrl = image.webPath;
      console.log('Image URL:', imageUrl);
    }

    async selectPhoto() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });

      const imageUrl = image.webPath;
      console.log('Image URL:', imageUrl);
    }


}
