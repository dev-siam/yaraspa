import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Johnson",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Yara Spa provided an amazing experience! The staff was professional.",
  },
  {
    name: "Michael Brown",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Outstanding service! The best spa experience I have ever had.",
  },
  {
    name: "Sophia Garcia",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    review:
      "Absolutely wonderful! Every detail was perfect, from the ambiance to the treatments.",
  },
  {
    name: "Ethan Wilson",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "This place is a gem! The staff was kind and attentive.",
  },
  {
    name: "Olivia Martinez",
    photo: "https://randomuser.me/api/portraits/women/54.jpg",
    review:
      "The team is so welcoming, and every visit is a treat. ",
  },
  {
    name: "Jems Wali",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    review:
      "Highly recommend to anyone looking for a premium experience!",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 px-2 lg:px-6 ">
      
      <div>
        <motion.h3
          className="text-center text-blue-600 font-semibold uppercase mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Reviews
        </motion.h3>
        <motion.h2
          className="text-center text-4xl lg:text-5xl font-semibold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What Our Clients Say
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4 transform transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full border-2 border-blue-600"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600">{testimonial.review}</p>
            <div className="flex justify-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
