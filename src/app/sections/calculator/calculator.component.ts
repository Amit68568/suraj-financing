import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="section-padding position-relative overflow-hidden" id="calculator">
      <div class="container-lg">
        <div class="text-center mb-5">
          <h2 class="section-title mb-3">Plan Your <span class="text-gradient">Goals</span></h2>
          <p class="text-secondary mx-auto" style="max-width:600px;">Use our financial calculators to plan your investments and loans efficiently.</p>
        </div>

        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <div class="calculator-tabs d-flex gap-2 mb-4">
              <button class="btn flex-grow-1" [class.btn-primary-gradient]="activeTab === 'sip'" [class.btn-glass]="activeTab !== 'sip'" (click)="setTab('sip')">SIP Calculator</button>
              <button class="btn flex-grow-1" [class.btn-primary-gradient]="activeTab === 'emi'" [class.btn-glass]="activeTab !== 'emi'" (click)="setTab('emi')">EMI Calculator</button>
            </div>

            <div class="glass-effect p-4 rounded-4" *ngIf="activeTab === 'sip'">
              <div class="mb-3">
                <label class="form-label text-secondary small">Monthly Investment</label>
                <div class="input-group">
                  <span class="input-group-text bg-transparent border-end-0 text-white border-secondary">₹</span>
                  <input type="number" class="form-control bg-transparent text-white border-start-0 border-secondary" [(ngModel)]="sipAmount" (ngModelChange)="calculateSIP()">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label text-secondary small">Duration: <span class="text-white">{{sipYears}} Years</span></label>
                <input type="range" class="form-range" min="1" max="30" [(ngModel)]="sipYears" (ngModelChange)="calculateSIP()">
                <div class="d-flex justify-content-between text-secondary small"><span>1 Yr</span><span>30 Yrs</span></div>
              </div>
              <div class="mb-3">
                <label class="form-label text-secondary small">Expected Return: <span class="text-white">{{sipRate}}%</span></label>
                <input type="range" class="form-range" min="5" max="25" step="0.5" [(ngModel)]="sipRate" (ngModelChange)="calculateSIP()">
                <div class="d-flex justify-content-between text-secondary small"><span>5%</span><span>25%</span></div>
              </div>
            </div>

            <div class="glass-effect p-4 rounded-4" *ngIf="activeTab === 'emi'">
              <div class="mb-3">
                <label class="form-label text-secondary small">Loan Amount</label>
                <div class="input-group">
                  <span class="input-group-text bg-transparent border-end-0 text-white border-secondary">₹</span>
                  <input type="number" class="form-control bg-transparent text-white border-start-0 border-secondary" [(ngModel)]="loanAmount" (ngModelChange)="calculateEMI()">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label text-secondary small">Tenure: <span class="text-white">{{loanYears}} Years</span></label>
                <input type="range" class="form-range" min="1" max="30" [(ngModel)]="loanYears" (ngModelChange)="calculateEMI()">
                <div class="d-flex justify-content-between text-secondary small"><span>1 Yr</span><span>30 Yrs</span></div>
              </div>
              <div class="mb-3">
                <label class="form-label text-secondary small">Interest Rate: <span class="text-white">{{loanRate}}%</span></label>
                <input type="range" class="form-range" min="5" max="20" step="0.1" [(ngModel)]="loanRate" (ngModelChange)="calculateEMI()">
                <div class="d-flex justify-content-between text-secondary small"><span>5%</span><span>20%</span></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 offset-lg-1">
            <div class="glass-effect p-5 rounded-4 text-center">
              <!-- Donut Chart -->
              <div class="donut-chart-wrapper mb-4">
                <svg viewBox="0 0 120 120" class="donut-svg">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="14"/>
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#4F46E5" stroke-width="14"
                    [attr.stroke-dasharray]="investedDash + ' ' + (circumference - investedDash)"
                    stroke-dashoffset="81.7" stroke-linecap="round" class="donut-segment"/>
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#10B981" stroke-width="14"
                    [attr.stroke-dasharray]="gainedDash + ' ' + (circumference - gainedDash)"
                    [attr.stroke-dashoffset]="81.7 + (circumference - gainedDash)"
                    stroke-linecap="round" class="donut-segment"/>
                  <text x="60" y="55" text-anchor="middle" fill="white" font-size="10" font-weight="700">{{activeTab === 'sip' ? 'Future' : 'Monthly'}}</text>
                  <text x="60" y="70" text-anchor="middle" fill="white" font-size="10" font-weight="700">{{activeTab === 'sip' ? 'Value' : 'EMI'}}</text>
                </svg>
                <div class="d-flex justify-content-center gap-4 mt-2">
                  <div class="d-flex align-items-center gap-2">
                    <span class="legend-dot" style="background:#4F46E5;"></span>
                    <small class="text-secondary">{{activeTab === 'sip' ? 'Invested' : 'Principal'}}</small>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <span class="legend-dot" style="background:#10B981;"></span>
                    <small class="text-secondary">{{activeTab === 'sip' ? 'Gains' : 'Interest'}}</small>
                  </div>
                </div>
              </div>

              <div *ngIf="activeTab === 'sip'">
                <h3 class="text-secondary mb-2">Estimated Value</h3>
                <h1 class="display-3 fw-bold text-gradient mb-4">{{sipResult | currency:'INR':'symbol':'1.0-0'}}</h1>
                <div class="row g-4 text-start">
                  <div class="col-6">
                    <small class="text-secondary d-block">Invested Amount</small>
                    <h5 class="text-white">{{sipTotalInvested | currency:'INR':'symbol':'1.0-0'}}</h5>
                  </div>
                  <div class="col-6">
                    <small class="text-secondary d-block">Wealth Gained</small>
                    <h5 class="text-success">+{{(sipResult! - sipTotalInvested!) | currency:'INR':'symbol':'1.0-0'}}</h5>
                  </div>
                </div>
              </div>

              <div *ngIf="activeTab === 'emi'">
                <h3 class="text-secondary mb-2">Monthly EMI</h3>
                <h1 class="display-3 fw-bold text-gradient mb-4">{{emiResult | currency:'INR':'symbol':'1.0-0'}}</h1>
                <div class="row g-4 text-start">
                  <div class="col-6">
                    <small class="text-secondary d-block">Total Interest</small>
                    <h5 class="text-danger">{{(totalPayment! - loanAmount) | currency:'INR':'symbol':'1.0-0'}}</h5>
                  </div>
                  <div class="col-6">
                    <small class="text-secondary d-block">Total Payment</small>
                    <h5 class="text-white">{{totalPayment | currency:'INR':'symbol':'1.0-0'}}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  activeTab: 'sip' | 'emi' = 'sip';

  sipAmount = 5000; sipYears = 10; sipRate = 12;
  sipResult: number | null = null; sipTotalInvested: number | null = null;

  loanAmount = 1000000; loanYears = 20; loanRate = 8.5;
  emiResult: number | null = null; totalPayment: number | null = null;

  readonly circumference = 326.7;
  investedDash = 163; gainedDash = 163;

  constructor() { this.calculateSIP(); this.calculateEMI(); }

  setTab(tab: 'sip' | 'emi') { this.activeTab = tab; this.updateDonut(); }

  calculateSIP() {
    const m = this.sipYears * 12, r = this.sipRate / 12 / 100;
    this.sipResult = this.sipAmount * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
    this.sipTotalInvested = this.sipAmount * m;
    if (this.activeTab === 'sip') this.updateDonut();
  }

  calculateEMI() {
    const m = this.loanYears * 12, r = this.loanRate / 12 / 100;
    this.emiResult = (this.loanAmount * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1);
    this.totalPayment = this.emiResult * m;
    if (this.activeTab === 'emi') this.updateDonut();
  }

  updateDonut() {
    if (this.activeTab === 'sip' && this.sipResult && this.sipTotalInvested) {
      this.investedDash = this.circumference * (this.sipTotalInvested / this.sipResult);
      this.gainedDash = this.circumference - this.investedDash;
    } else if (this.activeTab === 'emi' && this.totalPayment) {
      this.investedDash = this.circumference * (this.loanAmount / this.totalPayment);
      this.gainedDash = this.circumference - this.investedDash;
    }
  }
}
