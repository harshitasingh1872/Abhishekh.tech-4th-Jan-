# Abhishekh Dey Portfolio - Complete Documentation

Welcome! This is a comprehensive guide to understanding and maintaining the professional portfolio website. Whether you're a newbie developer or an experienced one, this documentation will walk you through every aspect of the project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Understanding the Tech Stack](#understanding-the-tech-stack)
3. [Project Structure & Organization](#project-structure--organization)
4. [Design System Explained](#design-system-explained)
5. [Components Deep Dive](#components-deep-dive)
6. [How to Make Changes](#how-to-make-changes)
7. [Adding & Updating Content](#adding--updating-content)
8. [Styling & Customization](#styling--customization)
9. [Animations Explained](#animations-explained)
10. [Deployment Guide](#deployment-guide)
11. [Troubleshooting](#troubleshooting)
12. [Hand-over Documentation for Next Developer](#hand-over-documentation-for-next-developer)

---

## Getting Started

### What is This Project?

This is a modern, professional portfolio website built with cutting-edge web technologies. It showcases:
- Personal information and professional experience
- Skills and expertise areas
- Project portfolio with filtering
- Blog posts and articles
- Contact information
- Modern dark design with smooth animations

### Prerequisites

Before working on this project, you should have:
- **Node.js** installed (version 16 or higher) - [Download here](https://nodejs.org)
- **npm** installed (comes with Node.js)
- A code editor like **Visual Studio Code** - [Download here](https://code.visualstudio.com)
- Basic understanding of **JavaScript** and **React**
- Familiarity with **CSS** and **HTML**

### First Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```
   This command reads the `package.json` file and installs all required packages listed there.

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   This starts a local server. Open your browser and navigate to `http://localhost:5173/` to see the website.

3. **Make changes and see them live:**
   The development server automatically refreshes when you save files. Just edit, save, and watch your changes appear!

---

## Understanding the Tech Stack

### What Each Technology Does

#### **React 18**
- **What it is:** A JavaScript library for building user interfaces
- **Why we use it:** React makes it easy to create interactive, dynamic web pages
- **In this project:** Every section of the website is a React component
- **Example:** When you click a navigation link, React handles the smooth scrolling without reloading the page

#### **TypeScript**
- **What it is:** JavaScript with type safety - you define what type each variable should be
- **Why we use it:** Catches errors before they happen and makes code more predictable
- **In this project:** All `.tsx` files use TypeScript
- **Example:**
  ```tsx
  interface Person {
    name: string;      // must be text
    age: number;       // must be a number
  }
  ```

#### **Vite**
- **What it is:** A modern build tool and development server
- **Why we use it:** Much faster than older tools, instant hot reload on changes
- **In this project:** Runs the dev server and builds the final production version
- **What it does:** Bundling and optimizing your code for the web

#### **Tailwind CSS**
- **What it is:** A utility-first CSS framework
- **Why we use it:** Write styling directly in HTML with class names instead of separate CSS files
- **In this project:** All styling is done with Tailwind classes
- **Example:**
  ```tsx
  <div className="bg-primary text-white rounded-lg p-4">
    // bg-primary = background color
    // text-white = white text
    // rounded-lg = rounded corners
    // p-4 = padding
  </div>
  ```

#### **Framer Motion**
- **What it is:** A library for creating smooth animations in React
- **Why we use it:** Makes animations easy and performant
- **In this project:** All fade-in effects, hover animations, scroll effects
- **Example:**
  ```tsx
  <motion.div
    initial={{ opacity: 0 }}      // starts invisible
    animate={{ opacity: 1 }}       // animates to visible
    transition={{ duration: 0.6 }} // takes 0.6 seconds
  >
    Fades in when the component loads
  </motion.div>
  ```

#### **Lucide React**
- **What it is:** A collection of beautiful, consistent icons as React components
- **Why we use it:** Professional-looking icons without needing separate image files
- **In this project:** Used throughout for visual elements (briefcase, graduation cap, etc.)
- **Example:**
  ```tsx
  import { Briefcase } from 'lucide-react';

  <Briefcase size={24} className="text-primary" />
  ```

#### **Shadcn/ui**
- **What it is:** Pre-built, customizable UI components built on Radix UI
- **Why we use it:** Provides professional components (buttons, forms, dialogs, etc.) that are accessible
- **In this project:** Available for use but this portfolio is mostly custom-built
- **Example:**
  ```tsx
  import { Button } from '@/components/ui/button';

  <Button variant="primary">Click me</Button>
  ```

---

## Project Structure & Organization

### Understanding the Folder Layout

```
project/
├── src/                          # All source code goes here
│   ├── assets/                   # Images and static files
│   │   ├── hero-bg.jpg          # Background image for hero section
│   │   ├── about-bg.jpg         # Background image for about section
│   │   └── profile-placeholder.jpg # Your profile photo (replace this!)
│   │
│   ├── components/               # Reusable building blocks of the UI
│   │   ├── ui/                  # Shadcn UI components (pre-built)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...              # Many more reusable components
│   │   │
│   │   ├── Navbar.tsx           # Top navigation bar (visible on all pages)
│   │   ├── HeroSection.tsx      # Big welcome section at the top
│   │   ├── AboutSection.tsx     # "About Me" section with intro
│   │   ├── ExperienceSection.tsx # Timeline of jobs and education
│   │   ├── SkillsSection.tsx    # Skills grid with proficiency levels
│   │   ├── ProjectsSection.tsx  # Portfolio of past projects
│   │   ├── BlogSection.tsx      # Blog article previews
│   │   ├── ServicesSection.tsx  # Services offered and pricing
│   │   ├── ContactSection.tsx   # Contact form
│   │   ├── Footer.tsx           # Bottom of page with links
│   │   └── NetworkBackground.tsx # Animated background effect
│   │
│   ├── pages/                   # Full page components
│   │   ├── Index.tsx            # Main page - combines all sections
│   │   └── NotFound.tsx         # 404 error page
│   │
│   ├── hooks/                   # Custom React logic you can reuse
│   │   └── use-mobile.tsx       # Detects if user is on mobile
│   │
│   ├── lib/                     # Helper functions and utilities
│   │   └── utils.ts            # The 'cn' function for combining classes
│   │
│   ├── index.css               # Global styles and color definitions
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # Additional app styles
│   └── main.tsx                # Entry point (where React starts)
│
├── public/                     # Static files served as-is
│   ├── favicon.ico            # Small icon shown in browser tab
│   └── robots.txt             # Tells search engines how to crawl
│
├── package.json               # List of all dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build tool configuration
└── index.html                # The main HTML file (very simple)
```

### Key Concepts

**Components:** Think of components as LEGO blocks. Each component is a reusable piece of UI (like a button, card, or section). The main page combines all these blocks together.

**Props:** Components receive props (properties) which are like function parameters. For example:
```tsx
<Button size="large" color="primary">Click me</Button>
// size and color are props
```

**State:** Sometimes components need to remember information (like whether a menu is open). This is called state.

---

## Design System Explained

### The Color Palette

The design uses a sophisticated dark theme with cyan and violet accents. All colors are defined in `src/index.css`:

| Color Name | HSL Value | Usage | Example |
|-----------|-----------|-------|---------|
| **Background** | 230 25% 5% | The dark base color of everything | Page background |
| **Foreground** | 210 40% 96% | Main text color (white-ish) | Body text |
| **Primary** | 185 100% 50% | Electric cyan accent | Button hover, links |
| **Secondary** | 270 80% 60% | Violet accent | Alternative highlights |
| **Muted** | 230 20% 12% | Slightly lighter than background | Card backgrounds |
| **Muted Foreground** | 215 20% 55% | Gray text | Placeholder text |
| **Card** | 230 25% 8% | Color of card backgrounds | Content containers |
| **Border** | 230 20% 18% | Color of dividing lines | Card borders |

### Understanding HSL Colors

HSL stands for Hue, Saturation, Lightness:
- **Hue (0-360):** The color itself (0=red, 120=green, 240=blue)
- **Saturation (0-100%):** How vivid the color is (0=gray, 100=full color)
- **Lightness (0-100%):** How bright it is (0=black, 50=normal, 100=white)

Example: `180 100% 50%` = pure cyan

### Typography (Fonts)

```css
--font-display: 'Space Grotesk'    /* Bold headings */
--font-mono: 'JetBrains Mono'      /* Code and monospace */
--font-body: 'Space Grotesk'       /* Body paragraphs */
```

**Space Grotesk:** A modern, geometric sans-serif font - modern and professional
**JetBrains Mono:** A clean monospace font - perfect for code snippets

### Custom CSS Classes

These are special classes defined in `src/index.css`:

| Class | What it does |
|-------|-------------|
| `.glass-card` | Creates a frosted glass effect with blur |
| `.text-gradient` | Makes text gradient from cyan to violet |
| `.glow-primary` | Adds a cyan glow shadow around elements |
| `.section-padding` | Standard vertical spacing for sections |
| `.container-custom` | Centers content with max-width |

---

## Components Deep Dive

### 1. **Navbar Component** (`src/components/Navbar.tsx`)

**What it does:** Shows navigation links at the top and changes appearance when you scroll.

**File location:** `src/components/Navbar.tsx`

**How it works:**
1. On page load, navbar is transparent
2. When you scroll down, it gains a glass effect background
3. On desktop: shows horizontal links + "Let's Talk" button
4. On mobile: shows hamburger menu that slides open

**To modify navigation links:**

Find this section (around line 6-14):
```tsx
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];
```

**To add a new link:**
```tsx
{ name: 'Portfolio', href: '#portfolio' },  // Add this line
```

**To remove a link:**
```tsx
// Just delete the entire line for that link
```

**To change the logo/branding:**

Find line ~46:
```tsx
<span className="text-foreground font-bold text-xl">Abhishekh Dey</span>
```

Change "Abhishekh Dey" to your name.

---

### 2. **HeroSection Component** (`src/components/HeroSection.tsx`)

**What it does:** The big welcome section at the top with your name, title, and call-to-action buttons.

**File location:** `src/components/HeroSection.tsx`

**To change your name:**

Find around line 83:
```tsx
<span className="text-gradient neon-text">Abhishekh Dey</span>
```

Replace with your name:
```tsx
<span className="text-gradient neon-text">Your Name Here</span>
```

**To change the subtitle/title:**

Find around line 92-94:
```tsx
<motion.p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
  Crafting scalable digital solutions through clean code and thoughtful design
</motion.p>
```

Replace the text with your subtitle:
```tsx
<motion.p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
  Your new subtitle here
</motion.p>
```

**To change your roles/titles:**

Find the `roles` array (around line 7-12):
```tsx
const roles = [
  { icon: Code, label: 'Full Stack Developer' },
  { icon: Palette, label: 'Graphics Designer' },
  { icon: Zap, label: 'UI/UX Designer' },
];
```

**To add a new role:**
```tsx
{ icon: Briefcase, label: 'Technical Lead' },  // Add this
```

**To change button links:**

Find the buttons section (around line 100+):
```tsx
<a href="mailto:your@email.com">Get in Touch</a>
<a href="#projects">View My Work</a>
```

---

### 3. **AboutSection Component** (`src/components/AboutSection.tsx`)

**What it does:** Introduces you with profile picture, bio, and key statistics.

**File location:** `src/components/AboutSection.tsx`

**To change your profile picture:**

1. Get your photo (preferably square, at least 800x800px)
2. Place it in `src/assets/profile-placeholder.jpg`
3. If you want to use a different filename, change the import at the top:
   ```tsx
   import profilePhoto from '@/assets/YOUR_PHOTO_NAME.jpg';
   ```

**To change the statistics:**

Find the `stats` array (around line 8-13):
```tsx
const stats = [
  { icon: Zap, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '3+', label: 'Years Experience' },
  { icon: Trophy, value: '15+', label: 'Happy Clients' },
  { icon: Target, value: '100+', label: 'Features Built' },
];
```

Change the numbers and labels to match your actual stats.

**To update your bio:**

Find the paragraphs section (around line 96+) and replace the text:
```tsx
<p className="text-muted-foreground text-lg leading-relaxed">
  Your new bio paragraph here. Talk about yourself, your background, and what you're passionate about.
</p>
```

---

### 4. **ExperienceSection Component** (`src/components/ExperienceSection.tsx`)

**What it does:** Shows your work experience and education in a timeline format.

**File location:** `src/components/ExperienceSection.tsx`

**Understanding the structure:**

There are two arrays: `workExperience` and `education`. Each item has:
- `title` - Job title or degree name
- `company` - Company or university name
- `location` - City and country
- `period` - Date range
- `description` - Brief overview
- `highlights` - Array of achievements/accomplishments
- `type` - Either 'work' or 'education'

**To add a new work experience:**

Find the `workExperience` array and add:
```tsx
{
  title: 'Senior Developer',
  company: 'Tech Company',
  location: 'San Francisco, USA',
  period: 'January 2023 – Present',
  description: 'Short description of what you do',
  highlights: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
  type: 'work',
},
```

**To add new education:**

Find the `education` array and add:
```tsx
{
  title: 'Certificate in Advanced React',
  company: 'Online Course Platform',
  location: 'Online',
  period: '2023',
  description: 'Certification in advanced React patterns',
  highlights: [
    'Learned advanced patterns',
    'Built complex projects',
  ],
  type: 'education',
},
```

**To update existing entries:**

Simply edit the text in the array. For example:
```tsx
{
  title: 'Change this job title',
  company: 'Change this company name',
  // ... rest of the object
},
```

---

### 5. **SkillsSection Component** (`src/components/SkillsSection.tsx`)

**What it does:** Shows your skills organized by category with proficiency bars.

**File location:** `src/components/SkillsSection.tsx`

**Understanding skill levels:**

Each skill has a `level` from 0-100:
- 0-30: Beginner
- 31-70: Intermediate
- 71-100: Expert

**To modify a skill:**

Find the skill in the `skillCategories` array:
```tsx
{ name: 'React / Next.js', level: 95 },
```

Change the name or level:
```tsx
{ name: 'React', level: 90 },  // Changed level from 95 to 90
```

**To add a new skill:**

Find a category and add to its `skills` array:
```tsx
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    color: 'primary',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Angular', level: 75 },  // New skill!
    ],
  },
];
```

**To add a new skill category:**

Add to the `skillCategories` array:
```tsx
{
  title: 'Mobile Development',
  icon: Smartphone,  // Need to import this icon first
  color: 'secondary',
  skills: [
    { name: 'React Native', level: 80 },
    { name: 'Flutter', level: 70 },
  ],
},
```

---

### 6. **ProjectsSection Component** (`src/components/ProjectsSection.tsx`)

**What it does:** Portfolio grid of your projects with category filtering.

**File location:** `src/components/ProjectsSection.tsx`

**To add a new project:**

Find the `projects` array and add:
```tsx
{
  title: 'My Awesome Project',
  description: 'A web application for managing tasks with real-time collaboration',
  tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
  category: 'web',  // Must match a category ID
  image: 'https://images.unsplash.com/photo-...',  // Optional
},
```

**Available categories:**

Check the `projectCategories` array. Common ones are:
- `'all'` - All projects
- `'web'` - Web applications
- `'design'` - Design projects
- `'fullstack'` - Full-stack applications

**To add a new category:**

Add to the `projectCategories` array:
```tsx
{ id: 'mobile', label: 'Mobile Apps' },
```

Then you can use this category when adding projects:
```tsx
{ category: 'mobile', ... }
```

---

### 7. **BlogSection Component** (`src/components/BlogSection.tsx`)

**What it does:** Shows blog article preview cards with images and metadata.

**File location:** `src/components/BlogSection.tsx`

**To add a blog post:**

Find the `blogPosts` array and add:
```tsx
{
  title: 'How to Build Scalable Web Applications',
  excerpt: 'Learn the principles and best practices for building systems that grow with your users...',
  category: 'Architecture',
  date: 'Dec 25, 2024',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-...',
},
```

**Available categories:**

- `'Architecture'`
- `'UI/UX'`
- `'Leadership'`
- `'AI & Development'`

**Note:** The category badges now display with white text for better visibility!

---

### 8. **ServicesSection Component** (`src/components/ServicesSection.tsx`)

**What it does:** Shows services you offer and pricing packages.

**File location:** `src/components/ServicesSection.tsx`

**To update services:**

Find the `services` array and modify:
```tsx
{
  title: 'Web Development',
  description: 'Custom web applications built with modern technologies',
  icon: Code,
  features: ['Responsive design', 'SEO optimized', 'High performance'],
},
```

---

### 9. **ContactSection Component** (`src/components/ContactSection.tsx`)

**What it does:** Contact form and contact information display.

**File location:** `src/components/ContactSection.tsx`

**To update contact information:**

Find the `contactInfo` array:
```tsx
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'your@email.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  // etc.
];
```

**To change email:**

```tsx
{ icon: Mail, label: 'Email', value: 'newemail@domain.com' },
```

---

### 10. **NetworkBackground Component** (`src/components/NetworkBackground.tsx`)

**What it does:** The animated network of dots and lines in the background.

**File location:** `src/components/NetworkBackground.tsx`

**How it works:**

1. Creates floating nodes (dots) on the canvas
2. Draws lines between nearby nodes
3. Animates nodes moving smoothly
4. Creates a modern, tech-forward effect

**Customization options:**

**Number of nodes (more = busier background):**
```tsx
// Around line 28
const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);
// Decrease the 25000 number to add more nodes
// Increase to have fewer nodes
```

**Node speed (how fast they move):**
```tsx
// Around line 32-33
vx: (Math.random() - 0.5) * 0.3,  // Change 0.3 to move faster/slower
vy: (Math.random() - 0.5) * 0.3,
```

**Connection distance (how far apart before they connect):**
```tsx
// Around line 57
const connectionDistance = 120;  // Change this number
```

---

## How to Make Changes

### The Basic Workflow

1. **Open the file** you want to edit in your code editor
2. **Find the section** you want to change (use Ctrl+F to search)
3. **Make your changes**
4. **Save the file** (Ctrl+S)
5. **See the changes** - the browser automatically refreshes!

### Example: Changing Your Name Everywhere

Search for "Abhishekh Dey" in your editor (Ctrl+Shift+F):

Files to change:
- `src/components/Navbar.tsx` - Top navigation
- `src/components/HeroSection.tsx` - Big heading
- `src/components/AboutSection.tsx` - About section
- `src/components/Footer.tsx` - Footer
- `index.html` - Browser tab title

---

## Adding & Updating Content

### Adding Your Profile Photo

**Step 1:** Get a photo
- Take a professional headshot (square works best)
- Size: 800x800px or larger
- Format: JPG or PNG

**Step 2:** Replace the placeholder
- Navigate to `src/assets/` folder
- Delete `profile-placeholder.jpg`
- Add your photo and name it `profile-placeholder.jpg`

**Or** (if you want a different filename):
- Put your photo in `src/assets/`
- Find this line in HeroSection.tsx:
  ```tsx
  import profilePhoto from '@/assets/profile-placeholder.jpg';
  ```
- Change it to:
  ```tsx
  import profilePhoto from '@/assets/yourphoto.jpg';
  ```

### Adding Background Images

Similarly, replace:
- `src/assets/hero-bg.jpg` - Large background for hero section
- `src/assets/about-bg.jpg` - Background for about section

**Recommended sizes:**
- Hero background: 1920x1080px or larger
- About background: 1920x1080px or larger

### Adding Company/University Logos

To display logos in the Experience section:

1. **Prepare your logos:**
   - Size: 64x64px or similar
   - Format: PNG (transparent background recommended)
   - Name them clearly: `genpact-logo.png`, `chandigarh-uni-logo.png`, `opjs-uni-logo.png`

2. **Where to upload:**
   ```
   Upload logos to: src/assets/logos/
   (Create the 'logos' folder if it doesn't exist)
   ```

3. **Once you have the logos, I can help you integrate them** into the ExperienceSection component to display next to each organization.

Please provide the logos and let me know where to upload them!

---

## Styling & Customization

### Changing Colors

All colors are defined in `src/index.css` in the `:root` section:

```css
:root {
  --primary: 185 100% 50%;      /* Cyan accent */
  --secondary: 270 80% 60%;     /* Violet accent */
  --background: 230 25% 5%;     /* Very dark blue */
  --foreground: 210 40% 96%;    /* Light text */
}
```

**To change the primary cyan color to blue:**
```css
--primary: 210 100% 50%;  /* Blue instead of cyan */
```

**To make the background lighter:**
```css
--background: 230 25% 15%;  /* Changed from 5% to 15% (lighter) */
```

### Using Tailwind Classes

Tailwind CSS makes styling easy with class names:

**Text colors:**
```tsx
<p className="text-foreground">Normal text</p>
<p className="text-primary">Cyan accent text</p>
<p className="text-secondary">Violet accent text</p>
<p className="text-muted-foreground">Gray text</p>
```

**Background colors:**
```tsx
<div className="bg-background">Dark background</div>
<div className="bg-card">Card background</div>
<div className="bg-primary/20">Cyan with 20% opacity</div>
```

**Spacing (padding & margin):**
```tsx
<div className="p-4">Padding on all sides</div>
<div className="px-6">Padding left & right</div>
<div className="py-2">Padding top & bottom</div>
<div className="mt-8">Margin top</div>
```

**Sizes:**
```tsx
<div className="w-full">Full width</div>
<div className="h-32">Height of 32 units</div>
<div className="rounded-lg">Rounded corners</div>
<div className="rounded-full">Completely round</div>
```

**Borders:**
```tsx
<div className="border">1px border</div>
<div className="border-2">2px border</div>
<div className="border-primary">Cyan border</div>
```

### Common Responsive Classes

Tailwind uses breakpoints for responsive design:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  /* Small on mobile, medium on tablets, large on desktop */
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  /* 1 column on mobile, 2 on tablet, 3 on desktop */
</div>
```

---

## Animations Explained

### How Framer Motion Works

Framer Motion lets you create smooth animations easily:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}    // Starting state
  animate={{ opacity: 1, y: 0 }}     // Ending state
  transition={{ duration: 0.6 }}     // How long it takes
>
  Content that fades in
</motion.div>
```

**Breaking it down:**
- `initial`: How the element looks before animation
- `animate`: What it looks like after animation
- `transition`: How it animates (duration, timing, etc.)

### Common Animation Patterns

**Fade in:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Fades in
</motion.div>
```

**Slide in from left:**
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  Slides in from left
</motion.div>
```

**Scale up:**
```tsx
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Grows into view
</motion.div>
```

**Hover effect:**
```tsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  Grows on hover
</motion.button>
```

### Scroll-based Animation

Elements animate when they scroll into view:

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  Animates when scrolling into view
</motion.div>
```

---

## Deployment Guide

### Building for Production

When you're ready to share your portfolio:

```bash
npm run build
```

This creates a `dist/` folder with optimized, minified files ready for the web.

### Deploying Options

#### **Option 1: Lovable Deployment (Easiest)**
If using Lovable:
1. Click "Publish" in the Lovable editor
2. Your site goes live at a unique URL

#### **Option 2: Vercel (Recommended)**

[Vercel](https://vercel.com) is the easiest option:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Your site is live!

#### **Option 3: Netlify**

[Netlify](https://netlify.com) is also easy:

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy!

#### **Option 4: Self-Hosting**

On any web host (AWS, Bluehost, etc.):

1. Run `npm run build`
2. Upload the `dist/` folder to your hosting
3. Set up a basic HTTP server to serve the files

---

## Troubleshooting

### Issue: Images Not Showing

**Problem:** Images in the portfolio aren't displaying.

**Solution:**
1. Check image is in `src/assets/` folder
2. Check the import path:
   ```tsx
   import profilePhoto from '@/assets/profile-placeholder.jpg';
   // Should start with @/assets/
   ```
3. Make sure file extension matches (case-sensitive on Linux)
4. Check image format is JPG or PNG

### Issue: Animations Not Working

**Problem:** Elements aren't animating smoothly.

**Solution:**
1. Make sure using `motion.div` not regular `div`
2. Check Framer Motion import:
   ```tsx
   import { motion } from 'framer-motion';
   ```
3. Verify TypeScript isn't showing errors

### Issue: Styles Not Applying

**Problem:** Tailwind classes aren't working.

**Solution:**
1. Check class name spelling exactly
2. Make sure it's a valid Tailwind class
3. Check if custom CSS class in `src/index.css`
4. Try running `npm run dev` again

### Issue: Build Errors

**Problem:** Getting errors when running `npm run build`.

**Solution:**
1. Run `npm install` to ensure all packages installed
2. Check for TypeScript errors in your code editor
3. Make sure all imports are correct
4. Look at the error message for specific line number

### Issue: Port Already in Use

**Problem:** Can't run `npm run dev` because port 5173 is in use.

**Solution:**
```bash
# Kill the process using port 5173 (Mac/Linux)
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

---

## Hand-over Documentation for Next Developer

### Welcome, Next Developer!

You've inherited a beautiful, modern portfolio built with React and TypeScript. This section helps you understand what's important and how to maintain it.

### Key Files to Know

**Most likely to modify:**
1. `src/components/ExperienceSection.tsx` - Update work experience and education
2. `src/components/SkillsSection.tsx` - Modify skills and proficiency
3. `src/components/ProjectsSection.tsx` - Add/remove projects
4. `src/components/BlogSection.tsx` - Manage blog posts
5. `src/index.css` - Change colors and styling

**Don't modify without understanding:**
1. `src/components/NetworkBackground.tsx` - Complex canvas animation
2. `tailwind.config.ts` - Typography and animation configs
3. `vite.config.ts` - Build configuration

**Safe to modify:**
1. `src/assets/` - Replace images freely
2. `src/components/Navbar.tsx` - Update navigation safely
3. `src/components/HeroSection.tsx` - Change headline/subtitle
4. Content in component arrays (experience, skills, projects)

### Architecture Overview

**Component Structure:**
```
Index.tsx (main page)
├── Navbar
├── HeroSection
├── AboutSection
├── ExperienceSection
├── SkillsSection
├── ProjectsSection
├── BlogSection
├── ServicesSection
├── ContactSection
└── Footer
```

Each component is self-contained and manages its own content. Modifying one won't break others.

### Common Tasks

#### Adding New Work Experience
```tsx
// File: src/components/ExperienceSection.tsx
// Add to workExperience array:
{
  title: 'Your Job Title',
  company: 'Company Name',
  location: 'City, Country',
  period: 'Month Year – Present',
  description: 'Brief summary',
  highlights: [
    'Achievement 1',
    'Achievement 2',
  ],
  type: 'work',
}
```

#### Adding New Skills
```tsx
// File: src/components/SkillsSection.tsx
// Find category, add to skills array:
{ name: 'New Skill', level: 85 }
```

#### Adding New Project
```tsx
// File: src/components/ProjectsSection.tsx
// Add to projects array:
{
  title: 'Project Name',
  description: 'What it does',
  tech: ['React', 'Node.js'],
  category: 'web',
  image: 'URL or path to image'
}
```

#### Adding New Blog Post
```tsx
// File: src/components/BlogSection.tsx
// Add to blogPosts array:
{
  title: 'Article Title',
  excerpt: 'Summary',
  category: 'Architecture',  // Or other category
  date: 'Month Day, Year',
  readTime: '5 min read',
  image: 'Image URL'
}
```

### Performance Considerations

1. **Images:** Optimize images before adding (use TinyPNG or ImageOptim)
2. **Animations:** Don't add too many - they can slow down older devices
3. **Components:** Keep component files small and focused
4. **Dependencies:** Before adding new packages, check if functionality exists

### Testing

Before deploying changes:
1. Run `npm run build` to check for errors
2. Test on mobile (Chrome DevTools - press F12, then Ctrl+Shift+M)
3. Test on different browsers (Chrome, Firefox, Safari)
4. Check animations are smooth (no stuttering)

### Future Improvements to Consider

1. **Add blog functionality with real posts**
2. **Integrate contact form with backend**
3. **Add dark/light theme toggle**
4. **Add more project filters**
5. **Integrate with CMS for content management**
6. **Add search functionality**
7. **Setup analytics tracking**
8. **Add newsletter signup**

### Environment Variables

Currently, no environment variables are needed. If you add:
- API calls
- Form submissions
- Analytics tracking
- Third-party integrations

You'll need to create a `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_FORM_ENDPOINT=https://form-handler.example.com
```

Then access with:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

### Useful Commands

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Check code for errors
```

### Git Workflow

When making changes:
```bash
git status                    # See what changed
git add .                     # Stage all changes
git commit -m "Description"   # Commit with message
git push                      # Push to repository
```

### Debugging Tips

**Browser DevTools (F12):**
- Console tab: See error messages
- Elements tab: Inspect HTML structure
- Network tab: See API calls
- Performance tab: Check animation performance

**VS Code Debugging:**
- Click line number to add breakpoint
- Press F5 to start debugging
- Step through code line by line

### Maintenance Checklist

- [ ] Update npm packages monthly: `npm update`
- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Test on real devices regularly
- [ ] Monitor build size: `npm run build` and check output
- [ ] Update content regularly (experience, projects, blog)
- [ ] Check analytics and engagement

### Contact & Questions

If you need help:
1. Check the main documentation sections above
2. Search component files for similar code patterns
3. Check React documentation: [react.dev](https://react.dev)
4. Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
5. Check Framer Motion docs: [framer.com/motion](https://www.framer.com/motion/)

---

## Summary

This portfolio is:
- ✅ Easy to customize and update
- ✅ Fast and performant
- ✅ Mobile responsive
- ✅ Well-organized and maintainable
- ✅ Built with modern best practices

Take your time understanding each component, and don't hesitate to experiment. Happy coding!

---

*Last Updated: December 2025*
*Documentation v2.0 - Comprehensive Guide for All Skill Levels*
