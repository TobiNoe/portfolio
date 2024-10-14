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
  @ViewChild('enButton') enButton!: ElementRef; // Zugriff auf den EN-Button
  hmenuImg: string = this.data.navbarImg[0];
  menuIsToggled: boolean = false;

  toggleMenu() {
    if (!this.menuIsToggled) {
      this.renderImgForward();
      this.focusLanguage();
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

  renderImgBackward(){
    for (let index = 4; index >= 0; index--) {
      const img = this.data.navbarImg[index];
      setTimeout(() => {
        this.hmenuImg = img;
      }, (4 - index) * 100);
    }
  }

  scrollToFragment(fragment: string): void {
    const element = document.querySelector(fragment);
    console.log('element :>> ', element);  
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  }

  changeLaguage(lang: string) {
    this.translationService.use(lang);
  }

  focusLanguage() {
    setTimeout(() => {
      this.enButton.nativeElement.focus();
    }, 25);
  }
}
