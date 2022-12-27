import React, {useEffect, useState} from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import {AnimationOnScroll} from "react-animation-on-scroll";
import BannerVideo from "/components/banner/video";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function OtherSectoralServices() {
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
      <BannerVideo content={["Hizmetlerimiz", "Diğer Sektörel Hizmetler"]}
                   bannerTitle="Diğer Sektörel Hizmetler" videoUrl={"/video/diger.mp4"}></BannerVideo>
      <div className={style.other_sectoral_services}>
        <div className="container">
          <div className="title text-align-center overflow-hidden">
            <AnimationOnScroll animateIn={"animate__fadeInDown"}>
              Diğer Sektörel Hizmetler
            </AnimationOnScroll>
          </div>
          <div className="description text-align-center width-65 margin__auto overflow-hidden">
            <AnimationOnScroll animateIn={"animate__fadeInUp"}>
              İş ortaklığı yapmış olduğumuz
              Kurumsal Operasyonel Filo Kiralama
              şirketlerinin ihtiyaçlarına anlık
              çözümler geliştirmek için
              müşterilerimize sektörel yardımcı
              hizmetler sağlamaktayız.
            </AnimationOnScroll>
          </div>
          {
            mobile && <div className={`row ${style.images}`}>
              <div className={`col-2 ${style.image}`}>
                <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                  <img src="/images/pages/other-image1.png" alt=""/>
                </AnimationOnScroll>
              </div>
              <div className={`col-2 ${style.image}`}>
                <AnimationOnScroll animateIn={"animate__fadeInRight"}>
                  <img src="/images/pages/other-image2.png" alt=""/>
                </AnimationOnScroll>
              </div>
            </div>
          }

          <div className={style.other_sectoral_services_list}>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={style.other_sectoral_services_list_item}>
              <div className={style.other_sectoral_services_list_item_number}>01</div>
              <div className={style.other_sectoral_services_list_item_title}>Oto Kuaför Hizmetleri</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={style.other_sectoral_services_list_item}>
              <div className={style.other_sectoral_services_list_item_number}>02</div>
              <div className={style.other_sectoral_services_list_item_title}>Araç Yıkama Hizmetleri</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={style.other_sectoral_services_list_item}>
              <div className={style.other_sectoral_services_list_item_number}>03</div>
              <div className={style.other_sectoral_services_list_item_title}>Ozon Temizligi</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"} className={style.other_sectoral_services_list_item}>
              <div className={style.other_sectoral_services_list_item_number}>04</div>
              <div className={style.other_sectoral_services_list_item_title}>Araç Logo Söküm Hizmeti</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeIn"}
                               className={`${style.other_sectoral_services_list_item} ${!mobile && style.full}`}>
              <div className={style.other_sectoral_services_list_item_number}>05</div>
              <div className={style.other_sectoral_services_list_item_title}>Araç Motor Yıkama Hizmeti</div>
            </AnimationOnScroll>
          </div>
          {!mobile && <div className={`row ${style.images}`}>
            <AnimationOnScroll className={`col-2 ${style.image}`} animateIn={"animate__fadeIn"}>
              <img src="/images/pages/other-image2.png" alt=""/>
            </AnimationOnScroll>
            <AnimationOnScroll className={`col-2 ${style.image}`} animateIn={"animate__fadeIn"}>
              <img src="/images/pages/other-image1.png" alt=""/>
            </AnimationOnScroll>
          </div>}
          <div className={`row ${style.images}`}>
            <AnimationOnScroll className={`col-2 ${style.image}`} animateIn={"animate__fadeIn"}>
              <img src="/images/pages/other-image3.png" alt=""/>
            </AnimationOnScroll>
            <AnimationOnScroll className={`col-2 ${style.image}`} animateIn={"animate__fadeIn"}>
              <img src="/images/pages/other-image4.png" alt=""/>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </Layout>

  </>;
}

export default OtherSectoralServices;

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
