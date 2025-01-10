import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-8xl mx-auto">
        <HeroSection />
        <div className="container mx-auto">
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
