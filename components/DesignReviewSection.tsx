"use client";

import Image from "next/image";
import { competitors, type Competitor } from "@/data/competitors";
import { renderTextWithBold } from "@/app/utils/text";

export default function DesignReviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Design Review of Existing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive analysis of competitor products and existing solutions
            to identify design patterns, strengths, and opportunities for
            improvement.
          </p>
        </div>

        <div className="space-y-16">
          {competitors.map((competitor, index) => (
            <div
              key={competitor.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                {/* Screenshot Section */}
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <div className="relative w-full max-w-md">
                    <Image
                      src={competitor.screenshot}
                      alt={competitor.screenshotAlt}
                      width={800}
                      height={1600}
                      className="w-full h-auto rounded-lg shadow-lg"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {competitor.name}
                  </h3>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                        Platforms
                      </h4>
                      <p className="text-base">{competitor.platforms}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                        Core Features
                      </h4>
                      <p className="text-base whitespace-pre-line">
                        {renderTextWithBold(competitor.coreFeatures)}
                      </p>
                    </div>

                    {competitor.detectionMethod && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                          Detection Method
                        </h4>
                        <p className="text-base">
                          {competitor.detectionMethod}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

