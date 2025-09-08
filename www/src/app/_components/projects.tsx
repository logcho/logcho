import * as React from "react";

export const Projects: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8">
      {/* Projects Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects/Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card */}
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              {/* Project Image */}
            <img
                src="/worldtycoon.png"
                alt="World Tycoon preview"
                className="w-full h-48 object-contain rounded-xl mb-4 bg-gray-100"
            />

            <h3 className="text-xl font-semibold mb-2">World Tycoon</h3>
            <p className="text-gray-600 mb-4">
              Built a web port of the game Micropolis using the original C++ engine and connected it to blockchain.
            </p>
            <a
              href="https://github.com/logcho/worldtycoon"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
          {/* Project Card */}
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              {/* Project Image */}
            <img
                src="/atf_logo.png"
                alt="ATF logo preview"
                className="w-full h-48 object-contain rounded-xl mb-4 bg-gray-100"
            />

            <h3 className="text-xl font-semibold mb-2">ATF Solutions</h3>
            <p className="text-gray-600 mb-4">
                Commisioned to build and deploy a next.js web app.
            </p>
            <a
              href="https://atfsolutions.net/"
              className="text-blue-600 font-medium hover:underline"
            >
              View website →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
