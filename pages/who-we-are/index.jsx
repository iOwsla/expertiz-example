import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import Layout from "/layout/main";
import style from './style.module.scss';
import Partner from "../../components/partner";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
function WhoWeArePage() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true)
    } else {
      setMobile(false)
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setMobile(true)
      } else {
        setMobile(false)
      };
    });

    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const startData = () => {
      return document.querySelectorAll("#value").forEach(v => {
        let endValue = parseInt(v.getAttribute("data-value"));
        animateValue(v, 0, endValue, 5000);
      })
    };
    let start = false;
    function scrollDetect() {
      var lastScroll = 0;
      window.onscroll = function () {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0 && lastScroll <= currentScroll) {
          lastScroll = currentScroll;
          if (document.querySelector("#ads").getBoundingClientRect().top - 200 < 0) {
            if (!start) {
              start = true;
              startData()
            }
          }
        }
      };
    }
    scrollDetect();

  }, []);
  const our_vision = <>
    <div className="title">Our Vision</div>
    <div className={`description ${style.our_description}`}>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</div>
    <div className={`row margin__top--6 ${style.our_list}`}>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={`${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
    </div>
  </>;

  const our_mission = <>
    <div className="title">Our Mission</div>
    <div className={`description ${style.our_description}`}>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</div>
    <div className={`row margin__top--6 ${style.our_list}`}>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={`${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
      <div className={`col-1 ${style.our_box} overflow-hidden`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={` ${style.our_box_content}`}>
            <img src="/images/icons/right-circle.svg"></img>
            <div className={`${style.description}`}>Help business development</div>
          </div>
        </AnimationOnScroll>

      </div>
    </div>
  </>;

  const about_us = <>
    <div className={`col-1 title ${style.about_us_title}`}>
      <AnimationOnScroll animateIn="animate__fadeInDown">
        Hakkımızda
      </AnimationOnScroll>
    </div>
    <div className={`col-1 description margin__top--4 ${style.about_us_description}`}>
      <AnimationOnScroll animateIn="animate__fadeInRight">
        8 yılı aşkın süredir , otomotiv sektöründe faaliyet gösteren Bieksper ,
        Ekspero Bilişim Teknolojileri Ltd şti’nin iştirakidir. Türkiye’de 2.el oto alım/ satım
        sırasındaki ilişkiyi kurumsal temeller üzerine yeniden düzenleyip, alışılagelmiş
        alım/satım deneyimlerini teknoloji ile senkronize ederek güvenli bir alım/satım
        zemini oluşturmaktadır.
        Ülke genelinde 15 ilde bulunan otomobil stok alanları ve oto ekspertiz tesisleri ile
        yılda 40.000 adet üzeri kurumsal filo araç ekspertizi ve ekspertriz sonrası degerleme
        hizmeti , 50.000 adet üzeri şoförlü araç taşıma hizmetinin yanı sıra iş ortaklıgı yapmış
        oldugu global operasyonel filo kiralama şirketlerine yılda 650.000 araç/gün
        stoklama hizmeti sağlayan Bieksper kurumsal oto ekspertiz sektörünün Türkiye’deki
        lider kuruluşudur.
      </AnimationOnScroll>
    </div>
  </>;

  return <>
    <Layout>
      <Banner bannerTitle={"Biz Kimiz"} content={["Kurumsal","Hakkımızda"]} imgUrl={"/images/banner/who-we-are.png"}></Banner>
      <div className={`container margin__top--10 margin__bottom--20 ${style.who_we_are}`}>
        <div className={`row justify-content-space-beetwen align-items-center ${style.about_us}`}>
          {
            mobile ? <>
              <div className="col-2">
                <div className="row">

                  {about_us}

                  <div className={`col-2 margin__top--2 margin__bottom--2 ${style.about_us_image}`}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                      <img src="/images/pages/who-we-are.svg" className="width-100"></img>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-1 overflow-hidden" id="ads">
                    <AnimationOnScroll animateIn="animate__fadeInDown">
                      <div className="row">
                        <div className="col-3">
                          <div className="row">
                            <div className="title"><span className="text_yellow" id="value" data-value="15">0</span></div>
                            <div className="description">Yaygın Şube Ağı ve Depoları İle Türkiye Genelinde Hizmet</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="row">
                            <div className="title"><span className="text_yellow" id="value" data-value="40000">0</span></div>
                            <div className="description">Yılda 40.000 + Oto Ekspertiz ve Denetim Hizmeti</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="row">
                            <div className="title"><span className="text_yellow" id="value" data-value="50000">0</span></div>
                            <div className="description">Yılda 50.000 + Üzeri şoförlü Araç Taşıma Hizmeti</div>
                          </div>
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </div>
                </div>
              </div>
            </> : <>
              <div className={`col-2 width-43 ${style.about_us_image}`}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                  <img src="/images/pages/who-we-are.svg" className="width-100"></img>
                </AnimationOnScroll>
              </div>
              <div className="col-2" id="ads">
                <div className="row">
                  {about_us}
                  <div className="col-1 margin__top--10">
                    <div className="row overflow-hidden">
                      <AnimationOnScroll animateIn="animate__fadeInDown">
                        <div className="row">
                          <div className="col-3">
                            <div className="row">
                              <div className="title"><span className="text_yellow" id="value" data-value="15">0</span></div>
                              <div className="description">Yaygın  Şube Ağı ve Depoları
                                İle Türkiye Genelinde Hizmet</div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="row">
                              <div className="title"><span className="text_yellow" id="value" data-value="40000">0</span></div>
                              <div className="description">Yılda 40.000
                                + Oto Ekspertiz ve Denetim Hizmeti</div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="row">
                              <div className="title"><span className="text_yellow" id="value" data-value="50000">0</span></div>
                              <div className="description">Yılda 50.000 +
                                Üzeri  şoförlü Araç Taşıma Hizmeti</div>
                            </div>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }

        </div>
        <div className={`row justify-content-space-beetwen margin__top--15 align-items-end ${style.our}`}>
          <div className="col-3">
            <div className="row">
              {our_mission}
            </div>
          </div>
          {
            mobile ? <>
              <div className="row flex-direction-md-column-reverse">
                <div className="col-3">
                  <div className="row">
                    {our_vision}
                  </div>
                </div>
                <div className="col-4">
                  <img src="/images/pages/who-we-are-2.png" className={`width-100 ${style.our_image}`}></img>
                </div>
              </div>
            </> : <>
              <div className="col-3">
                <div className="row">
                  {our_vision}
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <img src="/images/pages/who-we-are-2.png" className={`width-100 ${style.our_image}`}></img>
                </div>
              </div>
            </>
          }
        </div>
      </div>
      <Partner id="partner" all={true}></Partner>
    </Layout>

  </>;
}

export default WhoWeArePage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "layout",
      "common",
      "offices",
      "home"
    ])),
  },
});