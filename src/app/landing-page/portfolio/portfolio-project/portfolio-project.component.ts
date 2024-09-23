import { Component, inject, Input } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  @Input() project = '';
  data = inject(DataServiceService);
  projectData: any;
  projectNumber: string = '';
  projectLength: string = '0' + this.data.myProjects.length;


  ngOnInit(): void {
    const num = parseInt(this.project);
    const projectData = this.data.myProjects[num];
    this.projectNumber = '0' + (num + 1);
    this.projectData = projectData;

  }
}

