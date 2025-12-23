"use client";

import Image from "next/image";
import { solution } from "@/data/solution";

export default function SolutionShowcase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.subtitle}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
            {/* Content Section */}
            <div className="flex flex-col justify-center order-1 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {solution.name}
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Solution Overview
                  </h4>
                  <p className="text-base">{solution.overview}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Key Innovation
                  </h4>
                  <p className="text-base">{solution.keyInnovation}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    How It Works
                  </h4>
                  <ul className="text-base space-y-2 list-none">
                    {solution.steps.map((step) => (
                      <li key={step.number} className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">
                          {step.number}.
                        </span>
                        <span>{step.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Screenshot Section */}
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4 order-2 lg:order-2">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {solution.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative w-full">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={400}
                      height={800}
                      className="w-full h-auto rounded-lg shadow-lg"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

