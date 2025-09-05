"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });

    setTimeout(() => {
      setShowIntro(false);
      setRipple(null);
    }, 700); // match transition timing
  };

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 overflow-hidden">
      <AnimatePresence>
        {showIntro ? (
          <motion.section
            key="intro"
            className="relative flex min-h-screen items-center justify-center cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={handleClick}
          >
            <div className="flex flex-col items-center p-6 z-10">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-center">
                Hello World
              </h1>
              <h2 className="mt-4 text-lg md:text-xl font-light tracking-wide text-gray-600 self-end">
                – Logan Choi
              </h2>
            </div>

            {/* Ripple effect */}
            {ripple && (
              <motion.div
                className="absolute bg-gray-300 rounded-full"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 20,
                  height: 20,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 50, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            )}
          </motion.section>
        ) : (
          <motion.section
            key="main"
            className="min-h-screen w-full flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1>A work in progress</h1>

            <div className="flex items-center justify-center gap-4">
              <img
                src="/logan.png"
                alt="Logan Choi"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover"
              />
              <h1 className="max-w-3xl text-xl md:text-2xl font-thin tracking-tight text-justify">
                
                I&apos;m an aspiring software engineer. I&apos;m a student studying
                Computer Science and Data Science @ SMU. I love creating things
                that people need. From creating web apps to baking and cooking, I
                love making.
              </h1>
            </div>
            
            {/* <div className="flex flex-col justify-center items-center mt-8">
              <img
                src="/monkey.webp"
                alt="monkey"
                className="w-32 h-32 md:w-40 md:h-40 shadow-lg object-cover"
              />
              <h2>
                "Hiring me is pretty cool..."
              </h2>
            </div> */}
            {/* Contact / Social Icons */}
            <div className="mt-10 flex gap-6">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:your@email.com"
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                <Mail size={28} />
              </a>
              <a
                href="tel:+1234567890"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Phone size={28} />
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
