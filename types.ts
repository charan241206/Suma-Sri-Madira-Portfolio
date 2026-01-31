export interface Project {
  id: string;
  title: string;
  role: string;
  type: string;
  year: string;
  youtubeId: string;
  thumbnail?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface CastingProfile {
  height: string;
  ageRange: string;
  bodyType: string;
  screenAge: string;
  hairColor: string;
  eyeColor: string;
  languages: string[];
}