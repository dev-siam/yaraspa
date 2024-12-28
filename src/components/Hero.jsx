import { FaPlay } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/hero-image.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  // Hook for controlling animation on scroll
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className=" dark:bg-gray-800 py-16"
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <div className="container mx-auto px-2 grid lg:grid-cols-2 items-center justify-center ">
        {/* Text Section */}
        <div className="text-center lg:text-left grid gap-3">
          <motion.div
            className="mb-4 flex justify-center lg:justify-start"
            variants={fadeInUp}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
              <span className="mr-2">🎉</span> Explore Our Products Today!
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight lg:text-6xl"
            variants={fadeInUp}
          >
            With <span className="text-blue-500">Yaraspa</span>
          </motion.h1>

          <motion.h1
            className="text-4xl font-semibold text-gray-800 dark:text-gray-100 leading-tight lg:text-6xl"
            variants={fadeInUp}
          >
            Discover the Future of Online Shopping
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-300 text-lg"
            variants={fadeInUp}
          >
            Your Products, Your Marketplace – Showcased to Millions.
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center lg:justify-start items-center gap-4"
            variants={fadeInUp}
          >
            <Link
              to="/products"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Explore More
            </Link>
            <button className="flex items-center px-4 py-3 text-blue-600 rounded-lg shadow-md hover:text-blue-700 transition">
              <FaPlay className="mr-2" /> Play Video
            </button>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className=" flex justify-center relative"
          variants={fadeIn}
        >
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full object-cover"
          />
          <motion.div
            className="absolute bottom-0 right-2 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3"
            variants={fadeIn}
          >
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="User 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-sm text-gray-700">
              12,000+ Sellers Trust Yaraspa
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
