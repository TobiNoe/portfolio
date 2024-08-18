import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AnimateArrowComponent } from "./animate-arrow/animate-arrow.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    AnimateArrowComponent,
    MySkillsComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
