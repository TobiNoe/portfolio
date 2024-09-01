import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() openCloseEvent = new EventEmitter<boolean>();
  hmenuImg:string = "./../../../../../assets/img/navbar/burger_1.png"
  menuIsToggled:boolean = false;
  

  toggleMenu(){
    this.menuIsToggled = !this.menuIsToggled;
    this.openCloseEvent.emit(!this.menuIsToggled);
  }
}
