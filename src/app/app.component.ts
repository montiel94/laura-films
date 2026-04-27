import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { PlansComponent } from './components/plans/plans.component';
import { StatsStripComponent } from './components/stats-strip/stats-strip.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    PlansComponent,
    StatsStripComponent,
    PortfolioComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-nav></app-nav>
    <app-hero></app-hero>
    <app-plans></app-plans>
    <app-stats-strip></app-stats-strip>
    <app-portfolio></app-portfolio>
    <app-testimonials></app-testimonials>
    <app-cta></app-cta>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
