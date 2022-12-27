import React, {useEffect, useState} from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import {AnimationOnScroll} from "react-animation-on-scroll";
import Banner from "/components/banner";
import OtherExpertizService from "/components/other_expertiz_services";
import EasySteps from "/components/easy-steps";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function DamageAndAssessment() {
  const [mobile, setMobile] = useState(false);

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
      <Banner content={["Hizmetlerimiz", "Expertiz", "Hasar ve Değerlendirme"]}
              imgUrl={"/images/banner/damage-and-assesstment.png"} bannerTitle="Hasar ve Değerlendirme"></Banner>
      <div className={`container ${style.damage_and_assesment} margin__top--14`}>
        <div className="row align-items-center">
          <div className="col-2 width-30 overflow-hidden">{!mobile &&
            <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
              <OtherExpertizService></OtherExpertizService>
            </AnimationOnScroll>}</div>
          <div className="col-2 width-70 overflow-hidden">
            <AnimationOnScroll animateIn={"animate__fadeInRight"}>
              <video src="/video/hasar.mp4" loop autoPlay muted className="width-100"></video>
            </AnimationOnScroll>
          </div>
          {
            !mobile && <EasySteps mobile={false}></EasySteps>
          }
        </div>
      </div>
      {
        mobile && <><EasySteps mobile={mobile}></EasySteps>
          <div className={style.mobile_bg}>
            <div className="container overflow-hidden"><AnimationOnScroll animateIn={"animate__fadeInLeft"}>
              <OtherExpertizService></OtherExpertizService>
            </AnimationOnScroll></div>
          </div>
        </>
      }
    </Layout>

  </>;
}

export default DamageAndAssessment;

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