import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../sections/hero/hero.component';
import { StatsComponent } from '../sections/stats/stats.component';
import { ServicesComponent } from '../sections/services/services.component';
import { CalculatorComponent } from '../sections/calculator/calculator.component';
import { TeamComponent } from '../sections/team/team.component';
import { TestimonialsComponent } from '../sections/testimonials/testimonials.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    CalculatorComponent,
    TeamComponent,
    TestimonialsComponent,
    ContactComponent,
  ]
})
export class MainComponent {
  showScrollTop = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
