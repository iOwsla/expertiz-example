import React, {useEffect, useState} from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import {AnimationOnScroll} from "react-animation-on-scroll";
import Banner from "/components/banner";
import OtherExpertizService from "/components/other_expertiz_services";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function IndividualExpertise() {
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
      <Banner content={["Hizmetlerimiz", "Expertiz", "Bireysel Expertiz"]}
              imgUrl={"/images/banner/individual-expertiz.png"} bannerTitle="Bireysel Expertiz"></Banner>
      <div className={`${style.individual_expertiz}`}>
        <div className={`container`}>
          <div className="row">
            <div className="col-2 width-30 overflow-hidden">
              {!mobile && <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <OtherExpertizService></OtherExpertizService>
              </AnimationOnScroll>}
            </div>
            <div className="col-2 width-70 overflow-hidden">
              <AnimationOnScroll animateIn={"animate__fadeInDown"}>
                <div className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quae.</div>
                <div className="description">Kurumsal operasyonel filo kiralama şirketlerinin dışında
                  birelsel kullanıcıların ikinci el otomobil alımı veya satımı
                  sırasında satın alma öncesi yapılan araç kontrolleri
                  sonucunda oluşturulan rapordur. Bieksper ülke genelinde
                  EFT oto ekspertiz markası ile iş ortağıdır, iki firma arasında
                  oluşturulan organik bağ ve sistem entegarsyonları ile
                  Türkiyede 75+ noktada bulunan şubelerinde en detaylı
                  ekspertiz raporunu TSE onaylı olarak müşterilerine
                  sunmaktadır.
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className={`row ${style.individual_expertiz_items}`}>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/dyno-test.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Dyno Test</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/arac-dis-hasar-raporu.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Araç Dış Hasar Durum Raporu</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/fren-testi.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Fren Testi</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/boya-kaporta-testi.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Boya / Kaporta Testi</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/sonuc-raporu.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Ekspertiz Sonuç Raporu</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/lastik-durumu.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Lastik Durum Raporu</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/alt-kontrol-testi.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Alt Kontrol Testi</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/ariza-tespit.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Arıza Tespit</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/arac-donanim-durumu.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Araç Donanım Durum Raporu</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/yana-kayma.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Yana Kayma Testi</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={`col-3 ${style.individual_expertiz_item}`}>
              <div className={style.individual_expertiz_item_logo}><img
                src="/images/icons/individual-expertiz/suspansiyon-test.svg" alt="Logo"/></div>
              <div className={style.individual_expertiz_item_title}>Süspansiyon Testi</div>
            </AnimationOnScroll>
          </div>
          <div className={style.ind}></div>

        </div>
        <div className={style.individual_expertiz_video}>
          <video className="width-100" src="/video/bireysel.mp4" loop autoPlay muted></video>
          <img src="/images/pages/Ekran.svg" alt="Ekran" className="width-100"/>
          <img src="/images/pages/Ekran.png" alt="Ekran" className={`${style.individual_expertiz_video_lastik}`}/>
        </div>
        {
          mobile && <>
            <div className={style.mobile_bg}>
              <div className="container overflow-hidden"><AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <OtherExpertizService></OtherExpertizService>
              </AnimationOnScroll></div>
            </div>
          </>
        }
      </div>


    </Layout>

  </>;
}

export default IndividualExpertise;

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