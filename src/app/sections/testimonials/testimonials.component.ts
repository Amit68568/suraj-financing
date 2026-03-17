import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding testimonials-section">
      <div class="container-lg">
        <div class="text-center mb-5">
          <h2 class="section-title">What Our <span class="text-gradient">Clients Say</span></h2>
          <p class="text-secondary">Real stories from real people who trusted us with their financial journey</p>
        </div>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let t of testimonials">
            <div class="testimonial-card glass-effect p-4 rounded-4 h-100" [class.featured-testimonial]="t.featured">
              <div class="stars mb-3">
                <i class="bi bi-star-fill text-warning" *ngFor="let s of [].constructor(t.fullStars)"></i>
                <i class="bi bi-star-half text-warning" *ngIf="t.halfStar"></i>
              </div>
              <p class="text-secondary mb-4">"{{t.review}}"</p>
              <div class="d-flex align-items-center gap-3">
                <div class="testimonial-avatar" [ngClass]="t.avatarClass">{{t.initials}}</div>
                <div>
                  <div class="fw-bold">{{t.name}}</div>
                  <small class="text-secondary">{{t.title}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      review: 'Kamal ji helped me secure the right life insurance plan for my family. His guidance was clear, honest and truly tailored to our needs. Highly recommended!',
      fullStars: 5, halfStar: false, featured: false,
      name: 'Rajesh Sharma', title: 'Business Owner, Delhi',
      initials: 'R', avatarClass: 'bg-primary'
    },
    {
      review: 'Suraj helped me get a home loan approved within days! The process was smooth, transparent and stress-free. I couldn\'t be happier with the service.',
      fullStars: 5, halfStar: false, featured: true,
      name: 'Priya Verma', title: 'IT Professional, Noida',
      initials: 'P', avatarClass: 'bg-info'
    },
    {
      review: 'Their SIP recommendations have been fantastic. In just 3 years, my investment has grown significantly. The team is always available to answer queries.',
      fullStars: 4, halfStar: true, featured: false,
      name: 'Amit Gupta', title: 'Teacher, Gurgaon',
      initials: 'A', avatarClass: 'bg-success'
    }
  ];
}
