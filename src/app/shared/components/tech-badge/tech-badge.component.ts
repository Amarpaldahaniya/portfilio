import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs md:text-sm font-medium transition-all duration-200"
      [ngClass]="{
        'bg-[#12151C] border-[#242733] text-[#F5F7FA] hover:border-[#7CFFB2]/40 hover:text-[#7CFFB2] hover:bg-[#191D26]': !isPrimary(),
        'bg-[#7CFFB2]/10 border-[#7CFFB2]/30 text-[#7CFFB2] shadow-[0_0_12px_rgba(124,255,178,0.15)]': isPrimary()
      }">
      <span class="w-1.5 h-1.5 rounded-full" [ngClass]="isPrimary() ? 'bg-[#7CFFB2]' : 'bg-[#58D5FF]'"></span>
      <span>{{ name() }}</span>
      @if (tag()) {
        <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#242733] text-[#8B92A3]">
          {{ tag() }}
        </span>
      }
    </div>
  `
})
export class TechBadgeComponent {
  readonly name = input.required<string>();
  readonly tag = input<string>();
  readonly isPrimary = input<boolean>(false);
}
