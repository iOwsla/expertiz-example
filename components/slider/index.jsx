import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import Button from "../form/button";
import style from './style.module.scss';
import {getLink, pageEnum} from "../../lib/routes";
function Slider() {

  const [t, i18n] = useTranslation("layout");

  const sliders = [
    {
      image: "/images/slider/image01.png",
      title: `Bieksper ne yapar?`,
      sub_title: `Otomotiv sektöründe Avrupanın lider markalarının \ngözetim, denetim, test ve belgelendirme işlemlerini yapar.`,
      url: getLink(pageEnum.who_we_are, i18n.language),
      titleName: "Bieksper",
      animation: true
    },
    {
      image: "/images/slider/image02.png",
      title: `Bunu biliyor muydunuz ?`,
      sub_title: `Bieksper, kurumsal filo şirketlerinin yılda 100binden fazla\naracının ekspertiz işlemlerini yapar!`,
      url: getLink(pageEnum.expertiz, i18n.language),
      titleName: "Ekspertiz Hizmeti",
      animation: false
    },
    {
      image: "/images/slider/image03.png",
      title: `Şoförlü Araç Transfer İşlemleri !`,
      sub_title: `Bieksper 200 kişilik uzman ekibiyle özellikle\nTürkiye'de ve Avrupada filo şirketlerinin araçlarının transfer işlemlerini sağlar.`,
      url: getLink(pageEnum.chauffeur_driven_vehicle, i18n.language),
      titleName: "Servis Denetim Hizmeti",
      animation: false
    }
  ];

  const [slider, setSlider] = useState({
    time: 8500,
    autoPlay: true,
    pagination: true,
    animation: false,
    animation_time: 8500
  });
  const [sliderIndex, setSliderIndex] = useState(0);
  const [mobile, setMobile] = useState(true);

  let sliderTimeout;
  let animationTimeout;
  function resetTimeout(type) {
    if (type) clearTimeout(type);
  }

  useEffect(() => {
    setSlider({ ...slider, animation: true });
    if (slider.autoPlay) {
      resetTimeout(sliderTimeout);
      sliderTimeout = setTimeout(() => {
        setSliderIndex((prevIndex) => {

          return prevIndex >= (sliders.length - 1) ? 0 : prevIndex + 1;
        });
        resetTimeout(sliderTimeout);

      }, slider.time);
    }
    return () => resetTimeout(sliderTimeout);
  }, [sliderIndex]);
  useEffect(() => {
    if (slider.autoPlay) {
      resetTimeout(animationTimeout);
      animationTimeout = setTimeout(() => {
        setSlider({ ...slider, animation: false });
        resetTimeout(animationTimeout);
      }, slider.animation_time);
    }
    return () => resetTimeout(animationTimeout);
  }, [slider]);

  const changeSlider = (index) => (e) => {
    e.preventDefault();
    if (index === sliderIndex) return;
    resetTimeout(animationTimeout);
    setSlider({ ...slider, animation: false });
    setSliderIndex(index);
  };


  return <>
    <section className={style.slider_area}>
      {
        sliders.map((s, i) => <>
          <section className={style.sliders} style={{
            top: "0",
            zIndex: sliderIndex == i ? "4" : "auto",
            left: sliderIndex == i ? "0" : sliderIndex > i ? "-100%" : "100%",
            position: "absolute",
            backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(0,0,0, .6)), url('${s.image}')`,
            backfaceVisibility: "hidden"
          }}>
            <div className={`container`} style={{
              width: "100%",
              height: "100%",
              position: "relative"
            }}>
              <div className={`${style.slider}`}>
                <div className={style.slider_title}>{s.title}</div>
                <div className={style.slider_sub_title}>{s.sub_title}
                </div>
                <Button className={[style.button]} bgColor={"#FFCC05"} href={s.url} text={"Keşfet"} textColor={"black"}></Button>
              </div>

            </div>
          </section>
        </>)
      }
      <div className={style.pagination}>
        {
          sliders.map((s, index) => {
            return <>
              <div className={style.page} onClick={changeSlider(index)}>
                <div className={`${style.page_content} ${sliderIndex == index && slider.animation && style.active}`}>
                  {
                    sliderIndex == index && slider.animation ?
                      <div>
                        <span className={style.page_content_text}>0{index + 1}</span>
                        <span className={style.page_content_text}>-</span>
                        <span className={style.page_content_text}>{s.titleName}</span>
                      </div>
                      :
                      <span className={style.page_content_text}>
                        0{index + 1}
                      </span>
                  }
                </div>
                <div className={`${style.line} ${slider.animation && index == sliderIndex ? style.animation : ""}`} style={{
                  width: slider.animation && index == sliderIndex ? "8rem" : "0rem",
                }}>
                  <div className={style.line_coldown}></div>
                </div>
              </div>
            </>
          })
        }
      </div>
    </section>

  </>;
}

export default Slider;
