import { motion } from "framer-motion";
import Ecommerce from "../assets/ecommerce.jpg";

const MoreAbout = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-2 md:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-blue-600 font-semibold uppercase mb-2">
              About Us
            </h3>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 leading-tight">
              Discover the Best Deals on Top Products
            </h2>
            <p className="text-gray-600 mb-6">
              At Yaraspa, we specialize in showcasing top-tier e-commerce
              products from Amazon, Walmart, and eBay. Whether you are looking
              for the latest gadgets, home essentials, or exclusive deals, we
              have got you covered.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-gray-800">
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">✔</span>
                <span>Trusted Brands</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">✔</span>
                <span>Fast Shipping</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">✔</span>
                <span>Exclusive Deals</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">✔</span>
                <span>24/7 Support</span>
              </li>
            </ul>
            <div className="mt-6 grid sm:grid-cols-2 items-center justify-around gap-4">
              <div className="flex items-center space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/50.jpg"
                  alt="Profile"
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Founder, Yaraspa</p>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Call us anytime</p>
                <p className="text-lg font-bold text-blue-600">
                  +7 186 879 641
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Content with Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={Ecommerce}
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              <h4 className="font-semibold">10+ Years</h4>
              <p className="text-sm">of eCommerce Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
