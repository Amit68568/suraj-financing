import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModalComponent, ServiceDetail, SERVICE_DATA } from '../../shared/service-modal/service-modal.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceModalComponent],
  template: `
    <section class="section-padding" id="service">
      <div class="container-lg">
        <div class="text-center mb-5">
          <h2 class="section-title mb-3">Our Premium <span class="text-gradient">Services</span></h2>
          <p class="text-secondary mx-auto" style="max-width:600px;">Comprehensive financial solutions designed to protect your assets and grow your wealth.</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let svc of services">
            <div class="service-card glass-effect p-4 h-100 rounded-4 hover-up" (click)="openModal(svc)" style="cursor:pointer;">
              <div class="icon-wrapper mb-4 text-gradient bg-white bg-opacity-5 rounded-3 d-inline-flex p-3">
                <i class="bi {{svc.icon}} fs-2"></i>
              </div>
              <h4 class="mb-3">{{svc.title}}</h4>
              <p class="mb-4 text-secondary">{{svc.shortDesc}}</p>
              <button class="btn-link-styled" (click)="openModal(svc); $event.stopPropagation()">
                Learn More <i class="bi bi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Modal -->
    <app-service-modal
      *ngIf="activeService"
      [service]="activeService"
      (closed)="closeModal()">
    </app-service-modal>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  activeService: ServiceDetail | null = null;

  services = SERVICE_DATA.map(s => ({
    ...s,
    shortDesc: s.description.substring(0, 110) + '...'
  }));

  openModal(svc: any) {
    this.activeService = svc;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeService = null;
    document.body.style.overflow = '';
  }
}
