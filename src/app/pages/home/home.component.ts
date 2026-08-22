import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroSectionComponent } from '../../sections/hero/hero.component';
import { AboutSectionComponent } from '../../sections/about/about.component';
import { SkillsSectionComponent } from '../../sections/skills/skills.component';
import { ExperienceSectionComponent } from '../../sections/experience/experience.component';
import { ProjectsSectionComponent } from '../../sections/projects/projects.component';
import { AiDevelopmentSectionComponent } from '../../sections/ai-development/ai-development.component';
import { EducationCertificationsSectionComponent } from '../../sections/education-certifications/education-certifications.component';
import { ContactSectionComponent } from '../../sections/contact/contact.component';
import { CommandPaletteComponent } from '../../shared/components/command-palette/command-palette.component';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    AiDevelopmentSectionComponent,
    EducationCertificationsSectionComponent,
    ContactSectionComponent,
    CommandPaletteComponent,
    ProjectModalComponent
  ],
  template: `
    <div class="min-h-screen bg-[#08090D] text-[#F5F7FA] relative flex flex-col justify-between">
      
      <!-- Top Sticky Navbar -->
      <app-navbar></app-navbar>

      <!-- Main Page Flow -->
      <main class="flex-grow">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-ai-development></app-ai-development>
        <app-education-certifications></app-education-certifications>
        <app-contact></app-contact>
      </main>

      <!-- Footer -->
      <app-footer></app-footer>

      <!-- Global Command Palette (Ctrl + K) -->
      <app-command-palette></app-command-palette>

      <!-- Global Case Study Modal -->
      <app-project-modal></app-project-modal>

    </div>
  `
})
export class HomeComponent {}
