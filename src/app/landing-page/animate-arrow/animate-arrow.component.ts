import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animate-arrow',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './animate-arrow.component.html',
  styleUrl: './animate-arrow.component.scss'
})
export class AnimateArrowComponent {
  /* position:number = 1; */
  @Input() positionArrow:string = '';
}
