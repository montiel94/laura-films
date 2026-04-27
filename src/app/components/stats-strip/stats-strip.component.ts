import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-strip.component.html',
})
export class StatsStripComponent {
  readonly stats = [
    { number: '1.160', label: 'Conversaciones / mes' },
    { number: '3×',   label: 'Marcas activas' },
    { number: '25K+', label: 'Seguidores alcanzados' },
    { number: '100%', label: 'Resultados transparentes' },
  ];
}
