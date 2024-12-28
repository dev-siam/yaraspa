import { motion } from "framer-motion";
import FeaturesImage from '../assets/features.png'

const Features = () => {
  return (
    <section className="p">
      <div className="container mx-auto px-2 ">
        <h3 className="text-center text-blue-600 font-semibold uppercase mb-2">
          Features
        </h3>
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8">
          What Makes Yaraspa Stand Out
        </h2>
        <div className="grid sm:flex justify-center items-center gap-2 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium shadow-lg"
          >
            Trusted Brands
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full font-medium shadow-lg"
          >
            Fast Shipping
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full font-medium shadow-lg"
          >
            Exclusive Deals
          </motion.button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Why Choose Us</h3>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Your One-Stop Shop for Quality Products
            </h2>
            <p className="text-gray-600 mb-6">
              At Yaraspa, we partner with top e-commerce platforms to bring you
              the best products at unbeatable prices. From tech gadgets to home
              essentials, we prioritize quality, convenience, and value.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">✔</span>
                <span>Wide selection of trusted brands</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">✔</span>
                <span>Fast and reliable shipping</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">✔</span>
                <span>Exclusive discounts and offers</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">✔</span>
                <span>Dedicated 24/7 customer support</span>
              </li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={FeaturesImage}
              alt="Features illustration"
              className="rounded-lg w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
