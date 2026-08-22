import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PROJECTS } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ProjectCardComponent, ScrollRevealDirective],
  template: `
    <section id="projects" class="py-20 md:py-32 bg-[#0A0C10] relative border-t border-[#242733]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Title -->
        <app-section-title 
          number="04" 
          title="SELECTED WORK" 
          subtitle="Featured enterprise frontend engineering & framework modernization projects">
        </app-section-title>

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" appScrollReveal>
          @for (project of projects; track project.id) {
            <app-project-card [project]="project"></app-project-card>
          }
        </div>

      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  readonly projects = PROJECTS;
}
