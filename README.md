# PulseWave Tech Website

Intelligence Delivered in Real Time - Advanced solutions in AI, cyber, and automation for defense and intelligence missions.

## 🚀 Features

- **Dark/Light Mode**: Automatic detection of system preference with manual toggle override
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Waveform Aesthetics**: Tech-inspired design with electric blue, cyan, and teal color palette
- **GitHub Pages Ready**: Configured for static deployment with custom domain support
- **Performance Optimized**: Fast loading with code splitting and optimized assets

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development and production builds)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode support
- **Routing**: React Router for SPA navigation

## 📋 Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd pulsewave-tech

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080 in your browser
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Source: "GitHub Actions"

2. **Create deployment workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: www.pulsewavetech.io
```

### Manual Deployment

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist -f"

# Deploy
npm run deploy
```

## 🔗 Custom Domain Setup (GoDaddy)

### 1. Configure DNS in GoDaddy

Add these DNS records in your GoDaddy domain management:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @  
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: <your-username>.github.io
```

### 2. GitHub Repository Settings

- Go to Settings → Pages
- Custom domain: `www.pulsewavetech.io`
- Check "Enforce HTTPS"

### 3. Verify CNAME File

The `public/CNAME` file contains:
```
www.pulsewavetech.io
```

## 🎨 Design System

### Color Palette
- **Primary**: Electric Blue (#2563eb)
- **Secondary**: Pulse Teal (#0891b2)  
- **Accent**: Electric Cyan (#06b6d4)
- **Background**: Light/Dark responsive
- **Tech Elements**: Gradients and glowing effects

### Theme Features
- Automatic dark/light mode detection
- Manual theme toggle (Sun/Moon/Monitor icons)
- Persistent user preference in localStorage
- Smooth transitions between themes

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── navigation.tsx
│   ├── hero-section.tsx
│   ├── mission-section.tsx
│   ├── capabilities-section.tsx
│   ├── differentiators-section.tsx
│   ├── experience-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── assets/              # Images and static files
├── pages/               # Page components
├── lib/                 # Utilities
├── hooks/               # Custom React hooks
├── index.css           # Global styles & design system
└── main.tsx            # App entry point

public/
├── CNAME               # Custom domain configuration
└── robots.txt          # SEO configuration
```

## 🔧 Content Updates

Content is organized in component files for easy updates:

- **Company Info**: `src/components/hero-section.tsx`
- **Mission Statement**: `src/components/mission-section.tsx`
- **Capabilities**: `src/components/capabilities-section.tsx`
- **Experience**: `src/components/experience-section.tsx`
- **Contact**: `src/components/contact-section.tsx`

## 📈 Performance Features

- Code splitting with React.lazy()
- Optimized images and assets
- Minimal bundle size
- Fast loading animations
- Efficient CSS with Tailwind

## 🔒 Security & Accessibility

- WCAG AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Secure deployment practices

## 📞 Contact & Support

- **Email**: info@pulsewavetech.io
- **Website**: www.pulsewavetech.io
- **Response Time**: Within 24 hours

## 📄 License

© 2024 PulseWave Tech. All rights reserved.

---

**Deployment Status**: ✅ GitHub Pages Ready | 🌐 GoDaddy Domain Compatible | 🎨 Dark/Light Mode | ⚡ Optimized Performance