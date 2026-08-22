import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { GlowingButtonComponent } from '../../shared/components/glowing-button/glowing-button.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ContactService, ContactMessage } from '../../core/services/contact.service';
import { PERSONAL_INFO } from '../../core/constants/portfolio.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, SectionTitleComponent, GlowingButtonComponent, ScrollRevealDirective],
  template: `
    <section id="contact" class="py-20 md:py-32 bg-[#08090D] relative border-t border-[#242733]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Title -->
        <app-section-title 
          number="06" 
          title="CONTACT" 
          subtitle="Get in touch for enterprise Angular roles, consulting, or project collaborations">
        </app-section-title>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" appScrollReveal>
          
          <!-- Left Column: Terminal Contact Info Card -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="rounded-2xl border border-[#242733] bg-[#12151C] p-6 md:p-8 font-mono text-xs md:text-sm space-y-6 shadow-2xl relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#7CFFB2]/5 rounded-bl-full pointer-events-none"></div>

              <!-- CLI Header -->
              <div class="flex items-center justify-between pb-4 border-b border-[#242733]">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
                </div>
                <span class="text-[#8B92A3] text-xs font-semibold">contact_v20.zsh</span>
              </div>

              <!-- Terminal Details -->
              <div class="space-y-4">
                <div>
                  <div class="text-[#535A6C] text-[11px] uppercase tracking-wider">// DEVELOPER NAME</div>
                  <div class="text-[#F5F7FA] font-bold text-base md:text-lg mt-0.5">{{ personalInfo.name }}</div>
                  <div class="text-[#7CFFB2] text-xs font-semibold">{{ personalInfo.role }}</div>
                </div>

                <div>
                  <div class="text-[#535A6C] text-[11px] uppercase tracking-wider">// LOCATION</div>
                  <div class="text-[#F5F7FA] flex items-center gap-2 mt-0.5">
                    <lucide-icon name="map-pin" [size]="14" class="text-[#58D5FF]"></lucide-icon>
                    <span>{{ personalInfo.location }}</span>
                  </div>
                </div>

                <div>
                  <div class="text-[#535A6C] text-[11px] uppercase tracking-wider">// EMAIL DIRECT</div>
                  <div class="flex items-center justify-between gap-2 mt-0.5 p-2.5 rounded-lg bg-[#101218] border border-[#242733]">
                    <a [href]="'mailto:' + personalInfo.email" class="text-[#58D5FF] hover:underline truncate">
                      {{ personalInfo.email }}
                    </a>
                    <button 
                      (click)="contactService.copyEmailToClipboard(personalInfo.email)"
                      title="Copy Email"
                      class="p-1.5 rounded bg-[#191D26] text-[#8B92A3] hover:text-[#7CFFB2] transition-colors shrink-0 cursor-pointer">
                      <lucide-icon [name]="contactService.copiedEmail() ? 'check' : 'copy'" [size]="14"></lucide-icon>
                    </button>
                  </div>
                  @if (contactService.copiedEmail()) {
                    <span class="text-[10px] text-[#7CFFB2] font-mono mt-1 block">✓ Email address copied to clipboard!</span>
                  }
                </div>

                <div>
                  <div class="text-[#535A6C] text-[11px] uppercase tracking-wider">// PHONE NUMBER</div>
                  <div class="text-[#F5F7FA] flex items-center gap-2 mt-0.5">
                    <lucide-icon name="phone" [size]="14" class="text-[#7CFFB2]"></lucide-icon>
                    <span>{{ personalInfo.phone }}</span>
                  </div>
                </div>

                <div>
                  <div class="text-[#535A6C] text-[11px] uppercase tracking-wider">// LINKEDIN & PORTFOLIO</div>
                  <div class="space-y-1.5 mt-1">
                    <a 
                      [href]="personalInfo.linkedin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="flex items-center gap-2 text-[#8B92A3] hover:text-[#58D5FF] transition-colors truncate">
                      <lucide-icon name="linkedin" [size]="14" class="text-[#58D5FF]"></lucide-icon>
                      <span class="truncate">linkedin.com/in/amarpalkumar9971989713/</span>
                    </a>
                    <a 
                      [href]="personalInfo.portfolio" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="flex items-center gap-2 text-[#8B92A3] hover:text-[#7CFFB2] transition-colors truncate">
                      <lucide-icon name="globe" [size]="14" class="text-[#7CFFB2]"></lucide-icon>
                      <span class="truncate">amarpalkumarportfolio.firebaseapp.com</span>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Terminal Footer -->
              <div class="pt-4 border-t border-[#242733] text-[11px] text-[#7CFFB2] flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#7CFFB2] animate-ping"></span>
                <span>Ready to communicate. Expect response within 24 hours.</span>
              </div>

            </div>

          </div>

          <!-- Right Column: Interactive Form -->
          <div class="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-[#12151C] border border-[#242733] shadow-2xl">
            <h3 class="text-xl font-bold text-[#F5F7FA] mb-2 font-mono">Send a Direct Message</h3>
            <p class="text-xs md:text-sm text-[#8B92A3] mb-6 font-sans">
              Have an open position or project? Fill out the form below to reach out directly.
            </p>

            <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="space-y-5 font-sans">
              
              <!-- Name Input -->
              <div>
                <label for="name" class="block text-xs font-mono text-[#F5F7FA] mb-2">
                  YOUR NAME <span class="text-[#DD0031]">*</span>
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  [(ngModel)]="formData.name" 
                  required 
                  #nameInput="ngModel"
                  placeholder="e.g. Sarah Jenkins"
                  class="w-full px-4 py-3 rounded-lg bg-[#101218] border border-[#242733] text-sm text-[#F5F7FA] placeholder:text-[#535A6C] focus:outline-none focus:border-[#7CFFB2] transition-colors"
                />
                @if (nameInput.touched && nameInput.invalid) {
                  <span class="text-[11px] font-mono text-[#DD0031] mt-1 block">Please enter your name.</span>
                }
              </div>

              <!-- Email Input -->
              <div>
                <label for="email" class="block text-xs font-mono text-[#F5F7FA] mb-2">
                  EMAIL ADDRESS <span class="text-[#DD0031]">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  [(ngModel)]="formData.email" 
                  required 
                  email
                  #emailInput="ngModel"
                  placeholder="e.g. sarah@company.com"
                  class="w-full px-4 py-3 rounded-lg bg-[#101218] border border-[#242733] text-sm text-[#F5F7FA] placeholder:text-[#535A6C] focus:outline-none focus:border-[#7CFFB2] transition-colors"
                />
                @if (emailInput.touched && emailInput.invalid) {
                  <span class="text-[11px] font-mono text-[#DD0031] mt-1 block">Please enter a valid email address.</span>
                }
              </div>

              <!-- Message Input -->
              <div>
                <label for="message" class="block text-xs font-mono text-[#F5F7FA] mb-2">
                  MESSAGE <span class="text-[#DD0031]">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="4" 
                  [(ngModel)]="formData.message" 
                  required 
                  #msgInput="ngModel"
                  placeholder="Describe your project, team requirements, or role specifications..."
                  class="w-full px-4 py-3 rounded-lg bg-[#101218] border border-[#242733] text-sm text-[#F5F7FA] placeholder:text-[#535A6C] focus:outline-none focus:border-[#7CFFB2] transition-colors resize-y min-h-[120px]"
                ></textarea>
                @if (msgInput.touched && msgInput.invalid) {
                  <span class="text-[11px] font-mono text-[#DD0031] mt-1 block">Please enter a message.</span>
                }
              </div>

              <!-- Submission Feedback Notification -->
              @if (feedbackMessage) {
                <div class="p-4 rounded-lg bg-[#7CFFB2]/10 border border-[#7CFFB2]/30 text-[#7CFFB2] text-xs font-mono">
                  ✓ {{ feedbackMessage }}
                </div>
              }

              <!-- Submit Button -->
              <div class="pt-2">
                <app-glowing-button 
                  type="submit" 
                  variant="primary" 
                  [disabled]="contactForm.invalid || contactService.isSubmitting()"
                  iconName="arrow-right">
                  @if (contactService.isSubmitting()) {
                    <span>Sending Message...</span>
                  } @else {
                    <span>Send Message</span>
                  }
                </app-glowing-button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactSectionComponent {
  readonly contactService = inject(ContactService);
  readonly personalInfo = PERSONAL_INFO;

  formData: ContactMessage = {
    name: '',
    email: '',
    message: ''
  };

  feedbackMessage = '';

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.contactService.sendMessage(this.formData).subscribe(res => {
        this.contactService.isSubmitting.set(false);
        this.feedbackMessage = res.message;
        this.formData = { name: '', email: '', message: '' };
        form.resetForm();

        setTimeout(() => {
          this.feedbackMessage = '';
        }, 5000);
      });
    }
  }
}
