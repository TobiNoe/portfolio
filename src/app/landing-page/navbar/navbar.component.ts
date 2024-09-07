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
  hmenuImg:string = this.data.navbarImg[0];
  menuIsToggled:boolean = false;
  

  toggleMenu(){
    this.hmenuImg = this.data.navbarImg[4];
    this.menuIsToggled = !this.menuIsToggled;

    /* this.openCloseEvent.emit(!this.menuIsToggled); */
  }
}
