import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about-us" class="section-padding">
      <div class="container-lg">
        <div class="text-center mb-5">
          <h2 class="section-title">Meet The <span class="text-gradient">Experts</span></h2>
          <p class="text-secondary">Dedicated professionals committed to your financial success</p>
        </div>

        <div class="row g-5 justify-content-center">
          <div class="col-md-6 col-lg-5" *ngFor="let member of team">
            <div class="team-card glass-effect p-4 rounded-4 text-center h-100 hover-up">
              <div class="team-image mx-auto mb-4 rounded-circle p-1" style="width:150px;height:150px;background:var(--gradient-primary);">
                <img [src]="member.photo" [alt]="member.name" class="w-100 h-100 rounded-circle object-fit-cover border border-4 border-dark">
              </div>
              <h3>{{member.name}}</h3>
              <span class="badge mb-3" [ngClass]="member.badgeClass">{{member.role}}</span>
              <p class="text-secondary mb-4">{{member.bio}}</p>
              <div class="d-flex flex-column gap-2 text-start bg-dark bg-opacity-50 p-3 rounded-3 mb-3">
                <a [href]="'tel:' + member.phone" class="text-decoration-none text-light">
                  <i class="bi bi-telephone me-2" [ngClass]="member.iconClass"></i>{{member.phone}}
                </a>
                <a [href]="'mailto:' + member.email" class="text-decoration-none text-light">
                  <i class="bi bi-envelope me-2" [ngClass]="member.iconClass"></i>{{member.email}}
                </a>
              </div>
              <a [href]="member.whatsapp" target="_blank" class="btn btn-whatsapp w-100">
                <i class="bi bi-whatsapp me-2"></i>Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  team = [
    {
      name: 'Kamal Kishore',
      role: 'Finance Expert',
      bio: '20+ years of experience in Finance, Gold Loans, and Insurance.',
      phone: '9873432156',
      email: 'kamal.insurance@gmail.com',
      photo: '../../assets/kamal.png',
      badgeClass: 'bg-primary bg-opacity-25 text-primary',
      iconClass: 'text-primary',
      whatsapp: 'https://wa.me/919873432156?text=Hello%20Kamal%2C%20I%20need%20financial%20guidance.'
    },
    {
      name: 'Suraj Kumar',
      role: 'Loan Specialist',
      bio: '5+ years of expertise in Home Loans, Business Loans, and Personal Loans.',
      phone: '8010909383',
      email: 'surajKr80109@gmail.com',
      photo: '../../assets/suraj.png',
      badgeClass: 'bg-info bg-opacity-25 text-info',
      iconClass: 'text-info',
      whatsapp: 'https://wa.me/918010909383?text=Hello%20Suraj%2C%20I%20need%20loan%20guidance.'
    }
  ];
}
