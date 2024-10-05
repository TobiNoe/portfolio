import { NgClass } from '@angular/common';
import { Component, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

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
  @Input() positionArrow: string = '';
  isLongArrow: boolean = false;  // Steuert welches SVG angezeigt wird
  scrolledEnough: boolean = false;  // Um den Scroll-Status zu überwachen
  scrollThreshold = 50;  // 50px Scrollgrenze
  initialScrollTop = 0;  // Startpunkt des Scrollens
  containerInView = false;  // Überwacht, ob der Container im Viewport ist

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // Methode, um die Position des Containers im Viewport zu überprüfen
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const container = this.el.nativeElement.querySelector('.arrow-animation');
    const containerRect = container.getBoundingClientRect();
  
    // Überprüfen, ob der Container 100% im Viewport ist
    if (this.checkContainerInView(containerRect)) {
      const scrollDifference = window.scrollY - this.initialScrollTop;
  
      // Scroll-Logik für herunter oder hoch scrollen
      if (scrollDifference >= this.scrollThreshold && !this.scrolledEnough) {
        this.handleScrollDown(container);
      } else if (scrollDifference < this.scrollThreshold && this.scrolledEnough) {
        this.handleScrollUp(container);
      }
    } else {
      this.containerInView = false;
    }
  }
  
  checkContainerInView(containerRect: DOMRect): boolean {
    if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
      if (!this.containerInView) {
        this.initialScrollTop = window.scrollY;
        this.containerInView = true;
      }
      return true;
    }
    return false;
  }
  
  handleScrollDown(container: HTMLElement): void {
    this.isLongArrow = true;
    setTimeout(() => {
      this.isLongArrow = false;
    }, 200);
    this.scrolledEnough = true;
    this.renderer.addClass(container, 'bottom');
  }
  
  handleScrollUp(container: HTMLElement): void {
    this.isLongArrow = true;
    setTimeout(() => {
      this.isLongArrow = false;
    }, 200);
    this.scrolledEnough = false;
    this.renderer.removeClass(container, 'bottom');
  }
}
