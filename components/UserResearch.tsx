"use client";

import Image from "next/image";
import { userResearch } from "@/data/userResearch";
import { renderTextWithBold } from "@/app/utils/text";

export default function UserResearch() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {userResearch.title}
          </h2>
        </div>

        {/* Survey Images Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {userResearch.surveyImages.map((image, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-center justify-center"
              >
                <Image
                  src={image}
                  alt={`Google Survey ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Research Image */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="bg-gray-50 rounded-lg p-4 md:p-8">
                <Image
                  src={userResearch.researchImage}
                  alt={userResearch.researchImageAlt}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg mx-auto max-w-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-lg max-w-4xl">
          <div className="space-y-3 text-base text-gray-700 leading-relaxed">
            {userResearch.conclusion.map((text, index) => (
                <p key={index}>{renderTextWithBold(text)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

