import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { PERSONAL_INFO } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="bg-[#08090D] border-t border-[#242733] py-12 md:py-16 text-[#8B92A3] font-sans">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <!-- Column 1: Monogram & Bio -->
          <div class="md:col-span-2 space-y-4">
            <div class="flex items-center gap-2 text-lg font-mono font-bold text-[#F5F7FA]">
              <span class="px-2.5 py-1 rounded bg-[#12151C] border border-[#242733] text-[#7CFFB2]">
                &lt; A /&gt;
              </span>
              <span>AMARPAL<span class="text-[#7CFFB2]">.DEV</span></span>
            </div>

            <p class="text-sm text-[#8B92A3] max-w-md leading-relaxed">
              Senior Angular Developer specializing in enterprise frontend modernization, RxJS state workflows, and AI-assisted engineering.
            </p>

            <div class="flex items-center gap-2 font-mono text-xs text-[#58D5FF]">
              <span>Angular</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>RxJS</span>
              <span>•</span>
              <span>REST APIs</span>
              <span>•</span>
              <span>AI</span>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="space-y-3 font-mono text-xs">
            <h4 class="text-[#F5F7FA] font-semibold uppercase tracking-wider text-xs">Navigation</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="hover:text-[#7CFFB2] transition-colors">01 / About</a></li>
              <li><a href="#skills" class="hover:text-[#7CFFB2] transition-colors">02 / Skills & Tech</a></li>
              <li><a href="#experience" class="hover:text-[#7CFFB2] transition-colors">03 / Experience</a></li>
              <li><a href="#projects" class="hover:text-[#7CFFB2] transition-colors">04 / Selected Work</a></li>
              <li><a href="#ai" class="hover:text-[#7CFFB2] transition-colors">05 / AI x Development</a></li>
              <li><a href="#contact" class="hover:text-[#7CFFB2] transition-colors">06 / Contact</a></li>
            </ul>
          </div>

          <!-- Column 3: Connect & Socials -->
          <div class="space-y-3 font-mono text-xs">
            <h4 class="text-[#F5F7FA] font-semibold uppercase tracking-wider text-xs">Connect</h4>
            <div class="space-y-2.5">
              <a 
                [href]="personalInfo.linkedin" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-2 hover:text-[#58D5FF] transition-colors">
                <lucide-icon name="linkedin" [size]="16" class="text-[#58D5FF]"></lucide-icon>
                <span>LinkedIn</span>
              </a>

              <a 
                [href]="personalInfo.github" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-2 hover:text-[#7CFFB2] transition-colors">
                <lucide-icon name="github" [size]="16" class="text-[#7CFFB2]"></lucide-icon>
                <span>GitHub</span>
              </a>

              <a 
                [href]="'mailto:' + personalInfo.email" 
                class="flex items-center gap-2 hover:text-[#7CFFB2] transition-colors">
                <lucide-icon name="mail" [size]="16" class="text-[#7CFFB2]"></lucide-icon>
                <span>Email Direct</span>
              </a>

              <a 
                [href]="personalInfo.resumeUrl" 
                download="amarpal-resume.pdf"
                class="flex items-center gap-2 hover:text-[#7CFFB2] transition-colors">
                <lucide-icon name="download" [size]="16" class="text-[#7CFFB2]"></lucide-icon>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="pt-8 border-t border-[#242733] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#535A6C]">
          <div>
            &copy; 2026 Amarpal. All rights reserved.
          </div>

          <div class="flex items-center gap-2">
            <span>Built with</span>
            <span class="text-[#DD0031] font-semibold">Angular 20</span>
            <span>&</span>
            <span class="text-[#7CFFB2]">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly personalInfo = PERSONAL_INFO;
}
