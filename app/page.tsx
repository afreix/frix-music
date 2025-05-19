import Hero from "./components/Hero";
import LatestRelease from "./components/WearYourStory"; // Component renamed but file name stays the same
import FeatureCarousel from "./components/FeatureCarousel";
import PortfolioGrid from "./components/PortfolioGrid";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import Marquee from "./components/Marquee";
import ContactForm from "./components/ContactForm";
import NewsletterSubscribe from "./components/NewsletterSubscribe";
import About from "./components/AboutUs"; // Component renamed but file name stays the same
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <LatestRelease /> */}
      <Marquee />
      <PortfolioGrid />
      <Testimonials />
      <FeatureCarousel />
      <About />
      {/* <Services /> */}
      <Events />
      {/* <Timeline /> */}
      <ContactForm />
      {/* <NewsletterSubscribe /> */}
    </>
  );
}
