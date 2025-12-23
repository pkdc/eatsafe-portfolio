export interface UsabilityScenario {
  title: string;
  subtitle: string;
  prompt: string;
  description: string;
  allergies: string[];
  context: string;
  constraints: string[];
  note: string;
}

export const usabilityScenario: UsabilityScenario = {
  title: "Usability Testing Scenario",
  subtitle: 'I initially designed "EatSafe" as a medical safety device for severe allergy sufferers.',
  prompt: "Imagine yourself in a scenario:",
  description:
    "You have food allergy on seafood and egg, and you are having dinner in a friend's home, but you don't want your friend to know that you have food allergy and you don't want to seem rude to interrogate your friend for every ingredient.",
  allergies: ["seafood", "egg"],
  context: "Having dinner at a friend's home",
  constraints: [
    "Don't want friend to know about allergies",
    "Don't want to seem rude by asking about ingredients",
  ],
  note: "This scenario highlights the need for a discreet, non-intrusive way to check food safety without drawing attention or making others feel uncomfortable.",
};

