import React, {useEffect, useState} from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import Banner from "/components/banner";
import OtherExpertizService from "/components/other_expertiz_services";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {AnimationOnScroll} from "react-animation-on-scroll";

function CorporateExpertise() {
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
      <Banner imgUrl={"/images/banner/corporate-expertise.png"} content={["Hizmetlerimiz", "Expertiz", "Kurumsal Expertiz"]} bannerTitle="Kurumsal Ekspertiz"></Banner>
      <div className={`container ${style.corporate_expertise}`}>
        <div className="row">
          <div className="col-3 width-30 overflow-hidden">

            {!mobile && <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
              <OtherExpertizService></OtherExpertizService>
            </AnimationOnScroll>}
          </div>
          <div className={`col-2 width-70 ${style.corporate_expertise_items} overflow-hidden`}>
            <AnimationOnScroll animateIn={"animate__fadeInDown"}>
              <div className={`${style.title}`}><span className={style.text_yellow}>Lorem</span> ipsum dolor sit amet,
                adipiscing elit consectetur.
              </div>
              <div className={`${style.description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Praesent
              </div>
            </AnimationOnScroll>

          </div>
        </div>
        <div className={`row margin__top--16 margin__bottom--16 ${style.items}`}>
          <div className={`col-3 width-30 ${style.box} overflow-hidden`}>
            <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
              <div className={style.title}>
                <span className={style.number}>01</span>
                <span className={style._title}>Filo Araç Teslim Alma</span>
              </div>
              <div className={style.description}>Kurumsal operasyonel Filo şirketlerine ait olan kullanım ve sözleşme
                süresi dolmuş araçların en yakın Bieksper araç depolarına teslimatı
                sırasında oluşturulan araç teslim durumunu gösteren rapordur. Filo
                kiralama şirketleri bu formlar ile müşterilerinin kontratlarını sona
                erdirir ve yeniden kontratlandırma işlemlerini sağlayabilirler. Bu
                işlemler Dünya standartlarında belirlenmiş Adil yıpranma
                koşulllarına göre raporlarlanmaktadır.
              </div>
            </AnimationOnScroll>
          </div>
          <div className={`col-3 width-30 ${style.box} overflow-hidden`}>
            <AnimationOnScroll animateIn={mobile ? "animate__fadeInRight" : "animate__fadeInLeft"}>
              <div className={style.title}>
                <span className={style.number}>02</span>
                <span className={style._title}>Hasar
                İnceleme</span>
              </div>
              <div className={style.description}>Araç teslim alma tutanağı doldurulan aracın Dünya
                standartlarında belirlenmiş Adil yıpranma koşulllarının
                kapsam dışında kalan hasarlı bölümlerinin tek tek
                tespit edilmesi ve bu hasarların yine akredite olmuş
                kuruluşlardan elde edilen datalar ile belirlenmiş
                fiyatlandırmalarla değer kaybı , onarım işçiligi gibi
                detay raporlarınının oluşturulması işlemidir.
              </div>
            </AnimationOnScroll>
          </div>
          <div className={`col-3 width-30 ${style.box} overflow-hidden`}>
            <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
              <div className={style.title}>
                <span className={style.number}>03</span>
                <span className={style._title}>Detaylı
                Ekspertiz
                Raporu</span>
              </div>
              <div className={style.description}>Kurumsal filo kiralama şirketlerine ait olan, yetkili
                servislerde ve yüksek kalitede bakım görmüş 2. el
                araçlarını, internet üzerinden teklif usulü satmak için,
                araç durum belirtir ekspertiz raporudur. Bieksper
                Ekspertiz raporu güvenilir “km” bedeli ile satışa
                sunulmaktadır.
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className={style.circle}>
        <div className={style.circle_title}><span className="text-white">Services.</span> Amet suscipit
          frig lacus pulvinar.
        </div>
        <div className={`flex justify-content-center  ${style.images}`}>
          <img src="/images/services/expertiz/corporate-expertise-01.png"></img>
          <img src="/images/services/expertiz/corporate-expertise-02.png"></img>
        </div>
      </div>
      {
        mobile && <>
          <div className="container">
            <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
              <OtherExpertizService></OtherExpertizService>
            </AnimationOnScroll>
          </div>
        </>
      }
    </Layout>

  </>;
}

export default CorporateExpertise;

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