import React from 'react';
import Image from 'next/image';
import { Leaf, UpArrow } from '@/components/svg';

// images 
import port_d_1 from '@/assets/img/inner-project/showcase/showcase-details-2-2.jpg';
import port_d_2 from '@/assets/img/inner-project/showcase/showcase-details-2-3.jpg';
import port_d_3 from '@/assets/img/inner-project/showcase/showcase-details-2-4.jpg';
import port_d_4 from '@/assets/img/inner-project/showcase/showcase-details-2-5.jpg';
import port_d_5 from '@/assets/img/inner-project/showcase/showcase-details-2-6.jpg';
import port_d_6 from '@/assets/img/inner-project/showcase/showcase-details-2-7.jpg';
import port_d_7 from '@/assets/img/inner-project/showcase/showcase-details-2-8.jpg';
import port_d_8 from '@/assets/img/inner-project/showcase/showcase-details-2-9.jpg';

import fullwidth_img from '@/assets/img/inner-project/showcase/showcase-details-2-10.jpg';
import d_g_img_1 from '@/assets/img/inner-project/showcase/showcase-details-2-11.jpg';
import d_g_img_2 from '@/assets/img/inner-project/showcase/showcase-details-2-12.jpg';

// img data
const img_data = [port_d_1, port_d_2, port_d_3, port_d_4, port_d_5, port_d_6, port_d_7, port_d_8];

export default function PortfolioDetailsShowcaseTwoArea() {
  return (
    <>
      {/* portfolio hero */}
      <div 
        className="showcase-details-2-area showcase-details-2-bg p-relative" 
        style={{ backgroundImage: "url(/assets/img/inner-project/showcase/showcase-details-2-1.jpg)" }}
      >
        <div className="showcase-details-2-link">
          <a className="project-details-custom-link" href="#">
            Let's Be Forever
            <span>
              <UpArrow />
            </span>
          </a>
        </div>
        <div className="showcase-details-2-wrapper" data-lag="0.2" data-stagger="0.08">
          <div className="container container-1550">
            <div className="row">
              {/* Matt & Happy Birthday */}
              <div className="col-xl-8">
                <div className="showcase-details-2-title-box">
                  <h5 className="showcase-details-2-title mb-20 tp-char-animation text-black">Matt</h5>
                  <span className="showcase-details-2-subtitle tp_title_anim text-black">Happy Birthday Dear</span>
                </div>
              </div>

              <div className="col-xxl-7 col-xl-10">
                {/* Paragraf pertama */}
                <div className="showcase-details-2-content tp_title_anim">
                  <p className="text-black">
                    Before you came into my life, everything was black and white 
                    until the year we met on 2021, my life has never be the same.
                    I feel great for every message and smile you gave!
                  </p>
                </div>

                {/* Info Box */}
                <div className="showcase-details-2-info-wrap d-flex align-items-center justify-content-between">
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>From</span>
                    <h5>2021</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>Bring</span>
                    <h5>Joy</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>Happiness</span>
                    <h5>Colors</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>Wish</span>
                    <h5>Forever</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end portfolio hero */}

      {/* details title  */}
      <div className="showcase-details-2-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">My Favourite Person</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  Matt,
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-section-right tp_title_anim">
                <p>Thank you for being born into this world and making this path for meeting me. I’m so grateful to have you in my life. I never thought from the first year we met in 2021 to 2025, you crossed miles and oceans just to see me. At that moment, I knew this was where my heart belonged. Meeting you, holding your hand, and seeing your eyes, was the most beautiful gift from the universe that brought me.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end details title */}

      {/* moving image */}
      <div className="showcase-details-2-slider-area pb-120">
        <div className="moving-gallery">
          <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-top d-flex align-items-end mb-20">
            {img_data.slice(0, 4).map((imgSrc, i) => (
              <div key={i} className="showcase-details-2-slider-item">
                <Image src={imgSrc} alt="port-img" style={{ height: 'auto' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="moving-gallery">
          <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-bottom d-flex align-items-start">
            {img_data.slice(4, 8).map((imgSrc, i) => (
              <div key={i} className="showcase-details-2-slider-item">
                <Image src={imgSrc} alt="port-img" style={{ height: 'auto' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end moving image */}

      {/* details title 2 */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">This Year</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  On Your 39th B'day,
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">I wish you a life filled with success, health, and happiness. May your career flourish, your dreams grow bigger, and your heart always be full. I hope our love continues to blossom, stronger with every passing day, and that one day, there will be no distance between us and only “us,” together, forever..</p>
                <p>Happy Birthday My Love, My Favourite Person, My Other Half </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end details title 2 */}

      {/* full width image */}
      <div className="showcase-details-2-fullwidth-img">
        <Image data-speed=".8" src={fullwidth_img} alt="fullwidth_img" style={{ height: 'auto' }} />
      </div>
      {/* end full width image */}

      {/* detail title 3 */}
      <div className="showcase-details-2-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">This Love</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  I felt...
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p>I crossed oceans without drowning, yet I sink willingly in the depths of your eyes. Love is not found—it’s awakened, like stars coming alive in the silence of the night. You are not my everything; you are my universe, my breath, my endless why.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end detail title 3 */}

      {/* grid images */}
      <div className="showcase-details-2-grid-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="showcase-details-2-grid-img mb-30">
                <Image className="img-left" src={d_g_img_1} alt="details-img" style={{ height: 'auto' }} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="showcase-details-2-grid-img mb-30">
                <Image className="img-right" src={d_g_img_2} alt="details-img" style={{ height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end grid images */}

      {/* details title 4 */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  Like the poets say
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p>In your silence, I hear the poetry Kahlil Gibran spoke of—the quiet between heartbeats where love finds its truest voice. You are not my shelter from the storm, but the calm that makes me unafraid of the rain. As Gibran wrote, "Love gives not but itself, and takes not from itself," and in you, I have learned to give without end..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end details title 4 */}
    </>
  );
}