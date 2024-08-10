import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  btnDisabled: boolean = true;
  policyChecked: boolean = false;
  isEmptyName: boolean = true;
  isEmptyMail: boolean = true;

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  checkPolicy() {
    this.policyChecked = !this.policyChecked;
    console.log(this.policyChecked);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

}
