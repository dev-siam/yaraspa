import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from JSON file
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 20)))
      .catch((error) => console.error("Error:", error.message));
  }, []);

  return (
    <div className="container mx-auto px-2 py-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-center text-blue-600 font-semibold uppercase mb-2">
          Products
        </h3>
        <h2 className="text-center text-4xl lg:text-5xl font-semibold text-gray-800 mb-12">
          Explore Our Premium Products
        </h2>
      </motion.h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-2 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-2xl mb-4 lazy-loading "
              loading="lazy"
            />

            {/* Product Info */}
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-600 hover:underline"
            >
              View Product
            </a>
          </motion.div>
        ))}
      </div>

      {/* see more btn  */}
      <Link to="/products">
        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            See More Products
          </button>
        </div>
      </Link>
    </div>
  );
}
