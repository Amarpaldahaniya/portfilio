import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Project } from '../../../core/models/project.model';
import { TechBadgeComponent } from '../tech-badge/tech-badge.component';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TechBadgeComponent],
  template: `
    <div 
      (click)="themeService.openProjectModal(project())"
      class="group relative rounded-2xl border border-[#242733] bg-[#12151C] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#7CFFB2]/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(124,255,178,0.15)] cursor-pointer">
      
      <!-- Top Card Visual Graphic Preview Header -->
      <div class="h-44 bg-[#0D0F14] border-b border-[#242733] relative p-4 flex flex-col justify-between overflow-hidden group-hover:bg-[#10131A] transition-colors">
        
        <!-- Subtle Grid & Radial Glow -->
        <div class="absolute inset-0 developer-grid opacity-30 pointer-events-none"></div>
        <div class="absolute top-0 right-0 w-36 h-36 bg-[#7CFFB2]/10 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Header Category Badge & Icon -->
        <div class="flex items-center justify-between relative z-10">
          <div class="w-11 h-11 rounded-xl bg-[#12151C] border border-[#242733] flex items-center justify-center text-[#7CFFB2] group-hover:border-[#7CFFB2]/60 group-hover:bg-[#7CFFB2]/15 transition-all shadow-md">
            <lucide-icon [name]="project().iconName" [size]="22"></lucide-icon>
          </div>
          <span class="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-[#12151C]/90 border border-[#242733] text-[#58D5FF] backdrop-blur-md">
            {{ project().category }}
          </span>
        </div>

        <!-- Simulated App UI Snippet Graphic -->
        <div class="relative z-10 p-3 rounded-lg bg-[#12151C]/90 border border-[#242733] font-mono text-[11px] space-y-1.5 backdrop-blur-md group-hover:border-[#7CFFB2]/30 transition-colors">
          @if (project().id === 'fulfillzy') {
            <div class="flex items-center justify-between text-[#7CFFB2]">
              <span>FULFILLZY // v17.0</span>
              <span class="text-[10px] text-[#58D5FF]">● LIVE LOGISTICS</span>
            </div>
            <div class="flex items-center gap-2 text-[#8B92A3]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#7CFFB2]"></span>
              <span class="truncate">TrackMe Shipment Monitor & Onboarding</span>
            </div>
          } @else if (project().id === 'data-prep-tool') {
            <div class="flex items-center justify-between text-[#58D5FF]">
              <span>DATA PIPELINE // ETL</span>
              <span class="text-[10px] text-[#7CFFB2]">Tableau-Prep Style</span>
            </div>
            <div class="flex items-center gap-2 text-[#8B92A3]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#58D5FF]"></span>
              <span class="truncate">Visual Node Validation & Transformation</span>
            </div>
          } @else {
            <div class="flex items-center justify-between text-[#A78BFA]">
              <span>API INTEGRATIONS // SUITE</span>
              <span class="text-[10px] text-[#58D5FF]">5 Connectors</span>
            </div>
            <div class="flex items-center gap-2 text-[#8B92A3]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></span>
              <span class="truncate">Shopify • Tally • Shiprocket • Hotellogix</span>
            </div>
          }
        </div>

      </div>

      <!-- Main Body Content -->
      <div class="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
        
        <div>
          <!-- Title & Tagline -->
          <h3 class="text-xl md:text-2xl font-bold text-[#F5F7FA] group-hover:text-[#7CFFB2] transition-colors duration-200 mb-1.5">
            {{ project().name }}
          </h3>
          <p class="text-xs font-mono text-[#58D5FF] mb-3">
            {{ project().tagline }}
          </p>

          <!-- Description -->
          <p class="text-sm text-[#8B92A3] leading-relaxed mb-5">
            {{ project().description }}
          </p>

          <!-- Feature Bullets -->
          <ul class="space-y-2 mb-4">
            @for (feature of project().features.slice(0, 3); track feature) {
              <li class="flex items-center gap-2 text-xs text-[#F5F7FA]">
                <lucide-icon name="check-circle-2" [size]="14" class="text-[#7CFFB2] shrink-0"></lucide-icon>
                <span>{{ feature }}</span>
              </li>
            }
          </ul>
        </div>

        <!-- Footer: Tech Tags & CTA -->
        <div class="pt-5 border-t border-[#242733] flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap gap-1.5">
            @for (tech of project().technologies.slice(0, 4); track tech) {
              <app-tech-badge [name]="tech"></app-tech-badge>
            }
          </div>

          <div class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#7CFFB2] group-hover:translate-x-1 transition-transform duration-200">
            <span>Read Case Study</span>
            <lucide-icon name="arrow-right" [size]="14"></lucide-icon>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly themeService = inject(ThemeService);
}
