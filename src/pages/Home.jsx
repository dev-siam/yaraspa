// import Brands from "../components/Brands";
import ContactUs from "../components/ContactUs";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Hero from "../components/Hero";
import MoreAbout from "../components/MoreAbout";
import OurServices from "../components/OurServices";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className="grid gap-10">
      <Hero />
      <MoreAbout />
      <Features />
      <OurServices />
      <CTA />
      {/* <Brands /> */}
      <Testimonial/>
      <ContactUs/>
    </div>
  );
}
