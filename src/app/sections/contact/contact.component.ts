import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section-padding">
      <div class="container-lg">
        <div class="glass-effect rounded-5 p-5 position-relative overflow-hidden">
          <div class="row g-5">
            <div class="col-lg-6">
              <h2 class="mb-4">Get In <span class="text-gradient">Touch</span></h2>
              <p class="text-secondary mb-5">Ready to start your financial journey? Fill out the form and we will get back to you shortly.</p>

              <div class="d-flex flex-column gap-4">
                <div class="d-flex gap-3 align-items-start" *ngFor="let info of contactInfo">
                  <div class="icon-box p-3 rounded-circle" [ngClass]="info.iconBg">
                    <i class="fs-5 bi" [ngClass]="info.icon + ' ' + info.iconColor"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">{{info.label}}</h5>
                    <p class="mb-0" [innerHTML]="info.value"></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <!-- Toast -->
              <div class="toast-notification" [class.show]="showToast" [class.toast-success]="toastType==='success'" [class.toast-error]="toastType==='error'">
                <i class="bi" [class.bi-check-circle-fill]="toastType==='success'" [class.bi-exclamation-triangle-fill]="toastType==='error'"></i>
                {{toastMessage}}
              </div>

              <form (ngSubmit)="sendMessage()" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <input type="text" class="form-control bg-dark border-secondary text-white py-3" [class.is-invalid]="errors.firstName" placeholder="First Name *" name="firstName" [(ngModel)]="form.firstName">
                    <div class="invalid-feedback">{{errors.firstName}}</div>
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control bg-dark border-secondary text-white py-3" placeholder="Last Name" name="lastName" [(ngModel)]="form.lastName">
                  </div>
                  <div class="col-md-6">
                    <input type="email" class="form-control bg-dark border-secondary text-white py-3" [class.is-invalid]="errors.email" placeholder="Email Address" name="email" [(ngModel)]="form.email">
                    <div class="invalid-feedback">{{errors.email}}</div>
                  </div>
                  <div class="col-md-6">
                    <input type="tel" class="form-control bg-dark border-secondary text-white py-3" [class.is-invalid]="errors.phone" placeholder="Phone Number *" name="phone" [(ngModel)]="form.phone">
                    <div class="invalid-feedback">{{errors.phone}}</div>
                  </div>
                  <div class="col-12">
                    <textarea class="form-control bg-dark border-secondary text-white py-3" rows="4" [class.is-invalid]="errors.message" placeholder="Your Message *" name="message" [(ngModel)]="form.message"></textarea>
                    <div class="invalid-feedback">{{errors.message}}</div>
                  </div>
                  <div class="col-12 d-flex flex-column flex-sm-row gap-3">
                    <button type="submit" class="btn btn-success w-100 py-3 text-white border-0 d-flex justify-content-center align-items-center" (click)="submitType = 'whatsapp'">
                      <i class="bi bi-whatsapp me-2"></i>Send via WhatsApp
                    </button>
                    <button type="submit" class="btn btn-primary-gradient w-100 py-3 d-flex justify-content-center align-items-center" (click)="submitType = 'email'">
                      <i class="bi bi-envelope me-2"></i>Send via Email
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  errors = { firstName: '', email: '', phone: '', message: '' };
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  submitType: 'whatsapp' | 'email' = 'whatsapp';

  contactInfo = [
    { label: 'Visit Us', icon: 'bi-geo-alt', value: '<span class="text-secondary">New Delhi, India</span>', iconBg: 'bg-primary bg-opacity-10', iconColor: 'text-primary' },
    { label: 'Email Us', icon: 'bi-envelope', value: '<span class="text-secondary">kamal.insurance@gmail.com</span>', iconBg: 'bg-primary bg-opacity-10', iconColor: 'text-primary' },
    { label: 'Call Us', icon: 'bi-telephone', value: '<span class="text-secondary">9873432156, 8010909383</span>', iconBg: 'bg-primary bg-opacity-10', iconColor: 'text-primary' },
    { label: 'WhatsApp Us', icon: 'bi-whatsapp', value: '<a href="https://wa.me/918010909383" target="_blank" class="text-success text-decoration-none fw-semibold">+91 8010909383 <i class="bi bi-box-arrow-up-right ms-1 small"></i></a>', iconBg: 'bg-success bg-opacity-10', iconColor: 'text-success' },
  ];

  validate(): boolean {
    this.errors = { firstName: '', email: '', phone: '', message: '' };
    let ok = true;
    if (!this.form.firstName.trim()) { this.errors.firstName = 'First name is required.'; ok = false; }

    // Email is now optional, but validate format if provided
    if (this.form.email.trim()) {
      const ep = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!ep.test(this.form.email)) { this.errors.email = 'Please enter a valid email address.'; ok = false; }
    }

    // Phone is now mandatory
    if (!this.form.phone.trim()) { this.errors.phone = 'Phone number is required.'; ok = false; }

    if (!this.form.message.trim()) { this.errors.message = 'Message is required.'; ok = false; }
    return ok;
  }

  sendMessage() {
    if (!this.validate()) { this.toast('Please fill in all required fields correctly.', 'error'); return; }
    const { firstName, lastName, email, phone, message } = this.form;

    if (this.submitType === 'whatsapp') {
      const waBody = `*New Inquiry*\n\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*Message:*\n${message}`;
      window.open(`https://wa.me/918010909383?text=${encodeURIComponent(waBody)}`, '_blank');
    } else {
      const recipients = 'kamal.insurance@gmail.com,surajKr80109@gmail.com,amit68568@gmail.com';
      const subject = `New Inquiry from ${firstName} ${lastName}`;
      const emailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
      window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    }

    this.form = { firstName: '', lastName: '', email: '', phone: '', message: '' };
    this.toast("Your message request has been initiated! We'll get back to you shortly.", 'success');
  }

  toast(msg: string, type: 'success' | 'error') {
    this.toastMessage = msg; this.toastType = type; this.showToast = true;
    setTimeout(() => this.showToast = false, 4000);
  }
}
