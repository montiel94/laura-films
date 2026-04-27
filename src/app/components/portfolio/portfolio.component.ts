import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PortfolioItem {
  bg: string;
  icon: string;
  overlayTitle: string;
  overlaySub: string;
  label: string;
  tall?: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  readonly items: PortfolioItem[] = [
    {
      bg: 'linear-gradient(160deg,#1a1200,#2a1e00)',
      icon: '📸',
      overlayTitle: 'FOTOGRAFÍA',
      overlaySub: 'Producto & marca',
      label: 'Fotografía de producto',
      tall: true,
    },
    {
      bg: 'linear-gradient(135deg,#0a1a0a,#1a2a10)',
      icon: '🎬',
      overlayTitle: 'REELS',
      overlaySub: 'Video & motion',
      label: 'Reels & video',
    },
    {
      bg: 'linear-gradient(135deg,#0a0a1a,#151530)',
      icon: '📊',
      overlayTitle: 'CAMPAÑAS',
      overlaySub: 'Meta Ads',
      label: 'Gestión Meta Ads',
    },
    {
      bg: 'linear-gradient(135deg,#1a0a00,#2a1500)',
      icon: '🎨',
      overlayTitle: 'GRÁFICA',
      overlaySub: 'Flyers & diseño',
      label: 'Gráfica digital',
    },
    {
      bg: 'linear-gradient(135deg,#1a0010,#2a0020)',
      icon: '📱',
      overlayTitle: 'REDES',
      overlaySub: 'Social media',
      label: 'Social media',
    },
  ];
}
