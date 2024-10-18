import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  deviceType: string = 'desktop';
  orientation: string = 'landscape';
  show: boolean = true;

  ngOnInit() {
    this.checkDeviceType();
    this.checkOrientation();

    window.addEventListener('orientationchange', () => {
      this.checkOrientation();
    });
  }

  checkDeviceType() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.deviceType = isMobile ? 'mobile' : 'desktop';
    console.log('Device :>> ', this.deviceType);
  }

  checkOrientation() {
    setTimeout(() => {
      if (window.matchMedia("(orientation: portrait)").matches) {
        this.orientation = 'portrait';
        this.checkVisibilite();
      } else {
        this.orientation = 'landscape';
        this.checkVisibilite();
      }
      console.log('format :> ', this.orientation); 
    }, 25);
  }

  checkVisibilite() {
    if (this.orientation == 'landscape' && this.deviceType == 'mobile') {
      this.show = false;
      console.log('show false :>> ', this.show);
    } else {
      this.show = true;
      console.log('show true :>> ', this.show);
    }
  }

}