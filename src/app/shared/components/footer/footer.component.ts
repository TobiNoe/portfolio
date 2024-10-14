import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, TranslateModule],
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
  mailTest = true;
  http = inject(HttpClient);
  data = inject(DataServiceService);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  checkPolicy() {
    this.policyChecked = !this.policyChecked;
    console.log(this.policyChecked);
  }

  post = {
    endPoint: 'https://tobias-noelle.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.policyChecked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.policyChecked = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.policyChecked && this.mailTest) {

      ngForm.resetForm();
      this.policyChecked = false;
    }
  }

}
