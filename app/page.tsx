import BusinessProblem from "@/components/BusinessProblem";
import DesignReviewSection from "@/components/DesignReviewSection";
import UsabilityTestingScenario from "@/components/UsabilityTestingScenario";
import UserResearch from "@/components/UserResearch";
import UserJourney from "@/components/UserJourney";
import SolutionShowcase from "@/components/SolutionShowcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BusinessProblem />
      <DesignReviewSection />
      <UsabilityTestingScenario />
      <UserResearch />
      <UserJourney />
      <SolutionShowcase />
    </main>
  );
}