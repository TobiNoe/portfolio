import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DataServiceService } from '../../shared/services/data-service.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  data = inject(DataServiceService);
  isHover: boolean = false;

  toggleHover() {
    this.isHover = !this.isHover;
  }
}
