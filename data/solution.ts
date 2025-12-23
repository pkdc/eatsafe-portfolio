export interface SolutionStep {
  number: number;
  description: string;
}

export interface SolutionScreenshot {
  src: string;
  alt: string;
}

export interface Solution {
  name: string;
  title: string;
  subtitle: string;
  screenshots: SolutionScreenshot[];
  overview: string;
  keyInnovation: string;
  steps: SolutionStep[];
}

export const solution: Solution = {
  name: "EatSafe",
  title: "Phase 1: The Hypothesis (EatSafe)",
  subtitle:
    "A rapid code prototype focused on validating the friction of the image upload experience.",
  screenshots: [
    {
      src: "/screenshots/eatsafe-inital-landing.png",
      alt: "EatSafe initial landing screen",
    },
    {
      src: "/screenshots/eatsafe-image-chosen.png",
      alt: "EatSafe image selection with thumbnail preview",
    },
    {
      src: "/screenshots/eatsafe-uploading.png",
      alt: "EatSafe uploading state with loading spinner",
    },
    {
      src: "/screenshots/eatsafe-upload-successful.png",
      alt: "EatSafe upload successful confirmation",
    },
  ],
  overview:
    `To test the 'entry point' of the experience, I prototyped the image upload and processing states in code. This allowed me to evaluate
    the interaction cost of uploading a photo versus the potential value, before committing to building the complex analysis logic.`,
  keyInnovation:
    `I utilised a 'Figma-to-Code' workflow (via Cursor and MCP) to instantly translate the upload UI components into working React code.
    This allowed me to verify the visual feedback loop (Upload → Loading State) in a live browser environment with zero manual coding time.`,
  steps: [
    {
      number: 1,
      description: "User engages with the file picker",
    },
    {
      number: 2,
      description: "Interface provides immediate visual feedback (thumbnail preview)",
    },
    {
      number: 3,
      description:
        "System enters 'Uploading' state (Loading Spinner) to manage user expectations",
    },
    {
      number: 4,
      description:
        "UI transitions to a 'Success' state, confirming data capture",
    },
  ],
};

