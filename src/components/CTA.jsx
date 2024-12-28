import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-blue-500 relative overflow-hidden rounded-2xl">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Yaraspa Today
        </motion.h2>
        <motion.p
          className="text-lg text-white/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore exclusive deals, trusted brands, and the best in e-commerce.
        </motion.p>
        <Link to="contact">
          <motion.button
            className="px-6 py-3 border border-white text-white font-medium rounded-full hover:bg-white hover:text-blue-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Now
          </motion.button>
        </Link>
      </div>

      {/* Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-blue-300 rounded-full opacity-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500 rounded-lg opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  );
};

export default CTA;
