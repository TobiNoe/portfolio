import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
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
  }

  checkOrientation() {
    setTimeout(() => {
      if (window.matchMedia("(orientation: portrait)").matches) {
        this.orientation = 'portrait';
        this.setVisibilite();
      } else {
        this.orientation = 'landscape';
        this.setVisibilite();
      }
    }, 25);
  }

  setVisibilite() {
    if (this.orientation == 'landscape' && this.deviceType == 'mobile') {
      this.show = false;
    } else {
      this.show = true;
    }
  }

}