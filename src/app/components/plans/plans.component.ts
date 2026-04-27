import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Plan {
  tag: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
})
export class PlansComponent {
  readonly igUrl = 'https://www.instagram.com/laurafilms__';

  readonly plans: Plan[] = [
    {
      tag: 'Plan Contenido',
      name: 'BÁSICO',
      tagline: 'Ideal para empezar tu presencia visual',
      price: '$250.000',
      period: '/ mes · valor líquido',
      features: ['5 fotografías editadas', '2 Reels', '3 horas de grabación'],
    },
    {
      tag: '⭐ Más popular',
      name: 'PREMIUM',
      tagline: 'Más contenido, más impacto',
      price: '$350.000',
      period: '/ mes · valor líquido',
      features: ['10 fotografías editadas', '4 Reels', '3 horas de grabación'],
      featured: true,
    },
    {
      tag: 'Plan Publicidad',
      name: 'ADS',
      tagline: 'Llega a más clientes con pauta',
      price: '$590.000',
      period: '/ mes · valor líquido',
      features: [
        '4 Reels',
        'Gráfica / Flyers',
        'Creación de campañas',
        'Gestión en Meta',
      ],
    },
  ];
}
