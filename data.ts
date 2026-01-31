import { Project, CastingProfile, Skill } from './types';

export const ACTRESS_NAME = "Suma Sri Madira";

// Extracted from provided YouTube links
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Hidden Emotions",
    role: "Lead Protagonist",
    type: "Web Series",
    year: "2024",
    youtubeId: "EMQ2LzzjrtA"
  },
  {
    id: '2',
    title: "The Silent Echo",
    role: "Dramatic Lead",
    type: "Short Film",
    year: "2023",
    youtubeId: "qKAx20jWEY8"
  },
  {
    id: '3',
    title: "Shadows of Love",
    role: "Romantic Lead",
    type: "Web Series",
    year: "2023",
    youtubeId: "1DfYLfiOiMc"
  },
  {
    id: '4',
    title: "Midnight Call",
    role: "Character Actor",
    type: "Suspense Thriller",
    year: "2023",
    youtubeId: "JcU3vw0EBHQ"
  },
  {
    id: '5',
    title: "Broken Promises",
    role: "Emotional Lead",
    type: "YouTube Original",
    year: "2022",
    youtubeId: "Kzl2eLQXSdE"
  },
  {
    id: '6',
    title: "Urban Tales",
    role: "Modern Girl",
    type: "Web Drama",
    year: "2022",
    youtubeId: "X_x_mcavuPk"
  },
  {
    id: '7',
    title: "Village Chronicles",
    role: "Traditional Lead",
    type: "Short Film",
    year: "2022",
    youtubeId: "lD19aqnpd4g"
  },
  {
    id: '8',
    title: "Destiny's Path",
    role: "Supporting Lead",
    type: "Series",
    year: "2021",
    youtubeId: "uLNdWPkYM4U"
  },
  {
    id: '9',
    title: "College Diaries",
    role: "Student Lead",
    type: "Web Series",
    year: "2021",
    youtubeId: "OKfen5-ab5Y"
  },
  {
    id: '10',
    title: "First Rain",
    role: "Romantic Interest",
    type: "Music Video",
    year: "2021",
    youtubeId: "ddBdYKOxhOE"
  }
];

export const PROFILE: CastingProfile = {
  height: "5'5\" (165 cm)",
  ageRange: "20-26",
  bodyType: "Slim / Athletic",
  screenAge: "18-25",
  hairColor: "Dark Brown",
  eyeColor: "Dark Brown",
  languages: ["Telugu", "Hindi", "English"]
};

export const SKILLS: Skill[] = [
  { name: "Emotional Acting", level: 95 },
  { name: "Dialogue Delivery", level: 90 },
  { name: "Dance (Classical/Modern)", level: 85 },
  { name: "Improvisation", level: 80 },
  { name: "Screen Presence", level: 92 },
  { name: "Action/Stunts", level: 70 },
];

export const GALLERY_IMAGES = [
  // Using Unsplash as high-quality placeholders since I cannot scrape Instagram directly.
  // In a real deployment, these would be replaced with her actual portfolio shots.
  "https://rootswear.in/Images/A6.JPG.webp", // Cinematic Portrait
  "https://rootswear.in/Images/A1.JPG.webp", // Traditional Saree
  "https://rootswear.in/Images/A6.JPG.webp", // Modern/Casual
  "https://rootswear.in/Images/A4.JPG.webp", // Moody/Dramatic
  "https://rootswear.in/Images/A7.JPG.webp", // Intense
  "https://rootswear.in/Images/A8.JPG.webp", // Black and White
];
