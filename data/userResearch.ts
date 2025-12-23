export interface UserResearch {
  title: string;
  conclusion: string[];
  surveyImages: string[];
  researchImage: string;
  researchImageAlt: string;
}

export const userResearch: UserResearch = {
  title: "User Research",
  conclusion: [
    `The initial goal of this project was to build a medical safety net for users with life-threatening allergies.
    However, the discovery phase revealed a critical barrier: Trust.`,
    `Quantitative research indicated that users with severe allergies (e.g., anaphylaxis)
    require 100% certainty - a standard currently impossible for Generative AI to guarantee visually.`,
    `This realisation led me to pivot the project to a more accessible solution:
    a food safety checker that provides users with a high degree of confidence in the safety of the food they are consuming.`,
  ],

  surveyImages: [
    "/screenshots/EatSafe_google_survey_1.svg",
    "/screenshots/EatSafe_google_survey_2.svg",
    "/screenshots/EatSafe_google_survey_3.svg",
    "/screenshots/EatSafe_google_survey_4.svg",
    "/screenshots/EatSafe_google_survey_5.svg",
    "/screenshots/EatSafe_google_survey_6.svg",
    "/screenshots/EatSafe_google_survey_7.svg",
    "/screenshots/EatSafe_google_survey_8.svg",
    "/screenshots/EatSafe_google_survey_9.svg",
  ],
  researchImage: "/screenshots/EatSafe-User-rsearch.png",
  researchImageAlt: "EatSafe User Research findings",
};

