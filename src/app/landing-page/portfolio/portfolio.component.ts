import { Component, inject } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { DataServiceService } from '../../shared/services/data-service.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  data = inject(DataServiceService);
}
