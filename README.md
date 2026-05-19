# Hemmingway-Technologies-webpage

# Hemmingway Technologies - Frontend

Modern, responsive website for Hemmingway Technologies. Built with React, Vite, and cutting-edge web technologies.

## 🚀 Features

- **Modern Stack**: React 18 + Vite + TailwindCSS
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: GSAP-powered animations and transitions
- **Dark/Light Theme**: Built-in theme switching capability
- **SEO Optimized**: Proper semantic HTML and meta tags
- **Performance**: Optimized bundle size, lazy loading
- **Accessible**: WCAG compliance standards

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/              # Reusable React components
│   │   ├── layout/             # Layout components (Navbar, Footer)
│   │   ├── ui/                 # UI components (Cards, Loaders, etc.)
│   │   ├── sections/           # Page sections (Hero, Services, etc.)
│   │   └── index.js            # Component exports
│   ├── pages/                  # Page components (Home, About, Team, Blog, Contact)
│   ├── styles/                 # Global and page-specific styles
│   │   ├── nav-hero.css       # Navbar and hero section styles
│   │   ├── sections.css        # Section component styles
│   │   └── pages.css           # Page-specific styles
│   ├── hooks/                  # Custom React hooks
│   │   └── useAnimations.js    # Animation hooks (useScrollReveal, useGSAPReveal)
│   ├── utils/                  # Utility functions
│   ├── constants/              # App constants and config
│   ├── config/                 # App configuration
│   ├── assets/                 # Static assets (images, icons)
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Base styles
├── public/                     # Static files (served as-is)
│   ├── logo-icon.png
│   ├── bg-hero.png
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Navigate to Frontend directory**
```bash
cd Frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
Server runs on `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📄 Pages

### Home (`/`)
Landing page with hero section, services showcase, testimonials, and CTA sections.

### About (`/about`)
Company story, values, and team overview. Highlights company mission and culture.

### Team (`/team`)
Detailed team member profiles with expertise, culture values, and careers CTA.

### Blog (`/blog`)
Technical blog with:
- 6+ sample posts
- Category filtering
- Email subscription
- Read time estimates

### Contact (`/contact`)
Contact form with:
- Email, phone, address info
- Form validation
- Success feedback

## 🎨 Styling

- **CSS-in-JS + CSS Modules**: Combination for scalable styling
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox
- **Color Variables**: Defined in `index.css` for theme switching
- **Theme Support**: Dark and light mode with `data-theme` attribute

### Color Palette
```css
--primary: #6367f1
--primary-light: rgba(99,103,241,0.1)
--primary-glow: rgba(99,103,241,0.25)
--text: Light gray for dark theme
--bg: Dark background
```

## 🎬 Animations

### Custom Hooks
- **useScrollReveal**: Triggers animations on scroll
- **useGSAPReveal**: Advanced GSAP animations for complex elements

### Animation Classes
- `.fade-in`: Fade in effect
- `.fade-up`: Fade + slide up
- `.slide-in`: Slide animation
- `.bounce`: Bounce effect

## 🔧 Configuration

### Environment Variables
Create `.env` file in Frontend directory:
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Hemmingway Technologies
```

## 📦 Dependencies

- **react**: UI library
- **react-router-dom**: Client-side routing
- **gsap**: Animation library
- **vite**: Build tool
- **eslint**: Code linting

## 🚀 Deployment

### Vercel / Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### Docker
```bash
docker build -t hemmingway-frontend .
docker run -p 3000:3000 hemmingway-frontend
```

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🔒 Security

- CSP headers configured
- XSS protection enabled
- No sensitive data in frontend code

## 🤝 Contributing

1. Create a new branch for features
2. Follow existing code style
3. Test responsive design
4. Submit PR with description

## 📋 Common Tasks

### Add New Page
1. Create page component in `src/pages/`
2. Add route in `App.jsx`
3. Update Navbar navigation
4. Create styles in `src/styles/pages.css`

### Add New Component
1. Create component in `src/components/ui/` or `src/components/layout/`
2. Export from `src/components/index.js`
3. Import where needed

### Add Animation
1. Use `useScrollReveal` or `useGSAPReveal` hooks
2. Apply animation classes
3. Adjust timing in hook configuration

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles not loading
- Check CSS import paths
- Clear browser cache
- Verify CSS file exists

## 📞 Support

For issues or questions:
- Check existing GitHub issues
- Create new issue with details
- Contact development team

## 📄 License

Proprietary - Hemmingway Technologies

---

**Last Updated**: May 2026
**Version**: 1.0.0
