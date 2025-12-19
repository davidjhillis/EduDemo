# Northwinds College - Demo Website

A demo website for a fictional liberal arts college built with Next.js to showcase ShowPilot, an agentic marketing platform. This site demonstrates how ShowPilot can guide visitors across the website and highlight key sections.

## Design Inspiration

The design follows the aesthetic of [Stanbridge University](https://www.stanbridge.edu/), featuring a clean, professional layout adapted for liberal arts education.

## Pages Included

- **Home** (`/`) - Hero section, program highlights, testimonials, awards, and CTAs
- **Admissions** (`/admissions`) - Application process, requirements, financial aid information
- **About Us** (`/about`) - Mission, vision, values, history, and accreditations
- **Campus Visit** (`/campus-visit`) - Campus overview, tour options, information sessions
- **Programs**:
  - **English & Literature** (`/programs/english`) - BA in English with creative writing concentration
  - **History** (`/programs/history`) - BA in History with various focus areas
  - **Psychology** (`/programs/psychology`) - BA in Psychology with clinical track
  - **Fine Arts** (`/programs/fine-arts`) - BFA and Art History tracks

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── admissions/         # Admissions page
│   ├── about/              # About Us page
│   ├── campus-visit/       # Campus Visit page
│   └── programs/           # Program pages
│       ├── nursing/
│       ├── occupational-therapy/
│       └── physical-therapy/
├── components/
│   ├── Navigation.tsx      # Main navigation component
│   └── Footer.tsx          # Footer component
└── package.json
```

## ShowPilot Integration

This demo site is designed to showcase ShowPilot's capabilities:

- **Guided Navigation**: Key sections are clearly marked for ShowPilot to highlight
- **Content Experiences**: Rich content sections perfect for interactive experiences
- **Question Answering**: Comprehensive information for ShowPilot to answer visitor questions
- **Personalization**: Multiple program options and pathways for personalized recommendations

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Customization

The site uses a color scheme based on program types:
- **Blue** - English & Literature programs and primary branding
- **Green** - History programs
- **Purple** - Psychology programs
- **Orange** - Fine Arts programs

You can customize colors, content, and styling in the respective component files.

## Notes

- This is a demo site for showcasing ShowPilot functionality
- All content is fictional and for demonstration purposes only
- The design is inspired by Stanbridge University but is not affiliated with them
- Northwinds College is a fictional liberal arts college created for demonstration purposes


