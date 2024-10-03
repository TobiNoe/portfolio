import { NgClass } from '@angular/common';
import { Component, ElementRef, Input, AfterViewInit, Renderer2, HostListener } from '@angular/core';

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

    // Prüfen, ob der Container 100% im Viewport ist
    if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
      if (!this.containerInView) {
        // Setze die Anfangsposition für den Scrollwert
        this.initialScrollTop = window.scrollY;
        this.containerInView = true;
      }

      const scrollDifference = window.scrollY - this.initialScrollTop;

      // Wenn 50px weiter gescrollt wurde, SVG wechseln und Klasse 'bottom' hinzufügen
      if (scrollDifference >= this.scrollThreshold && !this.scrolledEnough) {
        this.isLongArrow = true;
        setTimeout(() => {
          this.isLongArrow = false;
        }, 200);
        this.scrolledEnough = true;
        this.renderer.addClass(container, 'bottom');
      }
      // Wenn wieder weniger als 50px gescrollt wird, das alte SVG anzeigen
      else if (scrollDifference < this.scrollThreshold && this.scrolledEnough) {
        this.isLongArrow = true;
        setTimeout(() => {
          this.isLongArrow = false;
        }, 200);
        this.scrolledEnough = false;
        this.renderer.removeClass(container, 'bottom');
      }
    } else {
      this.containerInView = false;
    }
  }
}
