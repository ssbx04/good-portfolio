import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Technology {
  name: string;
  logo: string;
}

interface Experience {
  company: string;
  logo?: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface SocialLink {
  name: string;
  url: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  mainStack: Technology[] = [
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
  ];

  secondaryStack: Technology[] = [
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Kafka', logo: 'https://svn.apache.org/repos/asf/kafka/site/logos/originals/png/ICON%20-%20White%20on%20Transparent.png' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  experiences: Experience[] = [
    {
  company: 'Centre de Calcul Ousmane SECK',
  logo: 'assets/images/ccos.png',
  position: 'Java Backend Developer',
  period: 'April 2025 - September 2025',
  location: 'Saint-Louis, Senegal',
  description: 'Backend development in a dynamic tech environment. Participated in the complete redesign of the system into a microservices architecture.',
  achievements: [
    'Contributed to migration from monolithic to microservices architecture',
    'Implemented inter-service communication with Feign and Kafka',
    'Integrated Elasticsearch for advanced search functionality',
    'Set up service discovery and configuration with Consul'
  ],
  technologies: ['Java', 'Spring Boot', 'Microservices', 'Elasticsearch', 'Consul', 'Feign', 'Kafka', 'PostgreSQL']
}
,
{
  company: 'Dropcolis CA',
  logo: 'assets/images/dropcolis.png',
  position: 'Front-End Developer',
  period: '2023 - 2024',
  location: 'Québec, Canada',
  description: 'Frontend development for an innovative logistics startup disrupting home delivery for individuals and businesses in Quebec. Specialized in React for web and Flutter for mobile applications.',
  achievements: [
    'Developed responsive web interfaces using React',
    'Built cross-platform mobile applications with Flutter',
    'Implemented real-time parcel tracking features',
    'Optimized user experience for both individual and business clients'
  ],
  technologies: ['React', 'Flutter', 'JavaScript', 'Dart', 'HTML', 'CSS', 'Tailwind CSS']
},
{
  company: 'GySoft',
  logo: 'assets/images/gysoft.png',
  position: 'Co-founder',
  period: '2021 - 2023',
  location: 'Saint-Louis, Sénégal',
  description: 'Lead frontend developer for large-scale projects. Responsible for UI/UX implementation, technical architecture and team mentoring.',
  achievements: [
    'Reduced loading times by 60% through frontend optimizations',
    'Developed responsive and modern user interfaces',
    'Implemented modern web development best practices'
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
}
  ];

  socialLinks: SocialLink[] = [
    { name: 'GITHUB', url: 'https://github.com/ssbx04' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/cheikh-sadibou-sonko-381141245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'TWITTER', url: 'https://x.com/csroot667?t=Jiw8as0uE49QyIjTdkNH7w&s=08' },
    { name: 'FACEBOOK', url: 'https://www.facebook.com/share/1D7JUBiRA3/' }
  ];
}
