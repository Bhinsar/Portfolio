import React from "react";
import Spline from "@splinetool/react-spline";
import { ArrowDown } from "lucide-react";

function Hero() {

  return (
    <section className="px-4 py-12 mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto overflow-hidden lg:h-[70dvh] h-full w-full relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        {/* Reorder elements using order utility class */}
        <div className="flex flex-col items-start justify-center gap-4 order-2 lg:order-1">
          <h1 className="text-3xl lg:text-4xl">
            Hello, I'm Bhinsar Jagdish <span className="wave">👋</span>
          </h1>
          <p>I craft seamless digital experiences that turn your ideas into impactful realities.</p>
        <button className="px-3 py-1 text-gray-800 bg-blue-200 rounded-2xl hover:bg-blue-300 transition-colors duration-300">
          <a href="#contact" className="flex justify-between items-center cursor-pointer">Let's Talk <ArrowDown className="jump" /></a></button>
        </div>

        <div className="order-1 overflow-hidden rounded-full lg:order-2 h-[40dvh] sm:h-[50dvh] md:h-[60dvh] lg:h-[70dvh] w-full">
          <div className="w-full h-full scale-[0.8] md:scale-[0.9] lg:scale-100 ">
            <Spline className="rounded-full scale-[2.1] md:scale-[2] lg:scale-[1.5]" scene="https://prod.spline.design/tGdHz8fN7NDGm48j/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
