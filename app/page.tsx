import BusinessProblem from "@/components/BusinessProblem";
import DesignReviewSection from "@/components/DesignReviewSection";
import UsabilityTestingScenario from "@/components/UsabilityTestingScenario";
import UserResearch from "@/components/UserResearch";
import UserJourney from "@/components/UserJourney";
import SolutionShowcase from "@/components/SolutionShowcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center py-16 px-6">
        EatSafe Portfolio
      </h1>
      <BusinessProblem />
      <DesignReviewSection />
      <UsabilityTestingScenario />
      <UserJourney />
      <SolutionShowcase />
      <UserResearch />
    </main>
  );
}