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
                  <div className="mt-2">
                  <a
                    href={solution.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700 shadow-md gap-2"
                  >
                    {/* Optional: Add a Play/External Link icon here */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>

                    {solution.demoLabel}
                  </a>

                  <p className="mt-2 text-xs text-gray-500">
                    *Live React/Vite deployment. Best viewed on mobile.
                  </p>
                </div>
                </div>


                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Key Innovation
                  </h4>
                  <p className="text-base mb-3">{solution.keyInnovation}</p>
                  <p className="text-base">{solution.demoLabel}</p>
                  <a href={solution.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    View the Live Result
                  </a>
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

