import { Component, inject } from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  data = inject(DataServiceService);

}
