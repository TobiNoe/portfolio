import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';
import { timeout } from 'rxjs';

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
      for (let index = 0; index < this.data.navbarImg.length; index++) {
        const img = this.data.navbarImg[index];

        setTimeout(() => {
          this.hmenuImg = img;
        }, index * 100);
      }
    } else {
      for (let index = 4; index >= 0; index--) {
        const img = this.data.navbarImg[index];


        setTimeout(() => {
          this.hmenuImg = img;
          console.log('img :>> ', this.hmenuImg);
        }, (4 - index) * 100);
      }
    }

    /* this.hmenuImg = this.data.navbarImg[4]; */
    this.menuIsToggled = !this.menuIsToggled;

    /* this.openCloseEvent.emit(!this.menuIsToggled); */
  }
}
