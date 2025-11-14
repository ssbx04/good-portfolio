import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface ContactForm {
  name: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = signal<ContactForm>({
    name: '',
    subject: '',
    message: ''
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  contactInfo = {
    address: 'Saint-Louis, SEN',
    phone: '+221 78 538 44 55',
    email: 'csroot667@gmail.com'
  };

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isSubmitting.set(true);

      setTimeout(() => {
        console.log('Form submitted:', this.formData());
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);

        setTimeout(() => {
          this.resetForm();
        }, 3000);
      }, 1500);
    }
  }

  isFormValid(): boolean {
    const data = this.formData();
    return !!(data.name.trim() && data.subject.trim() && data.message.trim());
  }

  resetForm(): void {
    this.formData.set({
      name: '',
      subject: '',
      message: ''
    });
    this.submitSuccess.set(false);
  }

  updateField(field: keyof ContactForm, value: string): void {
    this.formData.update(current => ({
      ...current,
      [field]: value
    }));
  }
}
