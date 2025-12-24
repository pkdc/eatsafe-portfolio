export interface Competitor {
  id: string;
  name: string;
  screenshot: string;
  screenshotAlt: string;
  platforms: string;
  coreFeatures: string;
  detectionMethod?: string;
}

export const competitors: Competitor[] = [
  {
    id: "fig",
    name: "Fig – Food Scanner & Discovery",
    screenshot: "/screenshots/fig.png",
    screenshotAlt: "Fig - Food Scanner & Discovery app screenshot",
    platforms: "iOS, Android",
    coreFeatures:
      'Fig is a comprehensive diet and allergen management app that supports virtually "EVERY dietary restriction and allergy", with over 2,800 possible profile customisations. Users create a personal profile selecting their allergens (e.g. peanuts, tree nuts, eggs, shellfish, etc.) or other diet needs (gluten-free, low FODMAP, etc.). The app then lets you scan product barcodes to instantly check if a product\'s ingredients are safe for you. It also provides a discovery feature to find new foods that fit your diet at over 100 grocery stores and some restaurants. Multiple user profiles ("Multiple Figs") can be managed, making it easier for families with different allergies.',
    detectionMethod:
      "Barcode scanning is the primary method – point your phone at a product's UPC and Fig shows whether the ingredients contain any of your flagged allergens. In addition, Fig's database allows manual searching and browsing of foods that are safe for your profile.",
  },
  {
    id: "allergyforce",
    name: "AllergyForce",
    screenshot: "/screenshots/AllergyForce.webp",
    screenshotAlt: "AllergyForce app screenshot",
    platforms: "iOS, Android",
    coreFeatures:
      'AllergyForce is an all-in-one food allergy management app with a host of features, among which is a powerful food product allergen scanner. Users create an Allergy Profile in the app by selecting their allergens from a list of common and less-common allergens (the app lets you manage up to 24 allergens per profile). The 12 most common allergens are pre-listed – **"Eggs, Corn, Fish, Milk, MSG, Mustard, Peanuts, Sesame, Shellfish, Soy, Tree Nuts, and Wheat"** – and you can add 12 more custom allergens as needed. Once your profile is set, you can scan food barcodes: the app will compare the product\'s ingredients (from multiple databases and a hidden allergen list) with your profile. If any of your allergens are found, it gives a clear "RED – STOP" warning and identifies the ingredient that was a match. If none of your allergens are found, it gives a "YELLOW – Be Cautious" signal, advising you to still read the label (for possible traces or warnings). This scanner acts like a "second set of eyes" for label reading.\n\nBeyond scanning, AllergyForce includes other useful tools: a restaurant database (with dining-out advice and an Allergy Explanation Card to show staff), emergency quick-call and reaction management guidance, a peanut recall alert service, and more (some features are premium). Essentially, it aims to be a daily companion app for allergy sufferers.',
  },
];

