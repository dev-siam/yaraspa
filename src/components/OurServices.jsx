import { motion } from "framer-motion";
import { FaShippingFast, FaAward, FaTags, FaShieldAlt } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: <FaAward className="text-yellow-500 text-3xl" />,
      title: "Trusted Brands",
      description:
        "We partner with top-tier e-commerce brands to ensure quality and reliability.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FaShippingFast className="text-blue-500 text-3xl" />,
      title: "Fast Shipping",
      description:
        "Experience lightning-fast delivery to your doorstep with every order.",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaTags className="text-green-500 text-3xl" />,
      title: "Exclusive Deals",
      description:
        "Unlock special discounts and offers on a variety of premium products.",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-3xl" />,
      title: "Secure Payments",
      description:
        "Your transactions are safe and encrypted for a hassle-free shopping experience.",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-2">
        <motion.h3
          className="text-center text-blue-600 font-semibold uppercase mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h3>
        <motion.h2
          className="text-center text-4xl lg:text-5xl font-semibold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Why Choose Yaraspa
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`p-6 rounded-lg shadow-lg ${service.bgColor}`}
            >
              <motion.div
                className="mb-4"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {service.icon}
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
