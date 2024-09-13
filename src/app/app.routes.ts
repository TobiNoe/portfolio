import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'navigation', component: NavigationComponent },
    { path: 'home', component: LandingPageComponent },
    { path: 'legal', component: LegalNoticeComponent }
];