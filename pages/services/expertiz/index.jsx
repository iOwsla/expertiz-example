import React, {useEffect, useState} from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import BannerVideo from "/components/banner/video";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getLink, pageEnum} from "/lib/routes";
import {useTranslation} from "next-i18next";
import {AnimationOnScroll} from "react-animation-on-scroll";

function Expertiz() {
  const [mobile, setMobile] = useState(false);
  const {t, i18n} = useTranslation("home");
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true)
    } else {
      setMobile(false)
    }
    ;
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setMobile(true)
      } else {
        setMobile(false)
      }
      ;
    });
  }, []);

  return <>
    <Layout>
      <BannerVideo content={["Hizmetlerimiz", "Ekspertiz Hizmetleri"]}
                   bannerTitle={"Ekspertiz Hizmeti"} videoUrl={"/video/ekspertiz.mp4"}></BannerVideo>
      <div className="container overflow-hidden">
        <div className={`row ${style.card_list}`}>
          <div className={`col-2 ${style.card_position}`}>
            <div className={`title ${style.title} overflow-hidden`}>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                Türkiye’de 75+ Noktada En Detaylı Ekspertiz Hizmeti
              </AnimationOnScroll>
            </div>
            <a href={getLink(pageEnum.damage_and_assessment, i18n.language)}>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <div className={style.card} style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(0,0,0, .7)), url("/images/services/expertiz/image01.png")`
                }}>
                  <div className={style.card_content}>
                    <div className={style.card_title}>Hasar ve Değerleme</div>
                    <div className={style.card_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className={`${style.card_button}`}>
                      <span>Detay</span>
                      <svg width="53" height="24" viewBox="0 0 53 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M41 4L39.59 5.41L45.17 11H0V13H45.17L39.59 18.59L41 20L49 12L41 4Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>

            </a>
            <a href={getLink(pageEnum.mobile_expertise, i18n.language)}>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <div className={style.card} style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(0,0,0, .7)), url("/images/services/expertiz/image03.png")`
                }}>
                  <div className={style.card_content}>
                    <div className={style.card_title}>Mobil Ekspertiz</div>
                    <div className={style.card_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className={`${style.card_button} ${mobile && style.right}`}>
                      <span>Detay</span>
                      <svg width="53" height="24" viewBox="0 0 53 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M41 4L39.59 5.41L45.17 11H0V13H45.17L39.59 18.59L41 20L49 12L41 4Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>

            </a>
          </div>
          <div className={`col-2 ${style.card_position}`}>
            <a href={getLink(pageEnum.corporate_expertise, i18n.language)}>
              <AnimationOnScroll animateIn={"animate__fadeInRight"}>
                <div className={style.card} style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(0,0,0, .7)), url("/images/services/expertiz/image02.png")`
                }}>
                  <div className={style.card_content}>
                    <div className={style.card_title}>Kurumsal Ekspertiz</div>
                    <div className={style.card_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className={`${style.card_button} ${!mobile && style.right}`}>
                      <span>Detay</span>
                      <svg width="53" height="24" viewBox="0 0 53 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M41 4L39.59 5.41L45.17 11H0V13H45.17L39.59 18.59L41 20L49 12L41 4Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </a>
            <a href={getLink(pageEnum.individual_expertise, i18n.language)}>
              <AnimationOnScroll animateIn={"animate__fadeInRight"}>
                <div className={style.card} style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(0,0,0, .7)), url("/images/services/expertiz/image04.png")`
                }}>
                  <div className={style.card_content}>
                    <div className={style.card_title}>Bireysel Expertiz</div>
                    <div className={style.card_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className={`${style.card_button} ${style.right}`}>
                      <span>Detay</span>
                      <svg width="53" height="24" viewBox="0 0 53 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M41 4L39.59 5.41L45.17 11H0V13H45.17L39.59 18.59L41 20L49 12L41 4Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </a>
          </div>
        </div>
      </div>
    </Layout>

  </>;
}

export default Expertiz;

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "layout",
      "common",
      "offices",
      "home"
    ])),
  },
});
