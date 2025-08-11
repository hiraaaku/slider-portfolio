'use client';

import { gsap } from 'gsap';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger } from '@/plugins';

// internal imports
import Wrapper from '@/layouts/wrapper';
import HeaderEight from '@/layouts/headers/header-eight'; // ✅ Ganti ke HeaderEight (yang kamu punya)
import FooterTwo from '@/layouts/footers/footer-two';
import errorImg from '@/assets/img/error/error.png'; // ✅ Renamed to avoid conflict with variable

// Register GSAP plugins (untuk smooth scroll)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ErrorMain = () => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* ✅ HeaderEight: Sudah pasti ada di proyek kamu */}
      <HeaderEight />
      
      {/* Smooth Scroll Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Error Hero Section */}
            <div className="tp-error-area pt-190 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-wrapper text-center">
                      <h4 className="tp-error-title">Oops!</h4>
                      <Image 
                        src={errorImg} 
                        alt="Error Page Not Found" 
                        style={{ height: 'auto', maxWidth: '100%' }} 
                        priority 
                      />
                      <div className="tp-error-content">
                        <h4 className="tp-error-title-sm">Something went wrong...</h4>
                        <p>Sorry, we couldn't find your page.</p>
                        <Link href="/" className="tp-btn-black-2">
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Error Hero */}
          </main>

          {/* Footer */}
          <FooterTwo topCls="" />
          {/* End Footer */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorMain;