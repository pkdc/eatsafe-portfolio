"use client";

import { businessProblem } from "@/data/businessProblem";
import { renderTextWithBold } from "@/app/utils/text";

export default function BusinessProblem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {businessProblem.title}
          </h2>
          {businessProblem.description.map((text, index) => (
            <p
              key={index}
              className={`text-xl text-gray-600 max-w-3xl leading-relaxed ${
                index < businessProblem.description.length - 1 ? "mb-3" : ""
              }`}
            >
              {renderTextWithBold(text)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

