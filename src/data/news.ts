export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "September 2025",
    title: "Second place at {Tech: Europe} Paris AI Hackathon!",
    description: "We built MagnOSS, an AI-powered chess learning platform, and secured second place among 30+ teams at the {Tech: Europe} Paris AI Hackathon!",
    link: "https://github.com/TristanDonze/Chess-Trainer",
  }
];
