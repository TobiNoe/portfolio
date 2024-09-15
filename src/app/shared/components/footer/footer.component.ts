import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  btnDisabled: boolean = true;
  policyChecked: boolean = false;
  isEmptyName: boolean = true;
  isEmptyMail: boolean = true;
  imgGitSrc: string = './assets/img/footer/github_button.svg';
  imgMailSrc: string = './assets/img/footer/email_button.svg';
  imgLinkedinSrc: string = './assets/img/footer/linkedin_button.svg';

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
