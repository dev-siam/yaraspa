import { useRef } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ftsme6", // Replace with your EmailJS service ID
        "template_3amxch1", // Replace with your EmailJS template ID
        formRef.current,
        "AjPrzFZMJu3OUevus" // Replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          toast.success("🎉 Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            theme: "colored",
          });
        },
        (error) => {
          toast.error(
            "❌ Failed to send the message. Please try again later.",
            {
              position: "top-center",
              autoClose: 3000,
              theme: "colored",
            }
          );
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  

  return (
    <section className=" py-12 px-2  lg:px-6">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h3 className="text-center text-blue-600 font-semibold uppercase mb-2">
          Contact Us
        </h3>
        <h2 className="text-center text-4xl lg:text-5xl font-semibold text-gray-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-xl  text-gray-800 mb-8">
          Your trusted partner is here to help. Feel free to reach out to us!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4 p-4 bg-white/80  rounded-lg">
            <FaPhoneAlt className="text-blue-600 text-5xl" />
            <div className="grid gap-2">
              <p className="text-gray-500  text-2xl font-semibold">Phone</p>
              <p className="text-gray-700 font-medium">+7186 879 641</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white/80  rounded-lg">
            <FaEnvelope className="text-blue-600 text-5xl" />
            <div className="grid gap-2">
              <p className="text-gray-500  text-2xl font-semibold">Email</p>
              <p className="text-gray-700 font-medium">yaraspa2024@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white/80  rounded-lg">
            <FaMapMarkerAlt className="text-blue-600 text-5xl" />
            <div className="grid gap-2">
              <p className="text-gray-500  text-2xl font-semibold">Location</p>
              <p className="text-gray-700 font-medium">Elmont, NY-11003</p>
            </div>
          </div>
          
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-xl rounded-lg p-8 space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-800 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Enter the subject"
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-800 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-300"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
