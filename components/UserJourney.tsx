"use client";

import Image from "next/image";
import { userJourney } from "@/data/userJourney";

export default function UserJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {userJourney.title}
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="bg-gray-50 rounded-lg p-4 md:p-8">
              <Image
                src={userJourney.screenshot}
                alt={userJourney.screenshotAlt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}