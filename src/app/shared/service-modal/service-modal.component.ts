import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: { icon: string; label: string; value: string }[];
  ctaText: string;
}

export const SERVICE_DATA: ServiceDetail[] = [
  {
    id: 'life',
    title: 'Life Insurance',
    icon: 'bi-heart-pulse',
    tagline: 'Protect What Matters Most',
    description: 'Life insurance ensures your family\'s financial security even in your absence. We offer a range of term, endowment, and ULIP plans from leading insurers to match every budget and goal.',
    features: [
      'Term Insurance — Pure protection at lowest premiums',
      'Endowment Plans — Savings + protection combined',
      'Whole Life Plans — Lifetime coverage with maturity benefits',
      'ULIP — Market-linked returns with life cover',
      'Critical Illness Rider — Extra cover for serious illnesses',
      'Accidental Death Benefit — Enhanced payout on accidents',
    ],
    benefits: [
      { icon: 'bi-shield-check', label: 'Tax Benefit', value: 'Sec 80C & 10(10D)' },
      { icon: 'bi-clock-history', label: 'Cover Duration', value: 'Up to 40 Years' },
      { icon: 'bi-currency-rupee', label: 'Cover Amount', value: '₹10L – ₹10Cr+' },
    ],
    ctaText: 'Get Life Insurance Quote',
  },
  {
    id: 'health',
    title: 'Health Insurance',
    icon: 'bi-prescription2',
    tagline: 'Your Health, Our Priority',
    description: 'Medical emergencies are unpredictable. Our health insurance plans ensure cashless hospitalization, day-care procedures, and complete family protection across leading hospital networks.',
    features: [
      'Cashless treatment at 5000+ network hospitals',
      'Individual & Family Floater plans',
      'Pre & Post hospitalization expenses covered',
      'Day-care procedures & OPD coverage',
      'Critical Illness lump-sum payout',
      'No-Claim Bonus for every claim-free year',
    ],
    benefits: [
      { icon: 'bi-hospital', label: 'Network Hospitals', value: '5000+' },
      { icon: 'bi-shield-check', label: 'Tax Benefit', value: 'Sec 80D' },
      { icon: 'bi-clock', label: 'Waiting Period', value: 'As low as 30 days' },
    ],
    ctaText: 'Get Health Insurance Quote',
  },
  {
    id: 'motor',
    title: 'Motor Insurance',
    icon: 'bi-car-front-fill',
    tagline: 'Drive With Complete Peace of Mind',
    description: 'Protect your vehicle against accidents, theft, natural calamities, and third-party liabilities. We compare plans from 20+ insurers to get you the best premium and coverage.',
    features: [
      'Comprehensive (Own Damage + Third Party) cover',
      'Third-Party Liability — Legally mandatory cover',
      'Zero Depreciation Add-on — Full claim amount',
      'Roadside Assistance 24/7',
      'Engine Protection & Consumables cover',
      'Fast & cashless claim settlement',
    ],
    benefits: [
      { icon: 'bi-tools', label: 'Cashless Garages', value: '3500+' },
      { icon: 'bi-lightning-charge', label: 'Claim Settlement', value: '< 30 Minutes' },
      { icon: 'bi-percent', label: 'NCB Discount', value: 'Up to 50%' },
    ],
    ctaText: 'Get Motor Insurance Quote',
  },
  {
    id: 'wealth',
    title: 'Wealth Management',
    icon: 'bi-currency-rupee',
    tagline: 'Grow and Protect Your Wealth',
    description: 'Our certified financial planners work with you to build a diversified portfolio across mutual funds, fixed deposits, bonds, and equity to maximize returns and minimize risk.',
    features: [
      'Mutual Fund — SIP & Lumpsum investments',
      'Equity Portfolio Management',
      'Fixed Deposits & Bonds for stable returns',
      'Gold Loans & Gold Monetization',
      'Portfolio review and rebalancing',
      'Tax-efficient investment structuring',
    ],
    benefits: [
      { icon: 'bi-graph-up-arrow', label: 'Avg Annual Return', value: '12–18%' },
      { icon: 'bi-people', label: 'AUM', value: '₹50 Cr+' },
      { icon: 'bi-award', label: 'Experience', value: '20+ Years' },
    ],
    ctaText: 'Start Wealth Planning',
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    icon: 'bi-piggy-bank',
    tagline: 'Retire Comfortably, Live Fully',
    description: 'Plan your retirement early with our expert advisory. We help you build a corpus through NPS, pension plans, annuities, and SIP to ensure a stress-free retired life.',
    features: [
      'National Pension Scheme (NPS) enrollment',
      'Pension & Annuity plans from insurers',
      'Systematic Withdrawal Plans (SWP)',
      'Retirement corpus calculation & goal setting',
      'Senior Citizen Savings Scheme (SCSS)',
      'Inflation-adjusted retirement planning',
    ],
    benefits: [
      { icon: 'bi-shield-check', label: 'Tax Benefit', value: 'Sec 80CCD(1B)' },
      { icon: 'bi-cash-stack', label: 'Extra Deduction', value: '₹50,000/yr NPS' },
      { icon: 'bi-calendar-check', label: 'Best Start Age', value: '25–35 Years' },
    ],
    ctaText: 'Plan My Retirement',
  },
  {
    id: 'child',
    title: 'Child Education',
    icon: 'bi-mortarboard',
    tagline: "Invest in Your Child's Tomorrow",
    description: "Education costs are rising every year. Start early with a dedicated child education plan that combines insurance protection with wealth creation to fund your child's higher studies.",
    features: [
      'Child ULIPs — Market-linked + insurance cover',
      'Sukanya Samriddhi Yojana (for girl child)',
      'Education-specific SIP & mutual fund plans',
      'Premium waiver benefit on parent\'s demise',
      'Periodic payouts at key education milestones',
      'Inflation-indexed growth planning',
    ],
    benefits: [
      { icon: 'bi-shield-check', label: 'Tax Benefit', value: 'Sec 80C & 10(10D)' },
      { icon: 'bi-graph-up', label: 'Target Returns', value: '10–14% p.a.' },
      { icon: 'bi-calendar', label: 'Plan Horizon', value: '10–20 Years' },
    ],
    ctaText: 'Plan My Child\'s Education',
  },
];

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="close()" *ngIf="service">
      <div class="modal-panel glass-effect rounded-4" (click)="$event.stopPropagation()">
        <!-- Header -->
        <div class="modal-header-custom d-flex align-items-start justify-content-between mb-4">
          <div class="d-flex align-items-center gap-3">
            <div class="service-icon-lg text-gradient">
              <i class="bi {{service.icon}}"></i>
            </div>
            <div>
              <h3 class="mb-1">{{service.title}}</h3>
              <span class="tagline text-gradient fw-semibold">{{service.tagline}}</span>
            </div>
          </div>
          <button class="btn-close-modal" (click)="close()"><i class="bi bi-x-lg"></i></button>
        </div>

        <div class="modal-body-custom">
          <!-- Description -->
          <p class="text-secondary mb-4">{{service.description}}</p>

          <!-- Benefits row -->
          <div class="row g-3 mb-4">
            <div class="col-4" *ngFor="let b of service.benefits">
              <div class="benefit-box text-center p-3 rounded-3">
                <i class="bi {{b.icon}} text-gradient fs-4 mb-2 d-block"></i>
                <div class="benefit-value fw-bold text-white small">{{b.value}}</div>
                <div class="text-secondary" style="font-size:0.75rem">{{b.label}}</div>
              </div>
            </div>
          </div>

          <!-- Features -->
          <h6 class="text-white fw-bold mb-3">Key Features</h6>
          <ul class="feature-list mb-4">
            <li *ngFor="let f of service.features">
              <i class="bi bi-check-circle-fill text-success me-2"></i>
              <span class="text-secondary">{{f}}</span>
            </li>
          </ul>

          <!-- CTA -->
          <div class="d-flex gap-3">
            <a href="#contact" class="btn btn-primary-gradient flex-grow-1 py-3" (click)="close()">
              <i class="bi bi-send me-2"></i>{{service.ctaText}}
            </a>
            <a href="https://wa.me/918010909383?text=Hello%2C%20I%20am%20interested%20in%20{{service.title}}."
              target="_blank" class="btn btn-whatsapp px-4 py-3">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(6px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      animation: fadeIn 0.2s ease;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .modal-panel {
      width: 100%;
      max-width: 620px;
      max-height: 90vh;
      overflow-y: auto;
      padding: 2rem;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(15,23,42,0.95) !important;
      animation: slideUp 0.3s cubic-bezier(0.4,0,0.2,1);
      scrollbar-width: thin;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .btn-close-modal {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      color: white;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.2s ease;
      &:hover { background: rgba(255,255,255,0.15); }
    }

    .service-icon-lg {
      font-size: 2.5rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(79,70,229,0.15);
      border-radius: 16px;
      flex-shrink: 0;
    }

    .tagline { font-size: 0.9rem; }

    .benefit-box {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
    }
    .benefit-value { font-size: 0.85rem; }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      li { display: flex; align-items: flex-start; }
    }

    .btn-whatsapp {
      background: linear-gradient(135deg, #25D366, #128C7E);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      transition: all 0.3s ease;
      font-size: 1.2rem;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(37,211,102,0.35);
        color: white;
      }
    }
  `]
})
export class ServiceModalComponent {
  @Input() service: ServiceDetail | null = null;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
