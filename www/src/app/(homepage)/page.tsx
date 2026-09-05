import Main from "./_components/Main";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import TechnicalSpec from "./_components/TechnicalSpec";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Main />
      <Experience />
      <Projects />
      <TechnicalSpec />
      <Contact />
    </div>
  );
}
