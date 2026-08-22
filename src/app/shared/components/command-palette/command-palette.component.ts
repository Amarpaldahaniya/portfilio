import { Component, HostListener, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { ThemeService } from '../../../core/services/theme.service';
import { PERSONAL_INFO } from '../../../core/constants/portfolio.constants';

interface CommandItem {
  id: string;
  label: string;
  category: 'Section' | 'Action' | 'Social';
  iconName: string;
  action: () => void;
}

@Component({
  selector: 'app-command-palette',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    @if (themeService.isCommandPaletteOpen()) {
      <div 
        class="fixed inset-0 z-50 bg-[#08090D]/80 backdrop-blur-md flex items-start justify-center pt-16 md:pt-28 px-4"
        (click)="themeService.closeCommandPalette()">
        
        <div 
          class="w-full max-w-xl bg-[#12151C] border border-[#242733] rounded-xl shadow-2xl overflow-hidden font-sans"
          (click)="$event.stopPropagation()">
          
          <!-- Search Header -->
          <div class="px-4 py-3.5 bg-[#101218] border-b border-[#242733] flex items-center gap-3">
            <lucide-icon name="search" [size]="18" class="text-[#7CFFB2] shrink-0"></lucide-icon>
            <input 
              #searchInput
              type="text" 
              [(ngModel)]="query" 
              placeholder="Search portfolio, jump to section, or open links..."
              class="flex-1 bg-transparent text-[#F5F7FA] placeholder:text-[#535A6C] text-sm focus:outline-none"
              (keydown)="handleKeyDown($event)"
            />
            <span class="text-[10px] font-mono px-2 py-1 rounded bg-[#191D26] border border-[#242733] text-[#8B92A3]">ESC</span>
          </div>

          <!-- Command List -->
          <div class="max-h-80 overflow-y-auto p-2 space-y-1 custom-scroll">
            @if (filteredItems().length === 0) {
              <div class="p-8 text-center text-xs font-mono text-[#8B92A3]">
                No matching results found for "{{ query }}"
              </div>
            } @else {
              @for (item of filteredItems(); track item.id; let idx = $index) {
                <button 
                  (click)="executeItem(item)"
                  (mouseenter)="selectedIndex.set(idx)"
                  class="w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-left text-sm transition-colors duration-150 group cursor-pointer"
                  [ngClass]="{
                    'bg-[#7CFFB2]/10 border border-[#7CFFB2]/30 text-[#7CFFB2]': selectedIndex() === idx,
                    'text-[#F5F7FA] hover:bg-[#191D26]': selectedIndex() !== idx
                  }">
                  <div class="flex items-center gap-3">
                    <lucide-icon [name]="item.iconName" [size]="16" [ngClass]="selectedIndex() === idx ? 'text-[#7CFFB2]' : 'text-[#8B92A3]'"></lucide-icon>
                    <span class="font-medium">{{ item.label }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101218] border border-[#242733] text-[#8B92A3]">
                      {{ item.category }}
                    </span>
                    <lucide-icon name="chevron-right" [size]="14" class="opacity-0 group-hover:opacity-100 transition-opacity"></lucide-icon>
                  </div>
                </button>
              }
            }
          </div>

          <!-- Footer hints -->
          <div class="px-4 py-2.5 bg-[#101218] border-t border-[#242733] flex items-center justify-between text-[11px] font-mono text-[#535A6C]">
            <div class="flex items-center gap-3">
              <span><kbd class="px-1 py-0.5 rounded bg-[#191D26] text-[#8B92A3]">↑</kbd> <kbd class="px-1 py-0.5 rounded bg-[#191D26] text-[#8B92A3]">↓</kbd> Navigate</span>
              <span><kbd class="px-1 py-0.5 rounded bg-[#191D26] text-[#8B92A3]">↵</kbd> Select</span>
            </div>
            <span>Amarpal.dev Palette</span>
          </div>

        </div>
      </div>
    }
  `
})
export class CommandPaletteComponent {
  readonly themeService = inject(ThemeService);
  query = '';
  readonly selectedIndex = signal<number>(0);

  private readonly allItems: CommandItem[] = [
    { id: 'sec-about', label: '01 / About Section', category: 'Section', iconName: 'user', action: () => this.scrollTo('about') },
    { id: 'sec-skills', label: '02 / Tech Stack & Skills', category: 'Section', iconName: 'code-2', action: () => this.scrollTo('skills') },
    { id: 'sec-exp', label: '03 / Experience Timeline', category: 'Section', iconName: 'briefcase', action: () => this.scrollTo('experience') },
    { id: 'sec-proj', label: '04 / Selected Work Projects', category: 'Section', iconName: 'layers', action: () => this.scrollTo('projects') },
    { id: 'sec-ai', label: '05 / AI x Development', category: 'Section', iconName: 'sparkles', action: () => this.scrollTo('ai') },
    { id: 'sec-edu', label: '06 / Education & Certifications', category: 'Section', iconName: 'graduation-cap', action: () => this.scrollTo('education') },
    { id: 'sec-contact', label: '07 / Contact Amarpal', category: 'Section', iconName: 'mail', action: () => this.scrollTo('contact') },
    { id: 'act-resume', label: 'Download Resume (PDF)', category: 'Action', iconName: 'download', action: () => this.openLink(PERSONAL_INFO.resumeUrl, true) },
    { id: 'act-linkedin', label: 'Open LinkedIn Profile', category: 'Social', iconName: 'linkedin', action: () => this.openLink(PERSONAL_INFO.linkedin) },
    { id: 'act-email', label: 'Send Email (amarpalkumar1991@gmail.com)', category: 'Action', iconName: 'mail', action: () => this.openLink(`mailto:${PERSONAL_INFO.email}`) }
  ];

  readonly filteredItems = computed(() => {
    const q = this.query.toLowerCase().trim();
    if (!q) return this.allItems;
    return this.allItems.filter(i => i.label.toLowerCase().includes(q) || i.category.toLowerCase().includes(q));
  });

  @HostListener('window:keydown', ['$event'])
  handleGlobalShortcut(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (this.themeService.isCommandPaletteOpen()) {
        this.themeService.closeCommandPalette();
      } else {
        this.themeService.openCommandPalette();
        this.query = '';
        this.selectedIndex.set(0);
      }
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    const items = this.filteredItems();
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.selectedIndex.update(idx => (idx + 1) % items.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.selectedIndex.update(idx => (idx - 1 + items.length) % items.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (items[this.selectedIndex()]) {
        this.executeItem(items[this.selectedIndex()]);
      }
    } else if (event.key === 'Escape') {
      this.themeService.closeCommandPalette();
    }
  }

  executeItem(item: CommandItem): void {
    this.themeService.closeCommandPalette();
    item.action();
  }

  private scrollTo(id: string): void {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  private openLink(url: string, download = false): void {
    if (typeof window !== 'undefined') {
      if (download) {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'amarpal-resume.pdf';
        a.click();
      } else {
        window.open(url, '_blank');
      }
    }
  }
}
