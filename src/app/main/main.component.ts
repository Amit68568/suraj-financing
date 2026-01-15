import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class MainComponent {

  // Calculator State
  activeTab: 'sip' | 'emi' = 'sip';

  // SIP Model
  sipAmount: number = 5000;
  sipYears: number = 10;
  sipRate: number = 12;
  sipResult: number | null = null;
  sipTotalInvested: number | null = null;

  // EMI Model
  loanAmount: number = 1000000;
  loanYears: number = 20;
  loanRate: number = 8.5;
  emiResult: number | null = null;
  totalPayment: number | null = null;

  // Contact Form Model
  contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor() {
    this.calculateSIP();
    this.calculateEMI();
  }

  setTab(tab: 'sip' | 'emi') {
    this.activeTab = tab;
  }

  calculateSIP() {
    const months = this.sipYears * 12;
    const monthlyRate = this.sipRate / 12 / 100;

    // SIP Formula: P * ({[1 + i]^n - 1} / i) * (1 + i)
    this.sipResult = this.sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    this.sipTotalInvested = this.sipAmount * months;
  }

  calculateEMI() {
    const months = this.loanYears * 12;
    const monthlyRate = this.loanRate / 12 / 100;

    // EMI Formula: [P * R * (1+R)^N] / [(1+R)^N-1]
    this.emiResult = (this.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    this.totalPayment = this.emiResult * months;
  }

  sendMessage() {
    const { firstName, lastName, email, phone, message } = this.contactForm;

    if (!firstName || !email || !message) {
      alert('Please fill in at least Name, Email, and Message.');
      return;
    }

    const recipients = 'kamal.insurance@gmail.com,surajKr80109@gmail.com,amit68568@gmail.com';
    const subject = `New Inquiry from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

    const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
}
