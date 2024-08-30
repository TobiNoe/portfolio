import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  hmenuImg:string = "./../../../../../assets/img/navbar/burger_1.png"
  displayToggle:string = "display: none"

  toggleMenu(){
    this.displayToggle = "display: flex";
  }
}
