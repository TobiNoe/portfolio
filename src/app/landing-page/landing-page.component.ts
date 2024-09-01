import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AnimateArrowComponent } from "./animate-arrow/animate-arrow.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { ReferencesComponent } from './references/references.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutMeComponent,
    AnimateArrowComponent,
    MySkillsComponent,
    ReferencesComponent,
    PortfolioComponent,
    NgClass
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  pageViewToggled = true;

  togglePageView(toggled: boolean) {
    this.pageViewToggled = !this.pageViewToggled;
    console.log('pageViewToggled :>> ', this.pageViewToggled);
  }
  }
