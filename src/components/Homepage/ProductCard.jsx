import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProductCard = ({ index, name, link, img }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [animateProduct, setAnimateProduct] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateProduct(true);
    }
  }, [inView]);

  return (
    <div
      className="w-1/2 md:w-1/5 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial="hidden"
        animate={animateProduct ? "show" : "hidden"} // Use the animate state to control the animation
      >
        <Link
          to={link}
          className="rounded-[20px] py-5  min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <motion.img
            src={img}
            alt="Lift"
            className="sm:w-full rounded-md lg:max-h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: animateProduct ? 1 : 0 }} // Only animate opacity when inView
            transition={{ duration: 0.5 }}
          />
          <motion.h4
            className="text-2xl mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: animateProduct ? 1 : 0 }} // Only animate opacity when inView
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.h4>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProductCard;
