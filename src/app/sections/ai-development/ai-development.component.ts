import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CERTIFICATIONS, AI_WORKFLOW_NODES } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-ai-development',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionTitleComponent, TechBadgeComponent, ScrollRevealDirective],
  template: `
    <section id="ai" class="py-20 md:py-32 bg-[#08090D] relative border-t border-[#242733]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <app-section-title 
          number="05" 
          title="AI × DEVELOPMENT" 
          subtitle="Leveraging agentic AI tools & Anthropic Claude workflows to supercharge frontend engineering">
        </app-section-title>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" appScrollReveal>
          
          <!-- Left Side: Interactive AI Tree / Connection Visual -->
          <div class="lg:col-span-6 p-6 md:p-8 rounded-2xl bg-[#12151C] border border-[#242733] relative overflow-hidden">
            <div class="absolute top-0 right-0 w-40 h-40 bg-[#A78BFA]/10 rounded-bl-full pointer-events-none"></div>

            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-center text-[#A78BFA]">
                <lucide-icon name="sparkles" [size]="22"></lucide-icon>
              </div>
              <div>
                <h3 class="text-xl font-bold text-[#F5F7FA]">AI Engineering Architecture</h3>
                <span class="text-xs font-mono text-[#A78BFA]">Agentic Developer Workflow</span>
              </div>
            </div>

            <!-- Visual Flow Tree -->
            <div class="p-4 rounded-xl bg-[#0D0F14] border border-[#242733] font-mono text-xs space-y-3">
              <div class="text-[#7CFFB2] font-bold flex items-center gap-2">
                <lucide-icon name="brain" [size]="16" class="text-[#A78BFA]"></lucide-icon>
                <span>AI ASSISTED FRONTEND WORKFLOW</span>
              </div>

              <div class="pl-4 space-y-2 text-[#8B92A3] border-l border-[#242733]">
                @for (node of nodes; track node.id) {
                  <div class="flex items-start gap-2 group hover:text-[#F5F7FA] transition-colors">
                    <span class="text-[#A78BFA]">├──</span>
                    <div>
                      <span class="text-[#F5F7FA] font-semibold">{{ node.title }}:</span>
                      <span class="text-xs text-[#8B92A3] ml-1">{{ node.description }}</span>
                    </div>
                  </div>
                }
              </div>
            </div>

            <p class="mt-6 text-xs md:text-sm text-[#8B92A3] leading-relaxed">
              I integrate Anthropic Claude and Claude Code CLI tools into daily engineering workflows to accelerate component refactoring, trace legacy dependencies, and ensure strict TypeScript type safety across large enterprise codebases.
            </p>
          </div>

          <!-- Right Side: AI Certifications & Tool Badges -->
          <div class="lg:col-span-6 space-y-4">
            
            <h3 class="text-lg font-bold text-[#F5F7FA] font-mono flex items-center gap-2">
              <lucide-icon name="award" [size]="18" class="text-[#7CFFB2]"></lucide-icon>
              <span>ANTHROPIC CLAUDE CERTIFICATIONS</span>
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              @for (cert of certs; track cert.id) {
                <div class="p-5 rounded-xl bg-[#12151C] border border-[#242733] hover:border-[#A78BFA]/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div class="w-8 h-8 rounded-lg bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-center text-[#A78BFA] mb-3">
                      <lucide-icon [name]="cert.iconName" [size]="18"></lucide-icon>
                    </div>
                    <h4 class="font-bold text-[#F5F7FA] text-sm mb-1">{{ cert.name }}</h4>
                    <p class="text-[11px] text-[#8B92A3] leading-snug">{{ cert.description }}</p>
                  </div>

                  <div class="mt-4 pt-3 border-t border-[#242733] flex items-center justify-between">
                    <span class="text-[10px] font-mono text-[#A78BFA] px-2 py-0.5 rounded bg-[#101218]">
                      {{ cert.badgeText }}
                    </span>
                    <lucide-icon name="check-circle-2" [size]="14" class="text-[#7CFFB2]"></lucide-icon>
                  </div>
                </div>
              }
            </div>

            <!-- Skill Badges -->
            <div class="p-5 rounded-xl bg-[#101218] border border-[#242733] space-y-3">
              <span class="text-xs font-mono text-[#8B92A3] block uppercase tracking-wider">AI Capabilities & Tools</span>
              <div class="flex flex-wrap gap-2">
                <app-tech-badge name="Claude" tag="AI" [isPrimary]="true"></app-tech-badge>
                <app-tech-badge name="Claude Code CLI" tag="AI" [isPrimary]="true"></app-tech-badge>
                <app-tech-badge name="Claude Code Actions" tag="AI" [isPrimary]="true"></app-tech-badge>
                <app-tech-badge name="AI Chat Integration" [isPrimary]="false"></app-tech-badge>
                <app-tech-badge name="AI-Assisted Development" [isPrimary]="false"></app-tech-badge>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class AiDevelopmentSectionComponent {
  readonly certs = CERTIFICATIONS;
  readonly nodes = AI_WORKFLOW_NODES;
}
