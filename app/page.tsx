import BusinessProblem from "@/components/BusinessProblem";
import DesignReviewSection from "@/components/DesignReviewSection";
import UsabilityTestingScenario from "@/components/UsabilityTestingScenario";
import SolutionShowcase from "@/components/SolutionShowcase";
import UserJourney from "@/components/UserJourney";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BusinessProblem />
      <DesignReviewSection />
      <UsabilityTestingScenario />
      <UserJourney />
      <SolutionShowcase />
    </main>
  );
}