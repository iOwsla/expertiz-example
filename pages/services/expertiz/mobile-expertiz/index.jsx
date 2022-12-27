import React, {useEffect, useState} from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import {AnimationOnScroll} from "react-animation-on-scroll";
import Banner from "/components/banner";
import OtherExpertizService from "/components/other_expertiz_services";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function MobileExpertise() {
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
      <Banner content={["Hizmetlerimiz", "Expertiz", "Mobil Expertiz"]}
              imgUrl={"/images/banner/mobile-expertiz.png"} bannerTitle="Mobil Expertiz"></Banner>

      <div className={style.mobile_expertiz}>
        <div className="container">
          <div className="row">
            <div className="col-2 width-30 overflow-hidden">
              {
                !mobile && <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                  <OtherExpertizService></OtherExpertizService>
                </AnimationOnScroll>
              }
            </div>
            <div className="col-2 width-70">
              <div className={`row ${style.images} gap-1`}>
                <div className={`col-2 ${style.image_first} width-58`}>
                  <AnimationOnScroll className={"height-100"} animateIn={"animate__fadeIn"}>
                    <img src="/images/pages/mobilexspertise-image1.png"
                         className="width-100 height-100"
                         alt=""/>
                  </AnimationOnScroll>
                </div>
                <div
                  className={`${style.image_second} width-38 flex flex-direction-column justify-content-space-beetwen`}>
                  <AnimationOnScroll animateIn={"animate__fadeIn"}>
                    <img src="/images/pages/mobilexspertise-image2.png" className="width-100" alt=""/>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn={"animate__fadeIn"}>
                    <img src="/images/pages/mobilexspertise-image3.png" className="width-100" alt=""/>
                  </AnimationOnScroll>

                </div>
              </div>
            </div>

            <div className={`row justify-content-space-beetwen ${style.mobile_expertiz_content}`}>
              <div
                className={`title margin__bottom--12 margin__top--12 overflow-hidden ${style.mobile_expertiz_content_title}`}>
                <AnimationOnScroll animateIn={"animate__fadeInUp"}>SeaWire
                  That Will Boost Your Design Works
                </AnimationOnScroll>
              </div>
              <div className="col-2 width-40 overflow-hidden">
                <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                  <img src="/images/pages/mobilexspertise-image4.png" className="width-100" alt="Image"/>
                </AnimationOnScroll>
              </div>
              <div className="col-2 width-55 overflow-hidden">
                <AnimationOnScroll animateIn={"animate__fadeInRight"}>
                  <p className={style.description}>{`Müşterilerimizin internet , sosyal medya ve diğer
otomobil siteleri aracılığıyla bulduğu 2.el araçları,
müşterilerimizin yerine görevlendirdiğimiz mobil
ekiplerimiz, günümüz son Teknoloji cihazlarından
faydalanarak 15 ilde mobil olarak ''Temel Ekspertiz
Sertifikası " oluşturup müşterilerimize e-mail yolu ile
ulaştırmaktayız. Hizmetimizden faydalanan bireysel müşteriler
olduğu gibi kurumsal finansal kredilendirme
kuruluşlarının alacaklarını tahsil edememesi
durumunda oluşan icra işlemlerinin fiyatsal
değerlemesinin doğru yapılabilmesi için tercih
edilen raporlama hizmetidir.`}</p>
                </AnimationOnScroll>
              </div>
            </div>
          </div>


        </div>
        {
          mobile && <div className={"mobile_bg"}>
            <div className="container overflow-hidden"><AnimationOnScroll animateIn={"animate__fadeInLeft"}>
              <OtherExpertizService></OtherExpertizService>
            </AnimationOnScroll></div>
          </div>
        }
      </div>
    </Layout>
  </>;
}

export default MobileExpertise;

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