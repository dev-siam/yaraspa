import CTA from "../components/CTA";
import MoreAbout from "../components/MoreAbout";
import Services from "../components/OurServices";
import Testimonial from "../components/Testimonial";

export default function About() {
  return (
    <div>
      <MoreAbout />
      <Services />
      <CTA />
      <Testimonial/>
    </div>
  );
}
