import React, {useEffect, useState} from "react";
import style from './style.module.scss';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import SplideJS from "@splidejs/splide";
import "@splidejs/react-splide/css/core";
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import Button from "../form/button";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {getLink, pageEnum} from "../../lib/routes";
import {i18n} from "next-i18next";

function Partner({all = false, id = "partner"}) {

  useEffect(() => {
    if (!all) {
      const splide = new SplideJS(".splide", {
        type: "loop",
        focus: "center",

        perPage: 4,
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 1,
        },
      });
      splide.mount({AutoScroll});
      ;
    }
  }, []);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true)
    } else {
      setMobile(false)
    }
    ;window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setMobile(true)
      } else {
        setMobile(false)
      }
      ;
    });
  }, []);
  return <section className={style.partner_bg} id={id}>
    <div className="container overflow-hidden">
      <AnimationOnScroll animateIn="animate__slideInLeft">
        <div className="title">Partner ağımızı <span className="text_yellow">sizin için</span> gösteriyoruz</div>
        <p className={`${all ? "width-95" : "width-70"} ${style.description}`}>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
          accumsan, risus</p>
      </AnimationOnScroll>
    </div>
    {!all ? <>
      <Splide id="splide" className={style.partner_line}>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image01.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image02.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image03.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image04.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image05.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image06.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image07.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image08.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image09.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image10.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image11.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image12.svg"></img>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={style.circle}>
            <img src="/images/partner/image13.svg"></img>
          </div>
        </SplideSlide>
      </Splide>

      <div style={{
        marginTop: mobile && "8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>

        <AnimationOnScroll animateIn="animate__jackInTheBox">
          <Button className={[style.button]} text={"Ortaklarımızla Tanışın"}
                  href={getLink(pageEnum.who_we_are, i18n.language) + "/#partner"} textColor="white" bgColor={"black"}
                  style={{
                    width: "unset",
                    height: "unset",
                    padding: "2rem 5.5rem"
                  }}></Button>
        </AnimationOnScroll>

      </div>
    </> : <>

      <div className="container margin__top--10">
        <div className={style.partner_box}>
          <div className={style.pbox}>
            <AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
              <img src="/images/partner/image01.svg" className={style.pbox_img}></img>
            </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image02.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image03.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image04.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image05.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image06.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image07.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image08.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image09.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image10.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image11.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image12.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image13.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}><AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
            <img src="/images/partner/image14.svg" className={style.pbox_img}></img>
          </AnimationOnScroll></div>
          <div className={style.pbox}>
            <AnimationOnScroll animateIn="animate__fadeIn" className={style.pbox_animation}>
              <img src="/images/partner/image15.svg" className={style.pbox_img}></img>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>}

  </section>;
}

export default Partner;