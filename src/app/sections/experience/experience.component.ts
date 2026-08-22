import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { EXPERIENCES } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionTitleComponent, TechBadgeComponent, ScrollRevealDirective],
  template: `
    <section id="experience" class="py-20 md:py-32 bg-[#08090D] relative border-t border-[#242733]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <app-section-title 
          number="03" 
          title="EXPERIENCE" 
          subtitle="Git-commit style professional career history">
        </app-section-title>

        <!-- Git Timeline Wrapper -->
        <div class="relative pl-6 md:pl-10 space-y-12" appScrollReveal>
          
          <!-- Git Vertical Line -->
          <div class="absolute left-3 md:left-5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#7CFFB2] via-[#58D5FF] to-[#242733]"></div>

          @for (exp of experiences; track exp.id) {
            <div class="relative group">
              
              <!-- Commit Node Bullet -->
              <div 
                class="absolute -left-[27px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#12151C] border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125 z-10"
                [ngClass]="{
                  'border-[#7CFFB2] text-[#7CFFB2] shadow-[0_0_15px_rgba(124,255,178,0.4)]': exp.isCurrent,
                  'border-[#58D5FF] text-[#58D5FF]': !exp.isCurrent
                }">
                <div class="w-2 h-2 rounded-full" [ngClass]="exp.isCurrent ? 'bg-[#7CFFB2] animate-ping' : 'bg-[#58D5FF]'"></div>
              </div>

              <!-- Main Experience Card -->
              <div class="p-6 md:p-8 rounded-2xl bg-[#12151C] border border-[#242733] hover:border-[#7CFFB2]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                
                <!-- Card Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <div class="flex items-center gap-3">
                      <h3 class="text-xl md:text-2xl font-bold text-[#F5F7FA] group-hover:text-[#7CFFB2] transition-colors">
                        {{ exp.role }}
                      </h3>
                      @if (exp.isCurrent) {
                        <span class="px-2.5 py-0.5 rounded-full bg-[#7CFFB2]/10 border border-[#7CFFB2]/30 text-[#7CFFB2] font-mono text-[11px] font-semibold">
                          PRESENT ROLE
                        </span>
                      }
                    </div>

                    <div class="text-base font-semibold text-[#58D5FF] flex items-center gap-2 mt-1">
                      <lucide-icon name="briefcase" [size]="16"></lucide-icon>
                      <span>{{ exp.company }}</span>
                      <span class="text-[#8B92A3] font-normal">•</span>
                      <span class="text-xs font-mono text-[#8B92A3] flex items-center gap-1">
                        <lucide-icon name="map-pin" [size]="12"></lucide-icon>
                        {{ exp.location }}
                      </span>
                    </div>
                  </div>

                  <!-- Date Tag -->
                  <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#101218] border border-[#242733] font-mono text-xs text-[#7CFFB2] shrink-0">
                    <lucide-icon name="code" [size]="14"></lucide-icon>
                    <span>{{ exp.period }}</span>
                  </div>
                </div>

                <!-- Highlights Pills -->
                @if (exp.highlights && exp.highlights.length) {
                  <div class="flex flex-wrap gap-2 mb-4">
                    @for (hl of exp.highlights; track hl) {
                      <span class="px-2.5 py-1 rounded bg-[#7CFFB2]/5 border border-[#7CFFB2]/20 font-mono text-xs text-[#7CFFB2]">
                        ★ {{ hl }}
                      </span>
                    }
                  </div>
                }

                <!-- Bullet Responsibilities -->
                <ul class="space-y-2.5 mb-6 text-sm text-[#8B92A3] leading-relaxed">
                  @for (resp of exp.responsibilities; track resp) {
                    <li class="flex items-start gap-2.5">
                      <span class="text-[#7CFFB2] font-mono mt-0.5">&gt;</span>
                      <span class="text-[#F5F7FA]">{{ resp }}</span>
                    </li>
                  }
                </ul>

                <!-- Technologies Used Footer -->
                <div class="pt-4 border-t border-[#242733] flex flex-wrap items-center gap-2">
                  <span class="text-xs font-mono text-[#8B92A3] mr-2">Technologies:</span>
                  @for (tech of exp.technologies; track tech) {
                    <app-tech-badge [name]="tech" [isPrimary]="tech.includes('Angular')"></app-tech-badge>
                  }
                </div>

              </div>

            </div>
          }

        </div>

      </div>
    </section>
  `
})
export class ExperienceSectionComponent {
  readonly experiences = EXPERIENCES;
}
