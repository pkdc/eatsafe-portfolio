"use client";

import Image from "next/image";
import { interfaceDesignAndLogic } from "@/data/interfaceDesignAndLogic";

export default function InterfaceDesignAndLogic() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {interfaceDesignAndLogic.title}
          </h2>
        </div>

        <div className="space-y-16">
          {interfaceDesignAndLogic.sections.map((section, index) => (
            <div key={index}>
              <div className="flex justify-center mb-6">
                <div className="w-full max-w-6xl">
                  <div className="bg-gray-50 rounded-lg p-4 md:p-8">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width || 2400}
                      height={section.image.height || 1600}
                      className="w-full h-auto rounded-lg shadow-lg"
                      priority={section.image.priority || false}
                    />
                  </div>
                </div>
              </div>
              <div className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-4">
                {section.caption.intro && <p>{section.caption.intro}</p>}
                {section.caption.description && (
                  <p>{section.caption.description}</p>
                )}
                {section.caption.designIntent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      {section.caption.designIntent.title}
                    </p>
                    <ul className="space-y-2 list-disc ml-6 pl-2">
                      {section.caption.designIntent.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <strong className="text-gray-900">{item.label}</strong>{" "}
                          {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

