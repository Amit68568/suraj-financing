import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  activeSection: string = 'home';
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;

    const sections = ['contact', 'about-us', 'calculator', 'service', 'home'];
    for (const id of sections) {
      const el = document.getElementById(id) || (id === 'home' ? document.body : null);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100) {
        this.activeSection = id;
        break;
      }
    }
    if (window.scrollY < 80) this.activeSection = 'home';
  }
}
