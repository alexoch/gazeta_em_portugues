# Gazeta em Português - Daily Portuguese Learning Newspaper

A React-based daily newspaper application designed to help Portuguese language learners stay engaged with curated cultural, educational, and practical content in Portuguese.

## Project Overview

**Gazeta em Português** is a client-side React application that provides daily Portuguese learning content without requiring a backend server. The app aggregates diverse information about Portugal's culture, history, and traditions in a newspaper-style format.

### Key Features

- **Daily Weather** - Current weather information for Portugal
- **Catholic Calendar** - Portuguese Catholic holidays and religious observances
- **Today in History** - Important historical events and notable births relevant to Portugal
- **Daily Recipe** - Traditional Portuguese recipes with descriptions
- **Daily Poem** - Portuguese poems and literary pieces for language learning

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and development server
- **CSS/Responsive Design** - Mobile-first approach

## Project Structure

```
src/
├── components/
│   ├── Weather.tsx          # Weather component
│   ├── CatholicCalendar.tsx  # Catholic calendar and holidays
│   ├── History.tsx          # Historical events component
│   ├── Recipe.tsx           # Daily recipe component
│   ├── Poem.tsx             # Daily poem component
│   └── Layout.tsx           # Main page layout
├── data/
│   ├── weather.ts           # Weather data or API integration
│   ├── catholiceCalendar.ts # Catholic holidays database
│   ├── history.ts           # Historical events database
│   ├── recipes.ts           # Recipes database
│   └── poems.ts             # Poems database
├── App.tsx
└── main.tsx
```

## Development Tasks

### Phase 1: Component Development
- [ ] Create Weather component with real-time weather data
- [ ] Create Catholic Calendar component with Portuguese holidays
- [ ] Create History component with daily historical events and births in Portugal
- [ ] Create Daily Recipe component with Portuguese recipes
- [ ] Create Daily Poem component with Portuguese poems

### Phase 2: Data Integration
- [ ] Set up data storage for weather (API or local data)
- [ ] Set up data storage for Catholic Calendar events
- [ ] Set up data storage for historical events
- [ ] Set up data storage for recipes database
- [ ] Set up data storage for poems database

### Phase 3: UI/UX & Layout
- [x] Create main layout and page structure
- [ ] Implement responsive design for mobile and desktop
- [ ] Add styling and Portuguese language localization

### Phase 4: Testing & Deployment
- [ ] Test all components and functionality
- [ ] Create build and deployment documentation

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Data Sources Strategy

The app uses no external backend server. Data is managed through:
- **Static JSON files** for historical events, recipes, and poems
- **Weather API integration** (OpenWeatherMap or similar free tier)
- **Browser local storage** for user preferences if needed
- **CSS-driven responsive design** for all platforms

## Contributing

This is a personal learning project. Contributions are welcome for:
- Adding more historical events
- Expanding the recipe collection
- Including additional Portuguese poems
- Improving translations and localization

## License

MIT
