import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { NgClass } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = inject(DataServiceService);
  private translationService = inject(TranslateService);
  @ViewChild('enButton') enButton!: ElementRef;
  @ViewChild('deButton') deButton!: ElementRef;
  hmenuImg: string = this.data.navbarImg[0];
  menuIsToggled: boolean = false;
  lang: string = 'en';

  toggleMenu() {
    if (!this.menuIsToggled) {
      this.renderImgForward();
      this.focusLanguage(this.lang);
    } else {
      this.renderImgBackward();
    }
    this.menuIsToggled = !this.menuIsToggled;
  }

  renderImgForward() {
    for (let index = 0; index < this.data.navbarImg.length; index++) {
      const img = this.data.navbarImg[index];
      setTimeout(() => {
        this.hmenuImg = img;
      }, index * 100);
    }
  }

  renderImgBackward() {
    for (let index = 4; index >= 0; index--) {
      const img = this.data.navbarImg[index];
      setTimeout(() => {
        this.hmenuImg = img;
      }, (4 - index) * 100);
    }
  }

  changeLaguage(lang: string) {
    this.translationService.use(lang)
    this.lang = lang;
  }

  focusLanguage(lang: string) {
    // Setze den Fokus auf den Button der aktiven Sprache
    setTimeout(() => {
      if (lang === 'en') {
        this.enButton.nativeElement.focus();
      } else if (lang === 'de') {
        this.deButton.nativeElement.focus();
      }
    }, 50); // Kleine Verzögerung, um sicherzustellen, dass das DOM bereit ist
  }
}
