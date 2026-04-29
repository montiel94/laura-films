import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  readonly testimonials: Testimonial[] = [
    {
      quote: 'Desde que trabajamos con Laura, nuestro Instagram creció más de 8.000 seguidores en 3 meses. Los reels que produce son increíbles y el engagement subió un 300%.',
      initials: 'BC',
      name: 'Clínica Bocca Dental',
      role: 'Clínica dental · Santiago',
    },
    {
      quote: 'Laura entiende perfectamente la esencia de mi marca. El contenido que crea refleja exactamente lo que quiero comunicar y mis pacientes me lo dicen constantemente.',
      initials: 'KF',
      name: 'Dra. Keila Figuera',
      role: 'Médico cirujano · Santiago',
    },
    {
      quote: 'La campaña en Meta que armó para Christian Dogs generó más de 1.160 conversaciones en un mes. La mejor inversión en marketing que hemos hecho hasta ahora.',
      initials: 'CD',
      name: 'Christian Dogs',
      role: 'Escuela canina · Santiago',
    },
    {
      quote: 'Trabajar con Laura es tener una aliada estratégica, no solo una proveedora de contenido. Entiende el negocio y propone ideas que realmente funcionan.',
      initials: 'FL',
      name: 'Fusion Luxury',
      role: 'Marca de fragancias · Santiago',
    },
  ];

  currentIndex = 0;
  private autoTimer: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;

  ngOnInit() {
    this.autoTimer = setInterval(() => this.next(), 10000);
  }

  ngOnDestroy() {
    if (this.autoTimer) clearInterval(this.autoTimer);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goTo(i: number) {
    this.currentIndex = i;
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent) {
    const diff = this.touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? this.next() : this.prev();
    }
  }
}
