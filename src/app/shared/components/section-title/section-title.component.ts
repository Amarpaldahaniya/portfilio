import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-12">
      <div class="inline-flex items-center gap-3 mb-2">
        <span class="font-mono text-[#7CFFB2] text-sm md:text-base font-semibold tracking-wider">
          {{ number() }} /
        </span>
        <h2 class="text-2xl md:text-4xl font-extrabold text-[#F5F7FA] tracking-tight uppercase">
          {{ title() }}
        </h2>
        <div class="h-[2px] w-12 md:w-24 bg-gradient-to-r from-[#7CFFB2] to-transparent rounded-full ml-2"></div>
      </div>
      @if (subtitle()) {
        <p class="text-[#8B92A3] text-sm md:text-base max-w-2xl mt-2 font-normal">
          {{ subtitle() }}
        </p>
      }
    </div>
  `
})
export class SectionTitleComponent {
  readonly number = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}
