import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DataServiceService } from '../shared/services/data-service.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  data = inject(DataServiceService);
}
