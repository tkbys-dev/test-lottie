import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import animAll from "../data/lottie.json";

const Lottie = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animAll,
    });
  });

  return (
    <div>
      <div ref={lottieRef} className=""></div>
    </div>
  );
};

export default Lottie;
