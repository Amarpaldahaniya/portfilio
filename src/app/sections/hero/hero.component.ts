import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { GlowingButtonComponent } from '../../shared/components/glowing-button/glowing-button.component';
import { PERSONAL_INFO } from '../../core/constants/portfolio.constants';
import { TerminalWindowComponent } from '../../layout/terminal/terminal-window.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TerminalWindowComponent, GlowingButtonComponent],
  template: `
    <section id="hero" class="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center developer-grid overflow-hidden">
      
      <!-- Background Ambient Glow Gradients -->
      <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7CFFB2]/10 blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#58D5FF]/10 blur-[140px] pointer-events-none"></div>
      <div class="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-[#DD0031]/10 blur-[130px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Headline, Bio & Primary CTAs -->
          <div class="lg:col-span-6 space-y-6">
            
            <!-- Availability Badge -->
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12151C] border border-[#242733] font-mono text-xs text-[#7CFFB2] shadow-lg">
              <span class="w-2.5 h-2.5 rounded-full bg-[#7CFFB2] animate-pulse"></span>
              <span class="font-semibold uppercase tracking-wider">AVAILABLE FOR SENIOR ANGULAR ROLES</span>
            </div>

            <!-- Greeting & Main Headline -->
            <div class="space-y-3">
              <div class="font-mono text-sm md:text-base text-[#58D5FF] font-semibold tracking-wider uppercase flex items-center gap-2">
                <span>HELLO, I'M AMARPAL</span>
                <span class="h-[1px] w-8 bg-[#58D5FF]"></span>
              </div>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F7FA] tracking-tight leading-[1.08]">
                Senior Angular <br>
                <span class="bg-gradient-to-r from-[#7CFFB2] via-[#58D5FF] to-[#F5F7FA] bg-clip-text text-transparent">Frontend Engineer</span>
              </h1>
            </div>

            <!-- Subtitle Statement -->
            <p class="text-base sm:text-lg text-[#8B92A3] max-w-xl font-normal leading-relaxed">
              Specialized in building scalable data-driven web applications, modernizing legacy enterprise frontend architectures (Angular 8 to 17), and driving AI-assisted developer productivity workflows.
            </p>

            <!-- Tech Badges Bar -->
            <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span class="px-3.5 py-1.5 rounded-lg bg-[#12151C] border border-[#7CFFB2]/40 text-[#7CFFB2] font-semibold shadow-[0_0_12px_rgba(124,255,178,0.1)]">
                Angular 8–17
              </span>
              <span class="px-3.5 py-1.5 rounded-lg bg-[#12151C] border border-[#242733] text-[#F5F7FA]">TypeScript</span>
              <span class="px-3.5 py-1.5 rounded-lg bg-[#12151C] border border-[#242733] text-[#58D5FF]">RxJS</span>
              <span class="px-3.5 py-1.5 rounded-lg bg-[#12151C] border border-[#242733] text-[#F5F7FA]">PrimeNG</span>
              <span class="px-3.5 py-1.5 rounded-lg bg-[#12151C] border border-[#242733] text-[#F5F7FA]">REST APIs</span>
              <span class="px-3.5 py-1.5 rounded-lg bg-[#12151C] border border-[#A78BFA]/40 text-[#A78BFA]">AI Workflows</span>
            </div>

            <!-- CTA Action Buttons -->
            <div class="pt-3 flex flex-wrap items-center gap-4">
              <app-glowing-button 
                variant="primary" 
                href="#projects" 
                iconName="arrow-right">
                View Selected Work
              </app-glowing-button>

              <app-glowing-button 
                variant="secondary" 
                [href]="personalInfo.resumeUrl" 
                download="amarpal-resume.pdf"
                iconName="download">
                Download Resume
              </app-glowing-button>
            </div>

            <!-- Key Quick Experience Stats -->
            <div class="pt-6 border-t border-[#242733] grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono">
              <div class="p-3 rounded-xl bg-[#12151C]/60 border border-[#242733]">
                <div class="text-2xl font-extrabold text-[#7CFFB2]">8+ Years</div>
                <div class="text-xs text-[#8B92A3] mt-0.5">IT Experience</div>
              </div>
              <div class="p-3 rounded-xl bg-[#12151C]/60 border border-[#242733]">
                <div class="text-2xl font-extrabold text-[#58D5FF]">4+ Years</div>
                <div class="text-xs text-[#8B92A3] mt-0.5">Frontend Engineering</div>
              </div>
              <div class="p-3 rounded-xl bg-[#12151C]/60 border border-[#242733] col-span-2 sm:col-span-1">
                <div class="text-2xl font-extrabold text-[#F5F7FA]">Ang 8 → 17</div>
                <div class="text-xs text-[#8B92A3] mt-0.5">Framework Migration</div>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Multi-Tab Showcase -->
          <div class="lg:col-span-6">
            
            <!-- Window Frame Container -->
            <div class="rounded-2xl border border-[#242733] bg-[#0D0F14] shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
              
              <!-- Tab Header Bar -->
              <div class="px-4 py-3 bg-[#12151C] border-b border-[#242733] flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
                </div>

                <!-- Tabs switcher -->
                <div class="flex items-center gap-1 bg-[#08090D] p-1 rounded-lg border border-[#242733]">
                  <button 
                    (click)="activeTab.set('code')"
                    class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
                    [ngClass]="activeTab() === 'code' ? 'bg-[#191D26] text-[#7CFFB2] font-semibold' : 'text-[#8B92A3] hover:text-[#F5F7FA]'">
                    Architecture.ts
                  </button>
                  <button 
                    (click)="activeTab.set('terminal')"
                    class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
                    [ngClass]="activeTab() === 'terminal' ? 'bg-[#191D26] text-[#58D5FF] font-semibold' : 'text-[#8B92A3] hover:text-[#F5F7FA]'">
                    Terminal.zsh
                  </button>
                  <button 
                    (click)="activeTab.set('telemetry')"
                    class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
                    [ngClass]="activeTab() === 'telemetry' ? 'bg-[#191D26] text-[#A78BFA] font-semibold' : 'text-[#8B92A3] hover:text-[#F5F7FA]'">
                    Metrics.json
                  </button>
                </div>
              </div>

              <!-- Tab Content Area -->
              <div class="p-5 md:p-6 min-h-[380px] flex flex-col justify-between">
                
                @if (activeTab() === 'code') {
                  <div class="space-y-3 animate-fade-in text-xs md:text-sm">
                    <div class="text-[#535A6C]">// Angular 17 Standalone Architecture & RxJS Pipeline</div>
                    <div class="text-[#F5F7FA]">
                      <span class="text-[#DD0031]">import</span> &#123; Component, signal, inject &#125; <span class="text-[#DD0031]">from</span> <span class="text-[#7CFFB2]">'&#64;angular/core'</span>;<br>
                      <span class="text-[#DD0031]">import</span> &#123; RxJS, map, tap &#125; <span class="text-[#DD0031]">from</span> <span class="text-[#7CFFB2]">'rxjs'</span>;
                    </div>

                    <div class="p-4 rounded-xl bg-[#12151C] border border-[#242733] space-y-2">
                      <div class="text-[#58D5FF] font-semibold">&#64;Component(&#123;</div>
                      <div class="pl-4 text-[#8B92A3]">
                        selector: <span class="text-[#7CFFB2]">'app-fulfillzy-dashboard'</span>,<br>
                        standalone: <span class="text-[#58D5FF]">true</span>,<br>
                        imports: [<span class="text-[#F5F7FA]">PrimeNGTable, ChartModule, RxJS</span>]
                      </div>
                      <div class="text-[#58D5FF] font-semibold">&#125;)</div>
                      <div class="text-[#F5F7FA]">
                        <span class="text-[#DD0031]">export class</span> <span class="text-[#7CFFB2]">FulfillzyDashboard</span> &#123;<br>
                        &nbsp;&nbsp;<span class="text-[#58D5FF]">readonly</span> angularVersion = <span class="text-[#7CFFB2]">signal('17.0.0')</span>;<br>
                        &nbsp;&nbsp;<span class="text-[#58D5FF]">readonly</span> logisticsModules = [<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#7CFFB2]">'Vendor Onboarding'</span>, <span class="text-[#7CFFB2]">'TrackMe Live'</span>, <span class="text-[#7CFFB2]">'Orders API'</span><br>
                        &nbsp;&nbsp;];<br>
                        &#125;
                      </div>
                    </div>

                    <div class="flex items-center justify-between text-[11px] text-[#7CFFB2] pt-2">
                      <span>✓ Strict TypeScript Check Passed</span>
                      <span>100% Signal Reactive</span>
                    </div>
                  </div>
                } @else if (activeTab() === 'terminal') {
                  <app-terminal-window></app-terminal-window>
                } @else {
                  <div class="space-y-4 animate-fade-in text-xs md:text-sm">
                    <div class="text-[#A78BFA] font-bold flex items-center justify-between">
                      <span>ENTERPRISE SYSTEM TELEMETRY</span>
                      <span class="px-2 py-0.5 rounded bg-[#A78BFA]/10 text-[#A78BFA]">STATUS: OPTIMAL</span>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                      <div class="p-3.5 rounded-lg bg-[#12151C] border border-[#242733]">
                        <span class="text-[#8B92A3] block text-[11px]">Primary Framework</span>
                        <span class="text-[#7CFFB2] font-bold text-sm">Angular 17 Standalone</span>
                      </div>
                      <div class="p-3.5 rounded-lg bg-[#12151C] border border-[#242733]">
                        <span class="text-[#8B92A3] block text-[11px]">UI Component Suite</span>
                        <span class="text-[#58D5FF] font-bold text-sm">PrimeNG + Custom SCSS</span>
                      </div>
                      <div class="p-3.5 rounded-lg bg-[#12151C] border border-[#242733]">
                        <span class="text-[#8B92A3] block text-[11px]">Backend API Target</span>
                        <span class="text-[#F5F7FA] font-bold text-sm">Django REST Framework</span>
                      </div>
                      <div class="p-3.5 rounded-lg bg-[#12151C] border border-[#242733]">
                        <span class="text-[#8B92A3] block text-[11px]">AI Certification</span>
                        <span class="text-[#A78BFA] font-bold text-sm">Claude Code Actions</span>
                      </div>
                    </div>

                    <div class="p-3.5 rounded-lg bg-[#12151C] border border-[#242733] space-y-1">
                      <span class="text-[#8B92A3] block text-[11px]">E-Commerce & Logistics Connectors</span>
                      <div class="text-[#7CFFB2] text-xs font-mono">
                        Shopify • Shiprocket • Tally • Canara Spring • Hotellogix
                      </div>
                    </div>
                  </div>
                }

              </div>

              <!-- Window Footer -->
              <div class="px-4 py-2.5 bg-[#12151C] border-t border-[#242733] flex items-center justify-between text-[11px] text-[#8B92A3]">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#7CFFB2]"></span>
                  <span>amarpal&#64;portfolio:~</span>
                </div>
                <span>Angular 17 Build Verified</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class HeroSectionComponent {
  readonly personalInfo = PERSONAL_INFO;
  readonly activeTab = signal<'code' | 'terminal' | 'telemetry'>('code');
}
