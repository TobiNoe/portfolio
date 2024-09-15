import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [

    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LandingPageComponent
    },
    { path: 'legal', component: LegalNoticeComponent }
];