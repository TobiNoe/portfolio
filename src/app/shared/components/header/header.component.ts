import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = inject(DataServiceService);
  /* @Output() openCloseEvent = new EventEmitter<boolean>(); */
  hmenuImg: string = this.data.navbarImg[0];
  menuIsToggled: boolean = false;

  toggleMenu() {
    if (!this.menuIsToggled) {
      this.renderImgForward();
    } else {
      this.renderImgBachward();
    }
    this.menuIsToggled = !this.menuIsToggled;
    /* this.openCloseEvent.emit(!this.menuIsToggled); */
  }

  renderImgForward() {
    for (let index = 0; index < this.data.navbarImg.length; index++) {
      const img = this.data.navbarImg[index];
      setTimeout(() => {
        this.hmenuImg = img;
      }, index * 100);
    }
  }

  renderImgBachward(){
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
}
