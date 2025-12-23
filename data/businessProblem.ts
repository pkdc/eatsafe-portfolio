export interface BusinessProblem {
  title: string;
  description: string[];
}

export const businessProblem: BusinessProblem = {
  title: "Business Problem",
  description: [
    `For people with dietary restrictions, dining out or eating at friends' homes presents a conflict.
    Existing solutions (barcode scanners) work in supermarkets but fail in social settings.`,
    "The Gap: Users often eat unsafe food simply to avoid being the 'difficult guest' who interrogates the host.",
    "The Opportunity: A tool that bridges the gap between strict safety and social fluidity.",
  ],
};

