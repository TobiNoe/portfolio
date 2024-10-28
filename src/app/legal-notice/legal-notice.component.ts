import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DataServiceService } from '../shared/services/data-service.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  data = inject(DataServiceService);
}
