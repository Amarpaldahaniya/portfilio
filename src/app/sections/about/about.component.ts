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
  template: `
    <section id="about" class="py-20 md:py-32 bg-[#08090D] relative border-t border-[#242733]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <app-section-title 
          number="01" 
          title="ABOUT" 
          subtitle="Engineering profile & enterprise frontend architecture focus">
        </app-section-title>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" appScrollReveal>
          
          <!-- Left Column: Core Engineering Statement & Focus Grid -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Main Hero Bio Card -->
            <div class="p-6 md:p-8 rounded-2xl bg-[#12151C] border border-[#242733] relative overflow-hidden shadow-2xl">
              <div class="absolute top-0 right-0 w-40 h-40 bg-[#7CFFB2]/5 rounded-bl-full pointer-events-none"></div>
              
              <h3 class="text-xl md:text-2xl font-bold text-[#F5F7FA] mb-4 leading-snug">
                Senior Angular Developer focused on building <span class="text-[#7CFFB2]">scalable</span>, <span class="text-[#58D5FF]">maintainable</span>, and <span class="text-[#F5F7FA]">data-driven enterprise</span> web applications.
              </h3>

              <div class="space-y-4 text-sm md:text-base text-[#8B92A3] leading-relaxed">
                @for (paragraph of personalInfo.bio; track paragraph) {
                  <p>{{ paragraph }}</p>
                }
              </div>
            </div>

            <!-- Professional Focus 6-Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs md:text-sm">
              @for (item of focusItems; track item.title) {
                <div class="p-5 rounded-xl bg-[#12151C] border border-[#242733] hover:border-[#7CFFB2]/40 hover:bg-[#151922] transition-all flex items-start gap-3.5 group">
                  <div class="p-2.5 rounded-lg bg-[#101218] border border-[#242733] text-[#7CFFB2] group-hover:border-[#7CFFB2]/50 group-hover:bg-[#7CFFB2]/10 transition-colors shrink-0">
                    <lucide-icon [name]="item.icon" [size]="20"></lucide-icon>
                  </div>
                  <div>
                    <h4 class="font-bold text-[#F5F7FA] mb-1 group-hover:text-[#7CFFB2] transition-colors">{{ item.title }}</h4>
                    <p class="text-xs text-[#8B92A3] leading-normal">{{ item.desc }}</p>
                  </div>
                </div>
              }
            </div>

          </div>

          <!-- Right Column: 4 Key Metrics Cards & System Profile -->
          <div class="lg:col-span-5 space-y-5">
            
            <!-- Metric Cards 2x2 Grid -->
            <div class="grid grid-cols-2 gap-4">
              
              <!-- Metric 1 -->
              <div class="p-6 rounded-2xl bg-[#12151C] border border-[#242733] text-center hover:border-[#7CFFB2]/40 transition-all hover:shadow-[0_0_20px_rgba(124,255,178,0.15)] relative overflow-hidden group">
                <div class="text-3xl md:text-4xl font-extrabold text-[#7CFFB2] font-mono mb-1 group-hover:scale-105 transition-transform">8+ Years</div>
                <div class="text-xs md:text-sm font-bold text-[#F5F7FA]">IT Experience</div>
                <div class="text-[11px] font-mono text-[#8B92A3] mt-1">Infrastructure & Systems</div>
              </div>

              <!-- Metric 2 -->
              <div class="p-6 rounded-2xl bg-[#12151C] border border-[#242733] text-center hover:border-[#58D5FF]/40 transition-all hover:shadow-[0_0_20px_rgba(88,213,255,0.15)] relative overflow-hidden group">
                <div class="text-3xl md:text-4xl font-extrabold text-[#58D5FF] font-mono mb-1 group-hover:scale-105 transition-transform">4+ Years</div>
                <div class="text-xs md:text-sm font-bold text-[#F5F7FA]">Frontend Dev</div>
                <div class="text-[11px] font-mono text-[#8B92A3] mt-1">Angular Applications</div>
              </div>

              <!-- Metric 3 -->
              <div class="p-6 rounded-2xl bg-[#12151C] border border-[#242733] text-center hover:border-[#F5F7FA]/40 transition-all hover:shadow-[0_0_20px_rgba(245,247,250,0.15)] relative overflow-hidden group">
                <div class="text-3xl md:text-4xl font-extrabold text-[#F5F7FA] font-mono mb-1 group-hover:scale-105 transition-transform">8 → 17</div>
                <div class="text-xs md:text-sm font-bold text-[#F5F7FA]">Angular Modernization</div>
                <div class="text-[11px] font-mono text-[#8B92A3] mt-1">Standalone Upgrade</div>
              </div>

              <!-- Metric 4 -->
              <div class="p-6 rounded-2xl bg-[#12151C] border border-[#242733] text-center hover:border-[#A78BFA]/40 transition-all hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] relative overflow-hidden group">
                <div class="text-3xl md:text-4xl font-extrabold text-[#A78BFA] font-mono mb-1 group-hover:scale-105 transition-transform">Enterprise</div>
                <div class="text-xs md:text-sm font-bold text-[#F5F7FA]">Applications</div>
                <div class="text-[11px] font-mono text-[#8B92A3] mt-1">Logistics & Finance</div>
              </div>

            </div>

            <!-- Profile Summary Widget -->
            <div class="p-5 rounded-2xl bg-[#101218] border border-[#242733] space-y-3 font-mono text-xs shadow-xl">
              <div class="text-[#7CFFB2] flex items-center justify-between font-bold">
                <span class="flex items-center gap-2">
                  <lucide-icon name="user" [size]="14"></lucide-icon>
                  <span>ENGINEER SPECIFICATION</span>
                </span>
                <span class="px-2 py-0.5 rounded bg-[#7CFFB2]/10 text-[#7CFFB2] text-[10px]">VERIFIED</span>
              </div>

              <div class="space-y-2 text-[#8B92A3] pt-1">
                <div class="flex justify-between py-1 border-b border-[#242733]/50">
                  <span>Current Company:</span>
                  <span class="text-[#F5F7FA] font-semibold">Purple Drone Supply Chain</span>
                </div>
                <div class="flex justify-between py-1 border-b border-[#242733]/50">
                  <span>Previous Company:</span>
                  <span class="text-[#F5F7FA] font-semibold">HostBooks Limited</span>
                </div>
                <div class="flex justify-between py-1 border-b border-[#242733]/50">
                  <span>Location:</span>
                  <span class="text-[#58D5FF] font-semibold">Gurgaon, Haryana, India</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>AI Credentials:</span>
                  <span class="text-[#A78BFA] font-semibold">Claude Code Actions Certified</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
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
