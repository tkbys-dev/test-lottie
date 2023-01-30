import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import animData from "../data/lottie.json";

const Lottie = () => {
  const lottieRef = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animData,
    });

    if (on) {
      anim.play();
    }

    return () => {
      anim.destroy();
    };
  }, [on]);

  return (
    <>
      <div className="w-full h-screen bg-green-500"></div>
      <div className="w-full h-screen bg-blue-500"></div>
      <div className="w-full h-screen bg-gray">
        <div ref={lottieRef}></div>
      </div>
    </>
  );
};

export default Lottie;
