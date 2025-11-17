import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch slides.json
  useEffect(() => {
    fetch("/slides.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);


  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-md mb-12 mt-4">
      <AnimatePresence>
        {slides.map(
          (slide, idx) =>
            idx === index && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="flex flex-col flex-col-1 text-center">
                  <h2 className="text-white text-3xl md:text-5xl font-bold px-6 py-3 rounded-lg text-center">
                  {slide.title}
                </h2>
                <p className="text-white text-lg">{slide.subtitle}</p>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>


      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, id) => (
          <button
            key={id}
            onClick={() => setIndex(id)}
            className={`w-3 h-3 rounded-full ${
              id === index ? "bg-green-600" : "bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
