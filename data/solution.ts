export interface SolutionStep {
  number: number;
  description: string;
}

export interface Solution {
  name: string;
  title: string;
  subtitle: string;
  screenshot: string;
  screenshotAlt: string;
  overview: string;
  keyInnovation: string;
  steps: SolutionStep[];
}

export const solution: Solution = {
  name: "EatSafe",
  title: "My Solution: EatSafe",
  subtitle:
    "An innovative approach to food safety that leverages computer vision to help people with food allergies make informed decisions",
  screenshot: "/screenshots/eatsafe.png",
  screenshotAlt: "EatSafe app screenshot showing food image upload interface",
  overview:
    "An app that user can upload images of food and get back a list of potential allergens.",
  keyInnovation:
    "Unlike existing solutions that rely on barcode scanning or manual ingredient list reading, EatSafe uses advanced image recognition technology to analyze food photos directly. This makes it easier for users to check food safety, especially in situations where barcodes aren't available or ingredient lists are hard to read.",
  steps: [
    {
      number: 1,
      description: "User takes or uploads a photo of food",
    },
    {
      number: 2,
      description: "AI analyzes the image to identify food items",
    },
    {
      number: 3,
      description:
        "App returns a list of potential allergens present in the food",
    },
  ],
};

