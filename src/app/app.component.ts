import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private scrollService = inject(ScrollService);
  title = 'Portfolio';
}
