import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projectsService = inject(ProjectsService);

  selectedCategory = signal<string>('All');
  projects: Project[] = [];

  categories = ['All', 'Web Development + AI', 'Mobile Development', 'Full Stack'];

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projects = this.projectsService.getAllProjects();
  }

  getFilteredProjects(): Project[] {
    const category = this.selectedCategory();
    return this.projectsService.getProjectsByCategory(category);
  }

  filterByCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  getProjectCount(): number {
    return this.getFilteredProjects().length;
  }
}
