import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  data = inject(DataServiceService);
  @Output() openCloseEvent = new EventEmitter<boolean>();
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
}


