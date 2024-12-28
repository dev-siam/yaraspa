// import HorizontalScroll from "react-scroll-horizontal";
import amazonLogo from "../assets/logos/amazonLogo.png";
import ebayLogo from "../assets/logos/ebayLogo.png";
import shopifyLogo from "../assets/logos/shopifyLogo.webp";
import walmartLogo from "../assets/logos/walmartLogo.png";
import aliexpressLogo from "../assets/logos/aliexpressLogo.png";
import flipkartLogo from "../assets/logos/flipkartLogo.png";

import Marquee from "react-marquee-slider";

const Brands = () => {
  const brands = [
    amazonLogo,
    ebayLogo,
    shopifyLogo,
    walmartLogo,
    aliexpressLogo,
    flipkartLogo,
  ];

  return (
    <section className=" py-10">
      <div className="container mx-auto">
        <Marquee velocity={25}>
          {brands.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 sm:w-48 lg:w-52 h-16 flex justify-center items-center mx-4"
            >
              <img
                src={logo}
                alt={`Brand ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
