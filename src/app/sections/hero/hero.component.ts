import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section d-flex align-items-center position-relative">
      <div class="container-lg">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content animate-fade-up">
            <span class="badge glass-effect text-white mb-3 px-3 py-2 rounded-pill border-0">
              <i class="bi bi-shield-check me-2"></i>Trusted by 5000+ Families
            </span>
            <h1 class="hero-title display-4 mb-4">Secure Your <span class="text-gradient">Financial Future</span> With Confidence</h1>
            <p class="hero-subtitle lead mb-5">Expert investment strategies and insurance solutions tailored to build and protect your wealth.</p>
            <div class="d-flex gap-3 flex-wrap">
              <button class="btn btn-primary-gradient" (click)="onStartInvesting()">
                Start Investing <i class="bi bi-arrow-right ms-2"></i>
              </button>
              <button class="btn btn-glass" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
                Contact Us
              </button>
            </div>
          </div>

          <div class="col-lg-6 hero-image position-relative mt-5 mt-lg-0">
            <div class="floating-card glass-effect p-4 rounded-4 position-absolute top-0 end-0 animate-float" style="z-index:2;width:200px;">
              <div class="d-flex align-items-center gap-3 mb-2">
                <div class="icon-box bg-success bg-opacity-10 text-success rounded-circle p-2">
                  <i class="bi bi-graph-up-arrow fs-4"></i>
                </div>
                <div>
                  <small class="text-secondary d-block">Return</small>
                  <span class="fw-bold text-success">+18.5%</span>
                </div>
              </div>
              <div class="progress" style="height:6px;">
                <div class="progress-bar bg-success" role="progressbar" style="width:75%"></div>
              </div>
            </div>

            <div class="hero-gfx glass-effect rounded-circle position-relative mx-auto d-flex align-items-center justify-content-center"
              style="width:400px;height:400px;background:rgba(255,255,255,0.02);">
              <i class="bi bi-piggy-bank text-gradient" style="font-size:10rem;"></i>
            </div>

            <div class="floating-card glass-effect p-3 rounded-4 position-absolute bottom-0 start-0 animate-float-delayed" style="z-index:2;">
              <div class="d-flex gap-3 align-items-center">
                <div class="avatar-group d-flex">
                  <div class="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center border border-2 border-dark" style="width:40px;height:40px;">S</div>
                  <div class="avatar bg-info rounded-circle d-flex align-items-center justify-content-center border border-2 border-dark" style="width:40px;height:40px;margin-left:-10px;">K</div>
                </div>
                <div>
                  <div class="fw-bold">Expert Support</div>
                  <small class="text-secondary">24/7 Assistance</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Output() startInvesting = new EventEmitter<void>();

  onStartInvesting() {
    this.startInvesting.emit();
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  }
}
