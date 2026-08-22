import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SKILL_CATEGORIES } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, SectionTitleComponent, TechBadgeComponent, ScrollRevealDirective],
  template: `
    <section id="skills" class="py-20 md:py-32 bg-[#0A0C10] relative border-t border-[#242733]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <app-section-title 
          number="02" 
          title="TECH STACK" 
          subtitle="Comprehensive skill categories & modern developer tooling">
        </app-section-title>

        <!-- Category Filter & Search Bar -->
        <div class="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <!-- Category Tabs -->
          <div class="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
            <button 
              (click)="selectedCategory.set('all')"
              class="px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer"
              [ngClass]="{
                'bg-[#7CFFB2] text-[#08090D] shadow-[0_0_15px_rgba(124,255,178,0.25)]': selectedCategory() === 'all',
                'bg-[#12151C] text-[#8B92A3] hover:text-[#F5F7FA] border border-[#242733]': selectedCategory() !== 'all'
              }">
              All Skills
            </button>

            @for (cat of skillCategories; track cat.id) {
              <button 
                (click)="selectedCategory.set(cat.id)"
                class="px-3.5 py-2 rounded-lg font-mono text-xs font-medium transition-all flex items-center gap-2 cursor-pointer"
                [ngClass]="{
                  'bg-[#7CFFB2]/10 border border-[#7CFFB2]/40 text-[#7CFFB2]': selectedCategory() === cat.id,
                  'bg-[#12151C] text-[#8B92A3] hover:text-[#F5F7FA] border border-[#242733]': selectedCategory() !== cat.id
                }">
                <lucide-icon [name]="cat.iconName" [size]="14"></lucide-icon>
                <span>{{ cat.title }}</span>
              </button>
            }
          </div>

          <!-- Search Filter Input -->
          <div class="relative w-full sm:w-64">
            <lucide-icon name="search" [size]="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B92A3]"></lucide-icon>
            <input 
              type="text" 
              [(ngModel)]="searchQuery" 
              placeholder="Search skill or tool..."
              class="w-full pl-9 pr-4 py-2 rounded-lg bg-[#12151C] border border-[#242733] text-xs font-mono text-[#F5F7FA] placeholder:text-[#535A6C] focus:outline-none focus:border-[#7CFFB2]/40"
            />
          </div>

        </div>

        <!-- Skills Category Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" appScrollReveal>
          @for (cat of filteredCategories(); track cat.id) {
            <div class="p-6 rounded-xl bg-[#12151C] border border-[#242733] hover:border-[#7CFFB2]/30 transition-all duration-300 flex flex-col justify-between group">
              
              <div>
                <!-- Category Title & Icon -->
                <div class="flex items-center gap-3 mb-3">
                  <div class="p-2.5 rounded-lg bg-[#101218] border border-[#242733] text-[#7CFFB2] group-hover:border-[#7CFFB2]/50 group-hover:bg-[#7CFFB2]/10 transition-colors">
                    <lucide-icon [name]="cat.iconName" [size]="20"></lucide-icon>
                  </div>
                  <div>
                    <h3 class="font-bold text-[#F5F7FA] text-base group-hover:text-[#7CFFB2] transition-colors">
                      {{ cat.title }}
                    </h3>
                    <span class="text-[11px] font-mono text-[#8B92A3]">{{ cat.skills.length }} skills</span>
                  </div>
                </div>

                <p class="text-xs text-[#8B92A3] mb-5 leading-relaxed">
                  {{ cat.description }}
                </p>

                <!-- Skill Badges -->
                <div class="flex flex-wrap gap-2">
                  @for (skill of cat.skills; track skill.name) {
                    <app-tech-badge 
                      [name]="skill.name" 
                      [tag]="skill.tag" 
                      [isPrimary]="!!skill.isPrimary">
                    </app-tech-badge>
                  }
                </div>
              </div>

              <!-- Footer Accent -->
              <div class="mt-6 pt-4 border-t border-[#242733]/50 flex items-center justify-between text-[10px] font-mono text-[#535A6C]">
                <span>Category #{{ cat.id }}</span>
                <span class="text-[#7CFFB2]">Enterprise Ready</span>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class SkillsSectionComponent {
  readonly skillCategories = SKILL_CATEGORIES;
  readonly selectedCategory = signal<string>('all');
  searchQuery = '';

  readonly filteredCategories = computed(() => {
    const catId = this.selectedCategory();
    const q = this.searchQuery.toLowerCase().trim();

    return this.skillCategories.filter(cat => {
      const categoryMatches = catId === 'all' || cat.id === catId;
      if (!categoryMatches) return false;

      if (!q) return true;

      const titleMatches = cat.title.toLowerCase().includes(q);
      const skillMatches = cat.skills.some(s => s.name.toLowerCase().includes(q));
      return titleMatches || skillMatches;
    });
  });
}
