import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-glowing-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    @if (href()) {
      <a 
        [href]="href()"
        [attr.download]="download() ? download() : null"
        [target]="target()"
        class="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all duration-300 group cursor-pointer"
        [ngClass]="getButtonClasses()">
        <ng-content></ng-content>
        @if (iconName()) {
          <lucide-icon [name]="iconName()!" [size]="18" class="transition-transform duration-200 group-hover:translate-x-1"></lucide-icon>
        }
      </a>
    } @else {
      <button 
        [type]="type()"
        [disabled]="disabled()"
        (click)="btnClick.emit($event)"
        class="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all duration-300 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        [ngClass]="getButtonClasses()">
        <ng-content></ng-content>
        @if (iconName()) {
          <lucide-icon [name]="iconName()!" [size]="18" class="transition-transform duration-200 group-hover:translate-x-1"></lucide-icon>
        }
      </button>
    }
  `
})
export class GlowingButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'outline' | 'angular'>('primary');
  readonly href = input<string>();
  readonly download = input<string>();
  readonly target = input<string>('_self');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input<boolean>(false);
  readonly iconName = input<string>();

  readonly btnClick = output<MouseEvent>();

  getButtonClasses(): string {
    switch (this.variant()) {
      case 'primary':
        return 'bg-[#7CFFB2] text-[#08090D] shadow-[0_0_20px_rgba(124,255,178,0.25)] hover:shadow-[0_0_30px_rgba(124,255,178,0.45)] hover:bg-[#94ffc2] border border-[#7CFFB2]';
      case 'secondary':
        return 'bg-[#12151C] text-[#F5F7FA] border border-[#242733] hover:border-[#58D5FF]/50 hover:bg-[#191D26] hover:text-[#58D5FF] shadow-lg';
      case 'outline':
        return 'bg-transparent text-[#F5F7FA] border border-[#242733] hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]';
      case 'angular':
        return 'bg-[#DD0031]/10 text-[#F5F7FA] border border-[#DD0031]/40 hover:border-[#DD0031] hover:bg-[#DD0031]/20 shadow-[0_0_20px_rgba(221,0,49,0.2)]';
    }
  }
}
