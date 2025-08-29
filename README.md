# AppXcess Website

A modern, responsive website for AppXcess Technologies built with React, TypeScript, and Tailwind CSS. This project showcases the company's IT solutions and services with a beautiful, professional design.

## 🚀 Features

- **Modern Design**: Clean, professional UI with teal color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, customizable icons
- **Framer Motion**: Smooth animations and transitions

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Main hero section with financial graphics
│   ├── Services.tsx        # Services showcase section
│   ├── About.tsx           # About sections with alternating layouts
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer with company information
│   └── HorizontalScroll.tsx # Legacy component (can be removed)
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.css              # Global styles and custom animations
└── vite-env.d.ts          # Vite environment types
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

## 🎨 Design Features

### Color Scheme
- **Primary**: Teal (#0D9488, #14B8A6)
- **Secondary**: Gray tones (#F9FAFB, #F3F4F6, #6B7280)
- **Accent**: White and black for contrast

### Typography
- Clean, modern font stack
- Responsive text sizing
- Proper hierarchy with headings

### Components
- **Header**: Sticky navigation with mobile menu
- **Hero**: Financial charts and graphics
- **Services**: Grid layout with service cards
- **About**: Alternating teal sections
- **Testimonials**: Customer feedback cards
- **CTA**: Email signup with overlay graphics
- **Footer**: Four-column layout with links

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AppXcess
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎯 Key Sections

### 1. Header
- Logo and navigation
- Mobile-friendly hamburger menu
- Call-to-action buttons

### 2. Hero Section
- Main headline with teal accent
- Financial investment charts
- Email signup form
- Floating icons and graphics

### 3. Services
- Six service cards in grid layout
- Icons and descriptions
- Hover effects and animations

### 4. About
- Alternating teal and white sections
- Meeting room imagery
- Network connection graphics

### 5. Testimonials
- Three customer testimonials
- Featured testimonial with teal background
- Quote icons and avatars

### 6. CTA Section
- Free signup promotion
- Email capture form
- Office team imagery with overlay

### 7. Footer
- Four-column layout
- Company information
- Contact details
- Social media links

## 🎨 Customization

### Colors
Update the teal color scheme in `tailwind.config.js`:
```javascript
colors: {
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    // ... other shades
    600: '#0d9488',
    700: '#0f766e',
  }
}
```

### Animations
Custom animations are defined in `src/index.css`:
- `fadeInUp`: Smooth entrance animation
- `float`: Floating animation for icons
- `transition-all`: Smooth transitions

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, please contact:
- Email: info@appxcess.com
- Website: https://appxcess.com/

---

Built with ❤️ by AppXcess Technologies
