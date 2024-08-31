import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  hmenuImg:string = "./../../../../../assets/img/navbar/burger_1.png"
  menuIsToggled:boolean = false;
  

  toggleMenu(){
    this.menuIsToggled = !this.menuIsToggled;
  }
}
