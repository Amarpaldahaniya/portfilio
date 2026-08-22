import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'skills', component: HomeComponent },
  { path: 'experience', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'ai', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
