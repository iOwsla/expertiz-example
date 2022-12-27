import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {AnimationOnScroll} from "react-animation-on-scroll";
import style from './style.module.scss';

function ServicesMap() {
  const {i18n} = useTranslation();
  const [startIndex, setIndex] = useState(0);
  useEffect(() => {
    // document.addEventListener("scroll", (e) => {
    //   e.preventDefault();
    //   setIndex((prevIndex) => prevIndex >= 10 ? 10 : prevIndex + 1);
    // })
    function scrollDetect() {
      var lastScroll = 0;
      window.onscroll = function () {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0 && lastScroll <= currentScroll) {
          lastScroll = currentScroll;
          if (document.querySelector("#test2").getBoundingClientRect().top - 200 < 0) {
            document.querySelector("#test2").style.opacity = 1;
            setIndex((prevIndex) => prevIndex >= 43 ? 43 : prevIndex + 0.5);
          } else if (document.querySelector("#test2").getBoundingClientRect().bottom < 0) {
            setIndex(0);
          }
        }
      };
    }

    scrollDetect();
  }, []);
  const data = [43];
  return <>

    <div className={style.section_20}>
      <div className="container">
        <div className="title margin__top--10 overflow-hidden">
          <AnimationOnScroll animateIn={"animate__slideInLeft"}>
            Hizmet <span className="text_yellow">Haritası</span>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={style["div-block-203"]}>
        <section className={`${style.services_map}`} id="test2" style={{
          willChange: "opacity",
          opacity: 1, // burası 0 olacak 
        }}>
          <div className={style.services_map_list} id="test">
            <div className={style["lottie-animation-6"]}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 810" width="1120" height="810"
                   preserveAspectRatio="xMidYMid meet" style={{
                width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)",
              }}>
                <defs>
                  <clipPath id="__lottie_element_13">
                    <rect width="1120" height="810" x="0" y="0"></rect>
                  </clipPath>
                  {data.map((i) => {
                    return <>
                      <image key={i} xlinkHref={`/images/services_map/services-map-${i18n.language}.svg`}>
                      </image>
                    </>
                  })}
                </defs>
                {data.map((i) => {
                  return <g key={i} clipPath="url(#__lottie_element_13)">
                    <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{
                      display: startIndex == i ? "block" : "block", // 2.block none olcak
                    }}>
                      <image width="1120px" height="810px" preserveAspectRatio="xMidYMid slice"
                             xlinkHref={`/images/services_map/services-map-${i18n.language}.svg`}>
                      </image>
                    </g>
                  </g>
                })}
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>


  </>;
}

export default ServicesMap;
