import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

export const routes: Routes = [

    { path: '', component: LandingPageComponent },
    { path: 'navigation', component: NavigationComponent },
    { path: 'aboutMe', component: LandingPageComponent }
];
