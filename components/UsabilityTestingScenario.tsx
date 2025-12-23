"use client";

import { usabilityScenario } from "@/data/scenario";

export default function UsabilityTestingScenario() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {usabilityScenario.title}
          </h2>
        </div>

        <div className="bg-gray-50 border-l-4 border-yellow-600 rounded-r-lg p-8 md:p-10 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg font-medium text-gray-900 mb-4">
              {usabilityScenario.prompt}
            </p>
            <p className="text-base">
              You have food allergy on{" "}
              {usabilityScenario.allergies.map((allergy, index) => (
                <span key={allergy}>
                  <strong className="text-gray-900">{allergy}</strong>
                  {index < usabilityScenario.allergies.length - 1 && " and "}
                </span>
              ))}
              , and you are having dinner in a friend's home, but you don't want
              your friend to know that you have food allergy and you don't want to
              seem rude to interrogate your friend for every ingredient.
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                {usabilityScenario.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

