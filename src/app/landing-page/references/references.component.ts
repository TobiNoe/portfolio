import { Component, inject } from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  data = inject(DataServiceService);

}
