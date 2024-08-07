import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  btnDisabled:boolean = true;
  policyChecked:boolean = false;


  checkPolicy() {
    this.policyChecked = !this.policyChecked;
    console.log(this.policyChecked);
  }

}
