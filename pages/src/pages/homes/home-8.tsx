'use client';
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from '@/plugins';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import HeaderMinimal from "@/layouts/headers/header-minimal";
import { perspective } from "@/utils/perspective-anim";
import PerspectivePortfolioSlider from "@/components/portfolio/slider/perspective-port-slider";
import { revelAnimationOne } from "@/utils/title-animation";
import ThemeSetting from "@/components/theme-setting";

// Import ikon mata
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const HomeEightMain = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const correctPassword = "16081986"; // ganti sesuai kebutuhan

  useScrollSmooth();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (authenticated) {
      document.body.classList.add("tp-magic-cursor");
      return () => {
        document.body.classList.remove("tp-magic-cursor");
      };
    }
  }, [authenticated]);

  useEffect(() => {
    if (authenticated && typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
      cursorAnimation();
    }
  }, [authenticated]);

  useGSAP(() => {
    if (authenticated) {
      const timer = setTimeout(() => {
        perspective();
        revelAnimationOne();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [authenticated]);

  // Autoplay handling
  useEffect(() => {
    if (!authenticated) return;
    const audio = audioRef.current;
    if (audio) {
      const playAudio = () => {
        audio.play().catch(() => {});
        ["wheel", "touchstart"].forEach(evt =>
          document.removeEventListener(evt, playAudio)
        );
      };
      ["wheel", "touchstart"].forEach(evt =>
        document.addEventListener(evt, playAudio)
      );
    }
  }, [authenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Password salah");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="text-center space-y-6 max-w-md mx-auto">
          <h1 className="text-xl font-semibold text-gray-800">Password</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Setelah password benar → render existing code tanpa diubah
  return (
    <div>
      <audio ref={audioRef} src="/music/best-part.mp3" loop />
      <div id="magic-cursor"><div id="ball"></div></div>
      <HeaderMinimal />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PerspectivePortfolioSlider />
          </main>
        </div>
      </div>
      <ThemeSetting />
    </div>
  );
};

export default HomeEightMain;