import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import lottie from "lottie-web";
import animData from "../data/lottie.json";

const Lottie = () => {
  const lottieRef = useRef(null);
  const [on, setOn] = useState(false);
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -60% 0px",
    triggerOnce: true,
  });

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animData,
    });

    console.log(inView);

    if (inView) {
      anim.play();
    }

    return () => {
      anim.destroy();
    };
  }, [inView]);

  return (
    <>
      <div className="w-full h-screen bg-green-500"></div>
      <div className="w-full h-screen bg-blue-500"></div>
      <div className="w-full h-screen bg-gray" ref={ref}>
        <div ref={lottieRef}></div>
      </div>
    </>
  );
};

export default Lottie;
