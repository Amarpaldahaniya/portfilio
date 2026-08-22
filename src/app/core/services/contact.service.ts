import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly isSubmitting = signal<boolean>(false);
  readonly submitSuccess = signal<boolean | null>(null);
  readonly copiedEmail = signal<boolean>(false);

  sendMessage(messageData: ContactMessage): Observable<{ success: boolean; message: string }> {
    this.isSubmitting.set(true);
    this.submitSuccess.set(null);

    // Simulated API call ready for EmailJS/Formspree hookup without leaking secrets
    return of({
      success: true,
      message: `Thank you ${messageData.name}! Your message has been sent successfully.`
    }).pipe(
      delay(1000)
    );
  }

  copyEmailToClipboard(email: string): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.copiedEmail.set(true);
        setTimeout(() => this.copiedEmail.set(false), 2500);
      });
    }
  }
}
