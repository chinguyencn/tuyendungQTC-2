import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import TrainingProgram from './components/TrainingProgram';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import TrainingSchedule from './components/TrainingSchedule';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import PromoPopup from './components/PromoPopup';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="features">
          <Features />
        </div>
        
        <div id="audience">
          <TargetAudience />
        </div>
        
        <div id="training">
          <TrainingProgram />
        </div>
        
        <div id="benefits">
          <Benefits />
        </div>
        
        <div id="portfolio">
          <Portfolio />
        </div>
        
        <TrainingSchedule />
        
        <RegistrationForm />
      </main>

      <Footer />
      
      {/* Interactive Elements */}
      <FloatingActions />
      <PromoPopup />
    </div>
  );
}
