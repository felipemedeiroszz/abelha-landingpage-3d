# MMA Academy Landing Page

A premium 3D landing page for a martial arts academy built with Next.js, React Three Fiber, and modern web technologies.

## Features

- **3D Interactive Fighter**: Realistic 3D MMA fighter model that responds to mouse movement and scroll position
- **Scroll-Based Animations**: Fighter performs different martial arts animations as you scroll
- **Glassmorphism Design**: Modern glass-effect cards with premium aesthetics
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Smooth Animations**: GSAP ScrollTrigger and Framer Motion animations
- **Premium Visual Style**: Black background with gold accents, inspired by Apple and award-winning WebGL sites

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **3D Graphics**: React Three Fiber, Three.js, @react-three/drei
- **Animations**: GSAP with ScrollTrigger, Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Sections

1. **Hero**: 3D fighter with particle effects and dramatic lighting
2. **About**: Glassmorphism cards showcasing academy features
3. **Programs**: Interactive cards for MMA, Muay Thai, Jiu-Jitsu, Boxing, Self-Defense, and Kids Training
4. **Statistics**: Animated counters showing academy achievements
5. **Gallery**: Masonry layout with category filtering
6. **Testimonials**: Carousel with student reviews
7. **Contact**: Contact form, WhatsApp integration, Google Maps, and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Fighter3D.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── Statistics.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
public/
├── tripo_convert_585e85e1-d42c-4a37-ae3b-d048112af2ce.fbx
└── Punching Bag.fbx
```

## 3D Model

The landing page features a 3D MMA fighter model (FBX format) that:
- Follows mouse movement with subtle head and body rotation
- Performs different animations based on scroll position:
  - Hero: Idle breathing animation
  - About: Fighting stance
  - Programs: Punch combination
  - Instructors: Victory pose
  - Contact: Respectful bow

## Performance Optimization

- React Three Fiber for efficient 3D rendering
- Optimized particle effects
- Lazy loading for 3D models
- Responsive image handling
- Code splitting with Next.js

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  gold: {
    100: '#F9E79F',
    200: '#F4D03F',
    // ... more shades
  },
}
```

### Content

Update the content in each component file to customize:
- Text and headings
- Program descriptions
- Contact information
- Testimonials

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is for demonstration purposes.
