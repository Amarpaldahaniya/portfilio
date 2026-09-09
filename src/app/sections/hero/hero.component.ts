import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { TerminalWindowComponent } from '../../shared/components/terminal-window/terminal-window.component';
import { GlowingButtonComponent } from '../../shared/components/glowing-button/glowing-button.component';
import { PERSONAL_INFO } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TerminalWindowComponent, GlowingButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroSectionComponent {
  readonly personalInfo = PERSONAL_INFO;
  readonly activeTab = signal<'code' | 'terminal' | 'telemetry'>('code');
}
