export interface Education {
  year: string;
  institution: string;
  degree: string;
  description?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
{
    year: "2024—Present",
    institution: "Institut Polytechnique de Paris",
    // description: "Research Master’s in Machine Learning",
    degree: "M.S. in Artificial Intelligence",
    description: "Research Master’s in AI (English-taught) | Courses delivered at École Polytechnique & Télécom Paris",
},
{
    year: "2021—2024",
    institution: "University Paris 8",
    degree: "B.S. in Computer Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
