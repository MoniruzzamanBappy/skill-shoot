import Footer from "../../components/appbars/footer/Footer";
import About from "./components/About";
import Clients from "./components/Clients";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Hero from "./components/Hero";
import JoinSection from "./components/JoinSection";
import Pricing from "./components/Pricing";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";

const HomePageUI = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Subscribe />
      <Features />
      <Courses />
      <About />
      <JoinSection />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePageUI;
