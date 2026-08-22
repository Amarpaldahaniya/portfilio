import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ThemeService } from '../../../core/services/theme.service';
import { TechBadgeComponent } from '../tech-badge/tech-badge.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TechBadgeComponent],
  template: `
    @if (themeService.selectedProjectForModal(); as project) {
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 z-50 bg-[#08090D]/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in"
        (click)="themeService.closeProjectModal()">
        
        <!-- Modal Card -->
        <div 
          class="relative w-full max-w-4xl bg-[#12151C] border border-[#242733] rounded-2xl shadow-2xl overflow-hidden my-8"
          (click)="$event.stopPropagation()">
          
          <!-- Header Bar -->
          <div class="px-6 py-5 bg-[#101218] border-b border-[#242733] flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-[#08090D] border border-[#242733] flex items-center justify-center text-[#7CFFB2]">
                <lucide-icon [name]="project.iconName" [size]="20"></lucide-icon>
              </div>
              <div>
                <span class="text-xs font-mono text-[#58D5FF]">{{ project.category }}</span>
                <h3 class="text-xl md:text-2xl font-bold text-[#F5F7FA]">{{ project.name }}</h3>
              </div>
            </div>

            <button 
              (click)="themeService.closeProjectModal()"
              class="w-8 h-8 rounded-lg bg-[#191D26] border border-[#242733] flex items-center justify-center text-[#8B92A3] hover:text-[#F5F7FA] hover:border-[#7CFFB2]/50 transition-colors">
              <lucide-icon name="x" [size]="18"></lucide-icon>
            </button>
          </div>

          <!-- Body Content -->
          <div class="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-8 custom-scroll font-sans text-sm md:text-base text-[#8B92A3]">
            
            <!-- Tagline & Tech Stack -->
            <div>
              <p class="text-base md:text-lg text-[#F5F7FA] font-medium leading-relaxed mb-4">
                {{ project.tagline }}
              </p>
              <div class="flex flex-wrap gap-2">
                @for (tech of project.technologies; track tech) {
                  <app-tech-badge [name]="tech" [isPrimary]="true"></app-tech-badge>
                }
              </div>
            </div>

            <!-- Overview & Problem -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-5 rounded-xl bg-[#101218] border border-[#242733]">
                <h4 class="text-xs font-mono text-[#7CFFB2] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <lucide-icon name="file-text" [size]="14"></lucide-icon>
                  Overview
                </h4>
                <p class="text-sm leading-relaxed text-[#F5F7FA]">
                  {{ project.caseStudy.overview }}
                </p>
              </div>

              <div class="p-5 rounded-xl bg-[#101218] border border-[#242733]">
                <h4 class="text-xs font-mono text-[#DD0031] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <lucide-icon name="code" [size]="14"></lucide-icon>
                  Problem & Legacy Challenges
                </h4>
                <p class="text-sm leading-relaxed text-[#F5F7FA]">
                  {{ project.caseStudy.problem }}
                </p>
              </div>
            </div>

            <!-- Engineering Solution -->
            <div class="p-6 rounded-xl bg-[#101218] border border-[#242733]">
              <h4 class="text-xs font-mono text-[#58D5FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                <lucide-icon name="cpu" [size]="14"></lucide-icon>
                Architectural Solution
              </h4>
              <p class="text-sm leading-relaxed text-[#F5F7FA] mb-4">
                {{ project.caseStudy.solution }}
              </p>
              <div class="p-4 rounded-lg bg-[#08090D] border border-[#242733] font-mono text-xs text-[#7CFFB2]">
                <span class="text-[#8B92A3]">Architecture Pattern:</span> {{ project.caseStudy.architecture }}
              </div>
            </div>

            <!-- Key Contributions -->
            <div>
              <h4 class="text-xs font-mono text-[#7CFFB2] uppercase tracking-wider mb-3 flex items-center gap-2">
                <lucide-icon name="check-circle-2" [size]="14"></lucide-icon>
                Key Engineering Contributions
              </h4>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                @for (contrib of project.caseStudy.keyContributions; track contrib) {
                  <li class="p-3.5 rounded-lg bg-[#101218] border border-[#242733] flex items-start gap-2.5 text-xs md:text-sm text-[#F5F7FA]">
                    <span class="text-[#7CFFB2] mt-0.5">•</span>
                    <span>{{ contrib }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Outcome -->
            <div class="p-5 rounded-xl bg-[#7CFFB2]/5 border border-[#7CFFB2]/20">
              <h4 class="text-xs font-mono text-[#7CFFB2] uppercase tracking-wider mb-2 flex items-center gap-2">
                <lucide-icon name="sparkles" [size]="14"></lucide-icon>
                Project Outcome
              </h4>
              <p class="text-sm text-[#F5F7FA] leading-relaxed">
                {{ project.caseStudy.outcome }}
              </p>
            </div>

          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 bg-[#101218] border-t border-[#242733] flex justify-end">
            <button 
              (click)="themeService.closeProjectModal()"
              class="px-5 py-2 rounded-lg bg-[#191D26] border border-[#242733] text-xs font-mono text-[#F5F7FA] hover:border-[#7CFFB2]/50 transition-colors">
              Close Case Study
            </button>
          </div>

        </div>
      </div>
    }
  `
})
export class ProjectModalComponent {
  readonly themeService = inject(ThemeService);
}
