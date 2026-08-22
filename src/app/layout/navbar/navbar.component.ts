import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ThemeService } from '../../core/services/theme.service';
import { PERSONAL_INFO } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      [ngClass]="{
        'bg-[#08090D]/85 backdrop-blur-md border-b border-[#242733]/80 py-3.5 shadow-xl': isScrolled(),
        'bg-transparent py-5': !isScrolled()
      }">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo Monogram -->
        <a 
          href="#" 
          class="group flex items-center gap-2 text-lg font-mono font-bold text-[#F5F7FA] tracking-tight">
          <span class="px-2.5 py-1 rounded-md bg-[#12151C] border border-[#242733] text-[#7CFFB2] group-hover:border-[#7CFFB2]/50 group-hover:shadow-[0_0_12px_rgba(124,255,178,0.2)] transition-all">
            &lt; A /&gt;
          </span>
          <span class="hidden sm:inline-block font-sans font-semibold text-sm text-[#8B92A3] group-hover:text-[#F5F7FA] transition-colors">
            AMARPAL<span class="text-[#7CFFB2]">.DEV</span>
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs lg:text-sm">
          @for (link of navLinks; track link.id) {
            <a 
              [href]="'#' + link.id" 
              (click)="setActiveSection(link.id)"
              class="transition-colors duration-200 flex items-center gap-1.5 py-1 relative"
              [ngClass]="{
                'text-[#7CFFB2] font-semibold': activeSection() === link.id,
                'text-[#8B92A3] hover:text-[#F5F7FA]': activeSection() !== link.id
              }">
              <span class="text-[#7CFFB2]/60 text-[11px]">{{ link.num }}</span>
              <span>{{ link.label }}</span>
              @if (activeSection() === link.id) {
                <span class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7CFFB2] rounded-full"></span>
              }
            </a>
          }
        </nav>

        <!-- Right Side Controls & Actions -->
        <div class="flex items-center gap-3">
          
          <!-- Command Palette Trigger Button -->
          <button 
            (click)="themeService.openCommandPalette()"
            class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12151C] border border-[#242733] text-xs font-mono text-[#8B92A3] hover:text-[#F5F7FA] hover:border-[#7CFFB2]/40 transition-all cursor-pointer">
            <lucide-icon name="search" [size]="14" class="text-[#7CFFB2]"></lucide-icon>
            <span>Search</span>
            <kbd class="px-1.5 py-0.5 rounded bg-[#191D26] text-[10px] text-[#535A6C]">⌘K</kbd>
          </button>

          <!-- Social Quick Links -->
          <a 
            [href]="personalInfo.github" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            class="hidden lg:inline-flex p-2 rounded-lg bg-[#12151C] border border-[#242733] text-[#8B92A3] hover:text-[#7CFFB2] hover:border-[#7CFFB2]/40 transition-colors">
            <lucide-icon name="github" [size]="16"></lucide-icon>
          </a>

          <a 
            [href]="personalInfo.linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            class="hidden lg:inline-flex p-2 rounded-lg bg-[#12151C] border border-[#242733] text-[#8B92A3] hover:text-[#58D5FF] hover:border-[#58D5FF]/40 transition-colors">
            <lucide-icon name="linkedin" [size]="16"></lucide-icon>
          </a>

          <!-- Download Resume CTA -->
          <a 
            [href]="personalInfo.resumeUrl" 
            download="amarpal-resume.pdf"
            class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7CFFB2]/10 border border-[#7CFFB2]/30 text-[#7CFFB2] font-mono text-xs font-semibold hover:bg-[#7CFFB2] hover:text-[#08090D] shadow-[0_0_15px_rgba(124,255,178,0.15)] transition-all duration-200">
            <lucide-icon name="download" [size]="14"></lucide-icon>
            <span>Resume</span>
          </a>

          <!-- Mobile Menu Toggle Button -->
          <button 
            (click)="toggleMobileMenu()"
            aria-label="Toggle Navigation Menu"
            class="md:hidden p-2 rounded-lg bg-[#12151C] border border-[#242733] text-[#F5F7FA] hover:border-[#7CFFB2]/40">
            <lucide-icon [name]="isMobileMenuOpen() ? 'x' : 'terminal'" [size]="20"></lucide-icon>
          </button>
        </div>

      </div>

      <!-- Mobile Navigation Drawer -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden bg-[#0D0F14]/95 border-b border-[#242733] px-4 py-6 space-y-4 font-mono text-sm backdrop-blur-xl animate-fade-in">
          <div class="space-y-2">
            @for (link of navLinks; track link.id) {
              <a 
                [href]="'#' + link.id" 
                (click)="onMobileNavClick(link.id)"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors"
                [ngClass]="{
                  'bg-[#7CFFB2]/10 border border-[#7CFFB2]/30 text-[#7CFFB2]': activeSection() === link.id,
                  'text-[#8B92A3] hover:bg-[#12151C] hover:text-[#F5F7FA]': activeSection() !== link.id
                }">
                <span class="text-[#7CFFB2] text-xs font-semibold">{{ link.num }}</span>
                <span>{{ link.label }}</span>
              </a>
            }
          </div>

          <div class="pt-4 border-t border-[#242733] flex items-center justify-between gap-3">
            <a 
              [href]="personalInfo.resumeUrl" 
              download="amarpal-resume.pdf"
              class="flex-1 py-2.5 rounded-lg bg-[#7CFFB2] text-[#08090D] font-bold text-center flex items-center justify-center gap-2">
              <lucide-icon name="download" [size]="16"></lucide-icon>
              <span>Download Resume</span>
            </a>
            
            <button 
              (click)="themeService.openCommandPalette(); isMobileMenuOpen.set(false)"
              class="p-2.5 rounded-lg bg-[#12151C] border border-[#242733] text-[#7CFFB2]">
              <lucide-icon name="search" [size]="18"></lucide-icon>
            </button>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  readonly personalInfo = PERSONAL_INFO;

  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  readonly navLinks = [
    { id: 'about', num: '01', label: 'About' },
    { id: 'skills', num: '02', label: 'Skills' },
    { id: 'experience', num: '03', label: 'Experience' },
    { id: 'projects', num: '04', label: 'Projects' },
    { id: 'ai', num: '05', label: 'AI' },
    { id: 'contact', num: '06', label: 'Contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 40);

      // Section scroll tracking
      const sections = ['about', 'skills', 'experience', 'projects', 'ai', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            this.activeSection.set(sectionId);
            break;
          }
        }
      }
    }
  }

  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
  }

  onMobileNavClick(sectionId: string): void {
    this.setActiveSection(sectionId);
    this.isMobileMenuOpen.set(false);
  }
}
