# FE-Challenge with Instructions

A modern, responsive web application built for gaming item trading and marketplace functionality. This project demonstrates advanced front-end development skills with a focus on user experience and responsive design.

## 🚀 Live Demo

Experience the application in action with our live deployment.

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Pure CSS with custom responsive design
- **Icons**: Custom SVG components
- **State Management**: React Hooks
- **Development**: ESLint for code quality

## 📋 Features

### Core Functionality

- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Interactive Navigation**: Dynamic dropdown menus with smooth animations
- **Product Grid**: Flexible item display with filtering capabilities
- **Mobile-First Approach**: Optimized for mobile users with collapsible navigation

### User Interface

- **Custom Icon System**: Hand-crafted SVG icons for consistent branding
- **Smooth Animations**: Carefully designed hover effects and transitions
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance Optimized**: Fast loading with optimized assets

## 🏗️ Project Architecture

```
├── app/ # Next.js app directory
│ ├── layout.tsx # Root layout component
│ └── page.tsx # Homepage
├── components/ # Reusable UI components
│ ├── Header.tsx # Navigation header
│ ├── Footer.tsx # Site footer
│ ├── ContentArea.tsx # Main content section
│ ├── ItemCard.tsx # Product card component
│ └── icons/ # Custom SVG icon library
├── styles/ # CSS stylesheets
│ ├── header.css # Header styling
│ ├── footer.css # Footer styling
│ └── content-area.css # Main content styling
├── data/ # Mock data and constants
│ └── mockData.ts # Application data
└── public/ # Static assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/iTechTop/FE-challenge.git
   cd FE-challenge
   ```

2. **Install dependencies**

   ```bash
   npm install

   # or

   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev

   # or

   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Starts development server |
| `npm run build` | Creates production build  |
| `npm run start` | Runs production server    |
| `npm run lint`  | Runs ESLint code analysis |

## 🎨 Design Philosophy

This project emphasizes clean, modern design principles:

- **Minimalist Interface**: Focus on content without unnecessary clutter
- **Consistent Spacing**: Uniform padding and margins throughout
- **Color Harmony**: Carefully selected color palette for visual appeal
- **Typography**: Clear hierarchy with readable font choices
- **Interactive Elements**: Subtle animations that enhance user experience

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Customization

### Adding New Components

1. Create component in `components/` directory
2. Add corresponding CSS in `styles/` directory
3. Export from main component files

### Modifying Styles

- Edit CSS files in `styles/` directory
- Follow existing naming conventions
- Test across all breakpoints

### Updating Data

- Modify `data/mockData.ts` for content changes
- Follow existing data structure patterns

## 📈 Performance Considerations

- **Optimized Images**: Proper sizing and format selection
- **CSS Organization**: Modular stylesheets for better caching
- **Component Structure**: Efficient re-rendering patterns
- **Bundle Size**: Minimal dependencies for faster loading

## 🤝 Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code formatting
- Write descriptive component names
- Keep CSS classes semantic and organized
- Test responsive behavior on multiple devices
