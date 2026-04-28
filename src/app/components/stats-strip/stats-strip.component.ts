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
    { number: '+50', label: 'Clientes' },
    { number: '+40',   label: 'Matrimonios' },
    { number: '+20', label: 'Conciertos' },
    { number: '+8', label: 'Años de experiencia' },
  ];
}
