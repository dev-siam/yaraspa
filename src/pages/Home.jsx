// import Brands from "../components/Brands";
import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Hero from "../components/Hero";
import MoreAbout from "../components/MoreAbout";
import Services from "../components/Services";





export default function Home() {
  return (
    <div className="grid gap-10">
      
      <Hero/>
      <MoreAbout/>
      <Features/>
      <Services/>
      <CallToAction/>
      {/* <Brands/> */}
    </div>
  );
}
