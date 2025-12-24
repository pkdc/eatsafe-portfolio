export interface DesignIntentItem {
  label: string;
  description: string;
}

export interface DesignSection {
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
  caption: {
    intro?: string;
    description?: string;
    designIntent?: {
      title: string;
      items: DesignIntentItem[];
    };
  };
}

export interface InterfaceDesignAndLogic {
  title: string;
  sections: DesignSection[];
}

export const interfaceDesignAndLogic: InterfaceDesignAndLogic = {
  title: "Interface Design & Logic",
  sections: [
    {
      image: {
        src: "/screenshots/eatsafe-figma-design-WIP1.png",
        alt: "EatSafe Figma design workspace showing design system evolution",
        width: 2400,
        height: 1600,
        priority: true,
      },
      caption: {
        intro:
          "A bird's-eye view of the design workspace, showcasing the evolution from content mapping to the final UI.",
        designIntent: {
          title: "Design Intent:",
          items: [
            {
              label: "Design System:",
              description:
                "Established a lightweight library (color tokens and atomic components) early to ensure consistency across the application.",
            },
            {
              label: "Content-First:",
              description:
                "Evolved directly from content mapping to high-fidelity screens, prioritising information hierarchy over decoration.",
            },
            {
              label: "State Definition:",
              description:
                "Defined critical interaction states—such as 'Loading' and 'Error'—prior to code implementation to prevent logic gaps.",
            },
          ],
        },
      },
    },
    {
      image: {
        src: "/screenshots/eatsafe-figma-prototype-WIP1.png",
        alt: "EatSafe Figma prototype showing interactive sequence",
        width: 2400,
        height: 1600,
      },
      caption: {
        intro:
          "To move beyond static screens and establish the 'feel' of the application, I began prototyping the initial sequence.",
        designIntent: {
          title: "Design Intent:",
          items: [
            {
              label: "Grid Systems:",
              description:
                "Utilised a 4-column mobile grid to ensure touch targets met accessibility standards.",
            },
            {
              label: "Establishing Momentum:",
              description:
                "Connected the initial upload sequence (Landing → Success) to define the pacing and transition style for the app's entry point.",
            },
            {
              label: "Component Behavior:",
              description:
                "Built out interactive states for the dropdown menus to test the UI patterns before expanding to the rest of the flow.",
            },
          ],
        },
      },
    },
  ],
};

