import { Component, inject} from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';
import { NgStyle } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [NgStyle, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  data = inject(DataServiceService);
  imageWidths: number[] = [];

  onImageLoad(index: number, event: Event) {
    const img = event.target as HTMLImageElement;
    this.imageWidths[index] = img.width;
  }
}
