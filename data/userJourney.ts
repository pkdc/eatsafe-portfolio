export interface UserJourney {
  title: string;
  subtitle: string;
  screenshot: string;
  screenshotAlt: string;
}

export const userJourney: UserJourney = {
  title: "Initial Proposed User Journey",
  subtitle: 'I mapped out a flow based on the assumption that users would want AI to detect allergens for safety.',
  screenshot: "/screenshots/eatsafe-user-journey.png",
  screenshotAlt: "EatSafe user journey diagram",
};

