import { Navbar } from './components/Navbar';
import { HeroFrameAnimation } from './components/HeroFrameAnimation';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-white/30 selection:text-white">
      <Navbar />
      <main>
        <HeroFrameAnimation />
        <About />
        <Skills />
        <Projects />
        <Experience />
        
        {/* Currently Building Section */}
        <CurrentlyBuilding />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
