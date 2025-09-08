"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { About } from "./_components/about";
import { Projects } from "./_components/projects";

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
    }, 700);
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
          <motion.div
            key="main"
            className="w-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <About />
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
