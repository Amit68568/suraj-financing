import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="stats-strip" class="stats-strip">
      <div class="container-lg">
        <div class="row g-4 text-center">
          <div class="col-6 col-md-3" *ngFor="let stat of stats; let i = index">
            <div class="stat-item" [class.animated]="visible">
              <div class="stat-number text-gradient">{{stat.value}}</div>
              <div class="stat-label">{{stat.label}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  visible = false;

  stats = [
    { value: '5000+', label: 'Happy Clients' },
    { value: '₹50Cr+', label: 'Wealth Managed' },
    { value: '20+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  ngOnInit(): void { this.checkVisibility(); }

  @HostListener('window:scroll')
  checkVisibility() {
    const el = document.getElementById('stats-strip');
    if (el && el.getBoundingClientRect().top < window.innerHeight - 80) {
      this.visible = true;
    }
  }
}
