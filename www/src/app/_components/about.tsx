import * as React from "react";
import { Canvas } from "./for_fun_canvas";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center justify-items-center md:justify-items-start">
        {/* Left: Canvas Showcase */}
        <Canvas />

        {/* Right: About Me */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            I&apos;m a Computer Science and Data Science student at SMU,
            aspiring to grow into a software engineer. I enjoy making
            things people actually find useful—whether that&apos;s a web
            app, or even food.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/logcho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/logcho04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-gray-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:lschoi@smu.edu"
              className="text-red-500 hover:text-gray-600 transition-colors"
            >
              <Mail size={28} />
            </a>
            <a
              href="tel:+19722345638"
              className="text-green-600 hover:text-gray-600 transition-colors"
            >
              <Phone size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
