import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

interface TerminalLine {
  type: 'command' | 'output' | 'system' | 'error';
  text: string;
}

@Component({
  selector: 'app-terminal-window',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <div class="rounded-xl border border-[#242733] bg-[#0D0F14] overflow-hidden shadow-2xl font-mono text-xs md:text-sm">
      <!-- Terminal Header -->
      <div class="px-4 py-3 bg-[#12151C] border-b border-[#242733] flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
        </div>
        <div class="text-[#8B92A3] text-xs flex items-center gap-2 font-medium">
          <lucide-icon name="terminal" [size]="14" class="text-[#7CFFB2]"></lucide-icon>
          <span>amarpal&#64;portfolio:~</span>
        </div>
        <div class="text-[10px] text-[#535A6C] uppercase tracking-wider hidden sm:block">zsh</div>
      </div>

      <!-- Terminal Body -->
      <div class="p-4 md:p-6 space-y-3 min-h-[300px] max-h-[420px] overflow-y-auto custom-scroll">
        @for (line of lines(); track $index) {
          @if (line.type === 'command') {
            <div class="flex items-center gap-2 text-[#7CFFB2]">
              <span class="text-[#58D5FF] font-bold">$</span>
              <span>{{ line.text }}</span>
            </div>
          } @else if (line.type === 'error') {
            <div class="text-[#DD0031] pl-4 border-l-2 border-[#DD0031]/50">
              {{ line.text }}
            </div>
          } @else if (line.type === 'system') {
            <div class="text-[#58D5FF] font-semibold">
              {{ line.text }}
            </div>
          } @else {
            <div class="text-[#F5F7FA] pl-4 whitespace-pre-line leading-relaxed">
              {{ line.text }}
            </div>
          }
        }

        <!-- Active Input Line -->
        <form (ngSubmit)="executeCommand()" class="flex items-center gap-2 pt-2 border-t border-[#242733]/50">
          <span class="text-[#58D5FF] font-bold">$</span>
          <input 
            type="text" 
            [(ngModel)]="userInput" 
            name="cmdInput" 
            placeholder="Type 'help' for commands..."
            autocomplete="off"
            class="flex-1 bg-transparent text-[#F5F7FA] focus:outline-none placeholder:text-[#535A6C] text-xs md:text-sm"
          />
          <span class="w-2 h-4 bg-[#7CFFB2] animate-caret inline-block"></span>
        </form>
      </div>
    </div>
  `
})
export class TerminalWindowComponent implements OnInit {
  userInput = '';
  readonly lines = signal<TerminalLine[]>([]);

  ngOnInit(): void {
    this.runInitialSequence();
  }

  private runInitialSequence(): void {
    const initialHistory: TerminalLine[] = [
      { type: 'command', text: 'whoami' },
      { type: 'output', text: 'Amarpal' },
      { type: 'command', text: 'role' },
      { type: 'output', text: 'Senior Angular Developer' },
      { type: 'command', text: 'experience' },
      { type: 'output', text: '8+ years IT  |  4+ years frontend development' },
      { type: 'command', text: 'stack' },
      { type: 'output', text: 'Angular 8-17  •  TypeScript  •  RxJS  •  PrimeNG  •  REST APIs' },
      { type: 'command', text: 'status' },
      { type: 'system', text: '● Available for senior engineering opportunities' }
    ];

    let delay = 150;
    initialHistory.forEach((item, index) => {
      setTimeout(() => {
        this.lines.update(prev => [...prev, item]);
      }, delay * (index + 1));
    });
  }

  executeCommand(): void {
    const rawCmd = this.userInput.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    this.lines.update(prev => [...prev, { type: 'command', text: rawCmd }]);
    this.userInput = '';

    switch (cmd) {
      case 'help':
        this.lines.update(prev => [
          ...prev,
          {
            type: 'output',
            text: `Available CLI Commands:\n  whoami      - Display identity\n  role        - Current title & focus\n  experience  - Years in IT & Frontend\n  stack       - Core tech stack\n  projects    - View featured engineering projects\n  skills      - Full tech skills breakdown\n  contact     - Reach out directly\n  clear       - Clear terminal screen`
          }
        ]);
        break;

      case 'whoami':
        this.lines.update(prev => [...prev, { type: 'output', text: 'Amarpal — Senior Angular Developer based in Gurgaon, Haryana, India.' }]);
        break;

      case 'role':
        this.lines.update(prev => [...prev, { type: 'output', text: 'Senior Angular Developer specializing in Enterprise Frontend Architecture, Framework Modernization (Angular 12->17), & AI Productivity.' }]);
        break;

      case 'experience':
        this.lines.update(prev => [...prev, { type: 'output', text: '• 8+ Years Total IT Experience\n• 4+ Years Frontend Engineering\n• Companies: Purple Drone Supply Chain, HostBooks Ltd, ASSCP BHEL' }]);
        break;

      case 'stack':
        this.lines.update(prev => [...prev, { type: 'output', text: 'Frontend: Angular 8-17, TypeScript, RxJS, PrimeNG, HTML5/SCSS\nAPIs: REST, Django REST Framework, Shopify API, Shiprocket API\nAI: Claude, Claude Code, AI-assisted development' }]);
        break;

      case 'projects':
        this.lines.update(prev => [...prev, { type: 'output', text: '1. Fulfillzy Logistics Platform (Angular 17 migration)\n2. Data Preparation Tool (Tableau Prep Builder style)\n3. Third-Party Integration Suite (Shopify, Tally, Shiprocket)' }]);
        this.scrollToSection('projects');
        break;

      case 'skills':
        this.lines.update(prev => [...prev, { type: 'output', text: 'Navigating to Tech Stack section...' }]);
        this.scrollToSection('skills');
        break;

      case 'contact':
        this.lines.update(prev => [...prev, { type: 'output', text: 'Email: amarpalkumar1991@gmail.com | Phone: +91 9971989713' }]);
        this.scrollToSection('contact');
        break;

      case 'clear':
        this.lines.set([]);
        break;

      default:
        this.lines.update(prev => [
          ...prev,
          { type: 'error', text: `zsh: command not found: ${rawCmd}. Type 'help' for valid commands.` }
        ]);
        break;
    }
  }

  private scrollToSection(sectionId: string): void {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
