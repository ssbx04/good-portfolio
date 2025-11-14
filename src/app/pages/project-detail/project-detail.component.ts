import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsService, ProjectDetail } from '../../services/projects.service';

interface RelatedProject {
  id: number;
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  private projectsService = inject(ProjectsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  projectId = signal<number>(0);
  project = signal<ProjectDetail | null>(null);
  relatedProjects: RelatedProject[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.projectId.set(id);
      this.loadProject(id);
      this.loadRelatedProjects(id);
    });
  }

  loadProject(id: number): void {
    const foundProject = this.projectsService.getProjectById(id);
    if (foundProject) {
      this.project.set(foundProject);
    } else {
      this.router.navigate(['/projects']);
    }
  }

  loadRelatedProjects(currentId: number): void {
    const allProjects = this.projectsService.getAllProjects();
    this.relatedProjects = allProjects
      .filter(p => p.id !== currentId)
      .slice(0, 3)
      .map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        image: p.image
      }));
  }

  navigateToProject(direction: 'previous' | 'next'): void {
    const currentId = this.projectId();
    const allProjects = this.projectsService.getAllProjects();
    const currentIndex = allProjects.findIndex(p => p.id === currentId);

    if (currentIndex === -1) return;

    let newIndex: number;
    if (direction === 'previous') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allProjects.length - 1;
    } else {
      newIndex = currentIndex < allProjects.length - 1 ? currentIndex + 1 : 0;
    }

    const newProject = allProjects[newIndex];
    this.router.navigate(['/project', newProject.id]);
  }

  canNavigate(direction: 'previous' | 'next'): boolean {
    const allProjects = this.projectsService.getAllProjects();
    return allProjects.length > 1;
  }

  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    const isPortrait = img.naturalHeight > img.naturalWidth;
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    if (isPortrait || aspectRatio < 0.8) {
      img.classList.add('portrait');
      img.parentElement?.classList.add('mobile-screenshot');
    } else {
      img.classList.add('landscape');
      img.parentElement?.classList.add('desktop-screenshot');
    }
  }

  isMobileImage(imageUrl: string): boolean {
    const mobileKeywords = ['mobile', 'phone', 'screenshot', 'app', 'ios', 'android'];
    return mobileKeywords.some(keyword => imageUrl.toLowerCase().includes(keyword));
  }
}
