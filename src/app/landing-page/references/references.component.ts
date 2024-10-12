import { Component, inject } from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  data = inject(DataServiceService);

}
