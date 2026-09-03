import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PERSONAL_INFO } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionTitleComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutSectionComponent {
  readonly personalInfo = PERSONAL_INFO;

  readonly focusItems = [
    { title: 'Angular Modernization', desc: 'Upgrading legacy Angular 12 apps to Angular 17 standalone components.', icon: 'code-2' },
    { title: 'RxJS & Data Streams', desc: 'Designing reactive data architectures for real-time dashboards.', icon: 'workflow' },
    { title: 'REST API Integration', desc: 'Connecting complex backend payloads & third-party endpoints.', icon: 'layers' },
    { title: 'Dashboard & Visuals', desc: 'Building data prep tools & supply chain telemetry screens.', icon: 'database' },
    { title: 'UI Component Systems', desc: 'Developing clean, reusable UI modules with PrimeNG & SCSS.', icon: 'box' },
    { title: 'AI-Assisted Workflow', desc: 'Accelerating frontend delivery using Claude & agentic tools.', icon: 'sparkles' }
  ];
}
