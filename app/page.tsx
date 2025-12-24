import BusinessProblem from "@/components/BusinessProblem";
import DesignReviewSection from "@/components/DesignReviewSection";
import UsabilityTestingScenario from "@/components/UsabilityTestingScenario";
import UserJourney from "@/components/UserJourney";
import InterfaceDesignAndLogic from "@/components/InterfaceDesignAndLogic";
import SolutionShowcase from "@/components/SolutionShowcase";
import UserResearch from "@/components/UserResearch";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BusinessProblem />
      <DesignReviewSection />
      <UsabilityTestingScenario />
      <UserJourney />
      <InterfaceDesignAndLogic />
      <SolutionShowcase />
      <UserResearch />
    </main>
  );
}