export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Tristan Donzé",
  title: "Final-year Research Master’s student in ML",
  institution: "Institut Polytechnique de Paris",
  description:
    "I'm a final-year Research Master’s student in Machine Learning at Institut Polytechnique de Paris (École Polytechnique). You can find more about my work and projects here. I also have a blog where I share my thoughts on AI, research papers, and project updates.",
  email: "tristan.donze@polytechnique.edu",
  imageUrl: "/images/profile.jpeg",
//   googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "TristanDonze",
  linkedinUsername: "TristanDonze",
//   twitterUsername: "janesmith",
  blogUrl: "/blog",
  cvUrl: "/pdf/Tristan_Donzé_Resume.pdf",
  institutionUrl: "https://www.polytechnique.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
