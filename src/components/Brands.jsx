import HorizontalScroll from "react-scroll-horizontal";
import amazonLogo from "../assets/logos/amazonLogo.png";
import ebayLogo from "../assets/logos/ebayLogo.png";
import shopifyLogo from "../assets/logos/shopifyLogo.webp";
import walmartLogo from "../assets/logos/walmartLogo.png";
import aliexpressLogo from "../assets/logos/aliexpressLogo.png";
import flipkartLogo from "../assets/logos/flipkartLogo.png";
import rakutenLogo from "../assets/logos/rakutenLogo.png";

const Brands = () => {
  const brands = [
    amazonLogo,
    ebayLogo,
    shopifyLogo,
    walmartLogo,
    aliexpressLogo,
    flipkartLogo,
    rakutenLogo,
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <HorizontalScroll
          reverseScroll={true}
          config={{ stiffness: 100, damping: 20 }}
        >
          {brands.concat(brands).map((logo, index) => (
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
        </HorizontalScroll>
      </div>
    </section>
  );
};

export default Brands;
