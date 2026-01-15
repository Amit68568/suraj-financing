# Suraj Investment - Finance Application

A modern, professional financial services web application built with Angular 21 and Bootstrap. Suraj Investment provides comprehensive insurance and loan solutions with an elegant, responsive design.

## 🎯 Project Overview

Suraj Investment is a full-featured finance application offering:
- **Life Insurance** - Protect your family's future
- **Health Insurance** - Comprehensive health coverage
- **Non-Life Insurance** - Property and asset protection
- **Income Protection Planning** - Secure your wealth
- **Retirement Planning** - Plan for a comfortable retirement
- **Children's Future** - Educational and investment planning
- **Loan Solutions** - Home loans, business loans, personal loans

## ✨ Features

### Modern Design
- ✅ Sleek gradient UI with purple color scheme (#667eea to #764ba2)
- ✅ Responsive design - works perfectly on mobile, tablet, and desktop
- ✅ Smooth animations and hover effects
- ✅ Professional typography with Google Fonts (Poppins, Inter)
- ✅ Dark mode compatible footer

### Components
- **Header/Navigation** - Sticky navigation with smooth transitions
- **Hero Section** - Eye-catching landing banner with call-to-action
- **Services Section** - 6 service cards with icons and descriptions
- **About Us Section** - Team member profiles with contact information
- **Footer** - Social links, quick links, and contact details

### Technology Stack
- **Angular 21** - Latest Angular framework
- **TypeScript 5.9** - Type-safe JavaScript
- **Bootstrap 5** - Responsive grid system
- **SCSS** - Advanced styling with variables and mixins
- **Bootstrap Icons** - Professional icon library
- **RxJS 7.8** - Reactive programming library

## 🚀 Getting Started

### Prerequisites
- Node.js 24.12.0 or higher
- npm 11.6.2 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd suraj-financing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:4200/
```

## 📦 Available Scripts

### Development
```bash
npm start
# Runs the app in development mode using ng serve
# Open http://localhost:4200 to view it in the browser
```

### Build Production
```bash
npm run build
# Builds the app for production to the `dist/` folder
# Optimized for best performance
```

### Testing
```bash
npm test
# Runs the test suite using ng test
```

### Watch Mode
```bash
npm run watch
# Builds the app in watch mode for development


## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: #667eea to #764ba2 (Purple to Violet)
- **Dark Background**: #1a1a2e to #16213e
- **Light Background**: #f8f9ff
- **Text Dark**: #1a1a1a
- **Text Light**: #666

### Responsive Breakpoints
- **Mobile**: Up to 768px
- **Tablet**: 768px to 1024px
- **Desktop**: 1024px and above

### Typography
- **Headings**: Poppins font family, bold weight (700)
- **Body**: Inter font family, regular weight (400-600)
- **Font Sizes**: Scalable and responsive across devices

## 👥 Team

### Kamal Kishore
**Finance Expert**
- 20+ years of experience in Finance, Gold Loans, and Insurance
- Phone: 9873432156, 7011085658
- Email: kamal.insurance@gmail.com

### Suraj Kumar
**Loan Specialist**
- 5+ years of expertise in Home Loans, Business Loans, and Personal Loans
- Phone: 8010909383
- Email: surajKr80109@gmail.com

## 🔧 Development Notes

### Angular 21 Migration
This project has been upgraded from Angular 13 to Angular 21, featuring:
- Standalone components architecture
- ES2022 compilation target
- Modern TypeScript 5.9 support
- Updated dependencies and tooling

### Standalone Components
All components in this application are built as standalone components:
```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent]
})
```

### Styling Architecture
- Global styles in `src/styles.scss`
- Component-scoped styles in respective `.scss` files
- SCSS variables and mixins for consistency
- Mobile-first responsive design approach

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- Build size: ~77 KB (gzipped)
- Initial chunk optimization enabled
- Lazy loading for routes
- Tree-shaking for unused code elimination
- CSS and JS minification

## 📝 License

This project is private and proprietary to Suraj Investment.

## 📧 Contact

For inquiries about our services:
- **Email**: surajKr80109@gmail.com, kamal.insurance@gmail.com
- **Phone**: 9873432156, 8010909383
- **Location**: New Delhi, India

## 🤝 Contributing

This is a private project. For contributions and modifications, please contact the team directly.

---

**Last Updated**: January 15, 2026
**Current Version**: Angular 21.1.0
**Node Version**: 24.12.0