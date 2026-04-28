import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Plan {
  name: string;
  tagline: string;
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
  readonly wspUrl = 'https://wa.me/56952672035';;

  readonly plans: Plan[] = [
    {
      name: 'Plan de Contenido',
      tagline: 'Ideal para empezar tu presencia visual',
      features: ['Reels', 'Fotografía', '3 horas de grabación'],
    },
    {
      name: 'Plan de Publicidad',
      tagline: 'Aumenta tus ventas',
      features: ['4 reels', 'Creatividades ilimitadas', 'Gestión en Meta','Creación y optimización de campañas','Informe mensual'],
      featured: true,
    },
    {
      name: 'Plan de marketing',
      tagline: 'Todo lo que tu negocio necesita',
      features: [
        'Grilla de contenido',
        'Manejo de redes sociales',
        '8 publicaciones',
        'Historias diarias',
        'Gestión en Meta',
        'Creación y optimización de campañas',
        'Informe mensual'
      ],
    },
  ];
}
