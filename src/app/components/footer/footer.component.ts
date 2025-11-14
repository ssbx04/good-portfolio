import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  contactInfo = {
    email: 'csroot667@gmail.com',
    address: 'Saint-Louis, SEN',
    phone: '+221 78 538 44 55',
    phoneFormatted: '0-8-00-888-000'
  };

  socialLinks = [
    { name: 'Github', icon: 'assets/icons/github.png', url: 'https://github.com/ssbx04' },
    { name: 'LinkedIn', icon: 'assets/icons/linkedin.png', url: 'https://www.linkedin.com/in/cheikh-sadibou-sonko-381141245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Facebook', icon: 'assets/icons/fb.png', url: 'https://www.facebook.com/share/1D7JUBiRA3/' },
    { name: 'Twitter', icon: 'assets/icons/twitter.png', url: 'https://x.com/csroot667?t=Jiw8as0uE49QyIjTdkNH7w&s=08' },
  ];
}
