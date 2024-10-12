import { Component, inject, Input } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  @Input() project = '';
  direction = '';
  data = inject(DataServiceService);
  projectData: any;
  num: number = 0;
  projectNumber: string = '';
  projectLength: string = '0' + this.data.myProjects.length;


  ngOnInit(): void {
    const num = parseInt(this.project);
    this.num = num;
    const projectData = this.data.myProjects[num];
    this.projectNumber = '0' + (num + 1);
    this.projectData = projectData;
    this.direction = this.oddOrEven(num + 1);
  }

  oddOrEven(num:number) {
    if (num % 2 !== 0) {
      return 'left';
    } else {
      return 'right';
    }
  }
}

