"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderMinimal from "@/layouts/headers/header-minimal";
import PortfolioDetailsShowcaseTwoArea from "@/components/portfolio/details/portfolio-details-showcase-2-area";

// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { movingImageSlider } from "@/utils/scroll-marque";

const PortfolioDetailsShowcaseTwoMain = () => {
  useScrollSmooth();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      movingImageSlider();
    }, 100);
    return () => clearTimeout(timer);
  });

  // Autoplay handling (mulai pas scroll / swipe pertama kali)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playAudio = () => {
        audio.play().catch(() => {});
        ["wheel", "touchstart"].forEach((evt) =>
          document.removeEventListener(evt, playAudio)
        );
      };
      ["wheel", "touchstart"].forEach((evt) =>
        document.addEventListener(evt, playAudio)
      );
    }
  }, []);

  return (
    <Wrapper>
      {/* hidden audio element */}
      <audio ref={audioRef} src="/music/best-part.mp3" loop />

      {/* header area start */}
      <HeaderMinimal transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <PortfolioDetailsShowcaseTwoArea />
            {/* portfolio details area */}
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsShowcaseTwoMain;