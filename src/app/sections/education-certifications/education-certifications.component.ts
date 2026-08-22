import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { EDUCATION_LIST, CERTIFICATIONS } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-education-certifications',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionTitleComponent, ScrollRevealDirective],
  template: `
    <section id="education" class="py-20 md:py-32 bg-[#0A0C10] relative border-t border-[#242733]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <app-section-title 
          number="06" 
          title="ACADEMICS & CERTIFICATIONS" 
          subtitle="Formal computer applications degrees & professional AI credentials">
        </app-section-title>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8" appScrollReveal>
          
          <!-- Column 1: Academic Degrees -->
          <div class="lg:col-span-7 space-y-4">
            <h3 class="text-lg font-bold text-[#F5F7FA] font-mono flex items-center gap-2 mb-4">
              <lucide-icon name="graduation-cap" [size]="20" class="text-[#58D5FF]"></lucide-icon>
              <span>FORMAL EDUCATION</span>
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              @for (edu of educationList; track edu.id) {
                <div class="p-5 rounded-xl bg-[#12151C] border border-[#242733] hover:border-[#58D5FF]/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                      <span class="text-xs font-mono px-2.5 py-0.5 rounded bg-[#101218] border border-[#242733] text-[#58D5FF]">
                        {{ edu.year }}
                      </span>
                      <span class="text-[11px] font-mono text-[#8B92A3]">{{ edu.location }}</span>
                    </div>

                    <h4 class="font-bold text-[#F5F7FA] text-base mb-1">{{ edu.degree }}</h4>
                    <p class="text-xs text-[#7CFFB2] font-mono mb-2">{{ edu.institution }}</p>
                    <p class="text-xs text-[#8B92A3] leading-relaxed">{{ edu.description }}</p>
                  </div>

                  <div class="mt-4 pt-3 border-t border-[#242733] flex items-center gap-2 text-[11px] font-mono text-[#535A6C]">
                    <lucide-icon name="book-open" [size]="12"></lucide-icon>
                    <span>MDU Accredited</span>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Column 2: Certifications -->
          <div class="lg:col-span-5 space-y-4">
            <h3 class="text-lg font-bold text-[#F5F7FA] font-mono flex items-center gap-2 mb-4">
              <lucide-icon name="award" [size]="20" class="text-[#7CFFB2]"></lucide-icon>
              <span>AI & TECHNICAL CREDENTIALS</span>
            </h3>

            <div class="space-y-4">
              @for (cert of certifications; track cert.id) {
                <div class="p-5 rounded-xl bg-[#12151C] border border-[#242733] hover:border-[#7CFFB2]/40 transition-colors flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-[#7CFFB2]/10 border border-[#7CFFB2]/30 flex items-center justify-center text-[#7CFFB2] shrink-0 mt-1">
                    <lucide-icon [name]="cert.iconName" [size]="20"></lucide-icon>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between gap-2">
                      <h4 class="font-bold text-[#F5F7FA] text-base">{{ cert.name }}</h4>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101218] text-[#7CFFB2] border border-[#7CFFB2]/20">
                        {{ cert.badgeText }}
                      </span>
                    </div>
                    <p class="text-xs font-mono text-[#58D5FF] mb-1">{{ cert.issuer }}</p>
                    <p class="text-xs text-[#8B92A3] leading-relaxed">{{ cert.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class EducationCertificationsSectionComponent {
  readonly educationList = EDUCATION_LIST;
  readonly certifications = CERTIFICATIONS;
}
