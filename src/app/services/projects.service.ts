import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  year: string;
}

export interface ProjectDetail extends Project {
  mainImage: string;
  gallery: string[];
  description: string;
  story: string;
  challenge: string;
  solution: string;
  technologies: string[];
  role: string;
  link?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: ProjectDetail[] = [
    {
      id: 1,
      title: 'NeoScan',
      category: 'Web Development + AI',
      tags: ['Angular 18', 'Django', 'PyTorch'],
      image: 'assets/images/project-1.png',
      mainImage: 'assets/images/project-1.png',
      year: '2025',
      role: 'Lead Full Stack Developer',
      gallery: [
        'assets/images/neoscan1.png',
        'assets/images/neoscan2.png'
      ],
      description: 'NeoScan is a fast and intelligent cancer-screening platform that provides rapid diagnostic insights from medical scans. It also integrates Mariama, a specialized AI-powered chatbot designed to answer cancer-related questions with high medical relevance.',
      story: 's the lead of the Innovation & Tech Commission of the UGB Computer Science Club, I initiated the development of NeoScan to democratize early cancer detection. The vision was to create a tool that blends advanced AI with accessible healthcare, allowing anyone regardless of resources to obtain preliminary diagnostic assistance using modern imaging and conversational intelligence.',
      challenge: 'The project presented several major challenges, particularly around performance and AI reliability. We needed to process large medical images efficiently while ensuring the classification pipeline could accurately detect cancer-related features. Another key difficulty was designing Mariama, a specialized chatbot powered by RAG and FAISS, which required building a fast and domain-relevant retrieval system capable of returning trustworthy, medically aligned responses. Bringing all these components together while maintaining speed, accuracy, and scalability was a significant technical undertaking.',
      solution: 'We built a modular system with an Angular frontend and a Django backend optimized for AI workflows. The image-classification model was tuned for fast and accurate cancer detection. For the chatbot, we implemented a RAG pipeline with FAISS to deliver reliable, context-aware answers. The entire platform was designed with scalability, clean APIs, and a smooth user experience in mind.',
      technologies: ['Angular 18', 'Django', 'PyTorch', 'RAG', 'FAISS', 'TorchServe'],
      link: 'https://github.com/ssbx04/NeoScanFront'
    },
    {
      id: 2,
      title: 'Karaii',
      category: 'Mobile Development',
      tags: ['Flutter', 'Spring Boot'],
      image: 'assets/images/project-2.png',
      mainImage: 'assets/images/project-2.png',
      year: '2025',
      role: 'Senior Mobile Developer',
      gallery: [
        'assets/images/karaii1.jpg',
        'assets/images/karaii2.jpg'
      ],
      description: 'Karaii is a symptom-tracking platform designed for patients at the Saint-Louis regional hospital, allowing medical staff to monitor health updates remotely.',
      story: 'A doctor colleague reached out requesting a telemedicine tool to follow patients from home. I initiated Karaii to provide a simple, reliable, and real-time monitoring solution for hospital teams.',
      challenge: 'The main challenges were ensuring strong performance, handling real-time notifications, and supporting many users connected at the same time while keeping the system scalable and stable.',
      solution: 'I built a fast Flutter app connected to a Spring Boot backend using reactive streams. Real-time updates run through Socket.IO and Kafka to ensure smooth, scalable communication. The system remains stable even with high concurrent usage.',
      technologies: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'Reactive Web (Spring)','Socket.IO', 'Apache Kafka'],
      link: 'https://karaii-app.com'
    },
    {
      id: 3,
      title: 'Series',
      category: 'Mobile Development',
      tags: ['Flutter'],
      image: 'assets/images/project-3.png',
      mainImage: 'assets/images/project-3.png',
      year: '2024',
      role: 'Mobile Developer',
      gallery: [
        'assets/images/series1.jpg',
        'assets/images/series2.jpg'
      ],
      description: 'Series is a workout app that manages training sets, exercise duration, and rest times in a clean and customizable interface.',
      story: 'While doing jump-rope sessions, I realized the Samsung timer app lacked customization. So I built my own tool to control sets and timing exactly the way I needed.',
      challenge: 'The main challenges were creating a precise and reliable timer system and managing sound alerts after each exercise and rest period.',
      solution: '',
      technologies: ['Flutter', 'Dart','Riverpod', 'Hive'],
      link: 'https://series-tracker.com'
    },
    {
      id: 4,
      title: 'Career',
      category: 'Full Stack',
      tags: ['Angular', 'Spring Boot', 'Redis'],
      image: 'assets/images/project-4.png',
      mainImage: 'assets/images/project-4.png',
      year: '2024',
      role: 'Full Stack Developer',
      gallery: [
        'assets/images/career2.jpg',
        'assets/images/career1.jpg'
      ],
      description: 'Recruitment and career management platform with intelligent matching.',
      story: 'Career is revolutionizing the recruitment process by using intelligent algorithms to match candidates and companies, significantly reducing recruitment time.',
      challenge: 'Create an efficient matching system between thousands of profiles and job offers, manage high volumes of simultaneous applications, and provide a seamless user experience for all stakeholders (candidates, recruiters, admins).',
      solution: 'Microservices architecture with Spring Boot, Angular for the frontend with lazy loading and performance optimizations. Redis for caching and sessions. AI-based matching algorithm using skills, experience, and preferences.',
      technologies: ['Angular 18', 'Spring Boot 3', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker', 'Kafka'],
      link: 'https://github.com/sadibou-r/career'
    },
    {
      id: 5,
      title: 'CIUGB Official Website',
      category: 'Full Stack',
      tags: ['Django', 'HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/ciugb0.png',
      mainImage: 'assets/images/ciugb0.png',
      year: '2024',
      role: 'Tech & Innovation Commissioner / Lead Developer',
      gallery: [
        'assets/images/ciugb1.png',
        'assets/images/ciugb2.png',
      ],
      description: 'Official website of the Computer Science Club at Gaston Berger University, promoting IT education and community engagement.',
      story: 'As Tech & Innovation Commissioner of CIUGB (Club Informatique de l\'Université Gaston Berger), I led the development of the club\'s official website with team members. The platform serves as a central hub for the computer science community at UGB, showcasing events, opportunities, and the club\'s mission: "Knowledge in information, Innovation in technology."',
      challenge: 'Create a professional, engaging platform that effectively communicates the club\'s mission while providing easy access to events, opportunities (internships, hackathons, scholarships), and blog content. The site needed to represent the club\'s four core pillars: Coding, Community, Work opportunities, and Leadership development.',
      solution: 'Modern, bold design with dark theme and red accent colors matching the club\'s brand identity. Clean navigation with sections for Events, Opportunities, Blog, and About. Dynamic opportunities section featuring partnerships with organizations like GalsenAI and UGB Incubator. Responsive layout ensuring accessibility across all devices. Content management system built with Django for easy updates by club members.',
      technologies: ['Django', 'Python', 'HTML5', 'CSS3', 'JavaScript ES6', 'PostgreSQL', 'Responsive Design', 'Git'],
      link: 'https://ciugb.com'
    },
    {
      id: 6,
      title: 'Iris Classifier',
      category: 'Web Development + AI',
      tags: ['Python', 'Flask'],
      image: 'assets/images/iris0.png',
      mainImage: 'assets/images/iris0.png',
      year: '2023',
      role: 'AI Developer',
      gallery: [
        'assets/images/iris1.png',
        'assets/images/iris2.png'
      ],
      description: 'A simple web app that classifies Iris flowers using a trained machine-learning model.',
      story: 'This project was built as a learning exercise to understand dataset preprocessing, model training, and model deployment through a lightweight API.',
      challenge: 'Training a clean and accurate model while building a small API capable of handling predictions quickly and reliably.',
      solution: 'I trained a multiclass classifier in Python and exposed it through a Flask API. The interface allows users to enter flower measurements and instantly receive the predicted class.',
      technologies: ['Python', 'Flask','HTML','CSS','JS'],
      link: 'https://github.com/ssbx04/Iris-Perceptron-Model'
    },
    {
      id: 7,
      title: 'SAT Battle Club',
      category: 'Full Stack',
      tags: ['HTML', 'CSS', 'JS'],
      image: 'assets/images/battle0.png',
      mainImage: 'assets/images/battle0.png',
      year: '2022',
      role: 'Full Stack Developer',
      gallery: [
        'assets/images/battle1.png',
        'assets/images/battle2.png',
      ],
      description: 'Interactive competition web application between student clubs of SAT faculty (CIUGB vs MIAGE).',
      story: 'SAT Battle Club is a platform developed for AMESAT (SAT Student Association) to organize friendly battles between the two main faculty clubs: Club Informatique UGB (CIUGB) and Club MIAGE. The application gamifies student interactions and strengthens community spirit.',
      challenge: 'Create an engaging and responsive interface allowing members of both clubs to compete in various academic and recreational challenges. Manage real-time point system, ensure smooth user experience across all devices, and maintain scoring fairness.',
      solution: 'Modern interface with smooth animations in vanilla JavaScript. Incremental point counting system (5, 10, 15 points) with + and - controls for each team. Responsive design with strong visual identity using club colors (red for CIUGB, brown for MIAGE). Local storage of scores to prevent data loss.',
      technologies: ['HTML', 'CSS', 'JS', 'PHP'],
      link: 'https://github.com/ssbx04/SatBattleClub'
    },
    {
      id: 8,
      title: 'Topic Categorization',
      category: 'Web Development + AI',
      tags: ['NLP', 'Python', 'JavaScript'],
      image: 'assets/images/topic0.png',
      mainImage: 'assets/images/topic0',
      year: '2023',
      role: 'Full Stack Developer',
      gallery: [
        'assets/images/topic1.png',
        'assets/images/topic2.png.jpg',
      ],
      description: 'Interactive NLP web application for automatic text categorization using DBpedia ontology.',
      story: 'Topic Categorization is an intelligent text analysis tool that automatically identifies and highlights key entities in text, then predicts their categories from the DBpedia ontology. The application features an innovative radial visualization that shows connections between predicted topics and the central entity.',
      challenge: 'Create an intuitive interface for complex NLP analysis, implement real-time entity recognition and topic prediction, design an engaging visual representation of category relationships, and ensure accurate text processing with proper entity highlighting across various text types.',
      solution: 'Clean, minimalist interface with a large text input area. Automatic entity detection with visual highlighting (underlined text). Dynamic radial graph visualization with the main predicted entity at center and related categories arranged in a circle. Smooth animations for category activation when entities are detected. Color-coded connections showing relationship strength between entities and categories.',
      technologies: ['NLTK', 'Gensim', 'spaCy', 'scikit-learn', 'Python Flask', 'JavaScript ES6', 'HTML5', 'CSS3', 'DBpedia API'],
      link: 'https://github.com/ssbx04/Topic-classification'
    }
  ];

  getAllProjects(): Project[] {
    return this.projects.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      tags: p.tags,
      image: p.image,
      year: p.year
    }));
  }

  getProjectById(id: number): ProjectDetail | undefined {
    return this.projects.find(p => p.id === id);
  }

  getFeaturedProjects(limit: number = 4): Project[] {
    return this.getAllProjects().slice(0, limit);
  }

  getProjectsByCategory(category: string): Project[] {
    if (category === 'All') {
      return this.getAllProjects();
    }
    return this.getAllProjects().filter(p => p.category === category);
  }
}
