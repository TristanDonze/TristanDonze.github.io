export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep. 2025 - Present",
    title: "Freelance AI Engineer",
    company: "Histia",
    description:
      "Developed an autonomous multi-agent pipeline for analyzing company websites and generating investment-grade reports. " +
      "Processed textual content (markdown) and visual context (screenshots) for complete page understanding. " +
      "Merged page-level summaries into unified insights describing products, strategy and positioning. " +
      "Implemented a coordination mechanism to direct navigation based on missing report information. " +
      "Designed to automate analyst workflows for VC funds, incubators and M&A advisory teams. ",
    companyUrl: "https://histia.net",
  },
  {
    date: "Apr. 2025 - Aug. 2025",
    title: "Applied Research Intern",
    company: "Histia",
    description:
      "Designed an end-to-end system for company logo detection and identification in natural images. " +
      "Prepared and standardized a ~3M instance dataset with a real-world annotated test set. " +
      "Reviewed state-of-the-art methods and fine-tuned CLIP with contrastive learning and LoRA. " +
      "Improved performance through iterative error analysis and targeted data augmentations. " +
      "Achieved 94.6 percent Top-1 accuracy, surpassing the baseline by more than ten points. ",
    companyUrl: "https://histia.net",
  },
];
