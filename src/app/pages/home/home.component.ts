import { Component, computed } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public progress: ProgressService) {}

  // Simple static map of units for the path UI
  units = [
    { id: 1, title: 'Intro & SVS', path: '/flashcards', topic: 'SVS' },
    { id: 2, title: 'Four Dimensions', path: '/flashcards', topic: 'Four Dimensions' },
    { id: 3, title: 'Guiding Principles', path: '/flashcards', topic: 'Guiding Principles' },
    { id: 4, title: 'Service Value Chain', path: '/flashcards', topic: 'Service Value Chain' },
    { id: 5, title: 'Practices Overview', path: '/flashcards', topic: 'Practices' },
    { id: 6, title: 'Practice Deep Dive', path: '/flashcards', topic: 'Practices' },
    { id: 7, title: 'Value & Outcomes', path: '/flashcards', topic: 'Value' },
    { id: 8, title: 'Mock Quiz A', path: '/quiz', topic: 'all' },
    { id: 9, title: 'Mock Quiz B', path: '/quiz', topic: 'all' },
    { id: 10, title: 'Final Review', path: '/quiz', topic: 'all' }
  ];

  unlocked = computed(() => this.progress.lastUnit());
}
