import React, { useEffect, useState } from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import { AnimationOnScroll } from "react-animation-on-scroll";
import BannerVideo from "/components/banner/video";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ServiceInspectionService() {
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
      <BannerVideo content={["Hizmetlerimiz", "Servis Denetim Hizmetleri"]}
        bannerTitle={"Servis Denetim Hizmeti"} videoUrl={"/video/servisdenetim.mp4"}></BannerVideo>
      <div className={`container ${style.service_inspection}`}>
        <div className={`row margin__top--10 ${!mobile && "overflow-hidden"}`}>
          <AnimationOnScroll animateIn={"animate__fadeInDown"}>
            <div className={`title text-align-center margin__bottom--2 ${style.service_inspection_title}`}>Denetim
              Hizmetleri
            </div>
            <div
              className={`description text-align-center width-40 margin__auto ${style.service_inspection_description}`}>We
              will help a clients problems to develop the products they
              have with high quality
            </div>
          </AnimationOnScroll>

        </div>
        <div className={`row margin__top--12 ${style.services_list}`}>
          <div className={`col-2 ${style.services_position} overflow-hidden flex justify-content-center`}>
            <div className={style.services}>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <div className={style.services_box}>
                  <div className={style.services_box_image}>
                    <img src="/images/icons/services-insepction-1.svg"></img>
                  </div>
                  <div className={style.services_box_content}>
                    <div className={style.services_box_title}>Bayi Denetimi</div>
                    <div className={style.services_box_description}>{`Operasyonel Denetim\nKurumsal Denetim`}
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <div className={style.services_box}>
                  <div className={style.services_box_image}>
                    <img src="/images/icons/services-insepction-2.svg"></img>
                  </div>
                  <div className={style.services_box_content}>
                    <div className={style.services_box_title}>Garanti Denetimi</div>
                    <div className={style.services_box_description}>{`Lorem ipsum dolor sit amet, consectetur 
adipiscing elit.`}
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <div className={style.services_box}>
                  <div className={style.services_box_image}>
                    <img src="/images/icons/services-insepction-3.svg"></img>
                  </div>
                  <div className={style.services_box_content}>
                    <div className={style.services_box_title}>Tedarikçi Denetimi</div>
                    <div className={style.services_box_description}>{`Servis Noktası
Bayilik Değerlendirme`}
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className={`col-2 ${style.services_position} overflow-hidden  flex justify-content-center`}>
            <div className={style.services}>
              <AnimationOnScroll animateIn={"animate__fadeInRight"}>
                <div className={style.services_box}>
                  <div className={style.services_box_image}>
                    <img src="/images/icons/services-insepction-4.svg"></img>
                  </div>
                  <div className={style.services_box_content}>
                    <div className={style.services_box_title}>Servis Denetimi</div>
                    <div className={style.services_box_description}>Operasyonel Denetim
                      Kurumsal Denetim
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn={"animate__fadeInRight"}>
                <div className={style.services_box}>
                  <div className={style.services_box_image}>
                    <img src="/images/icons/services-insepction-5.svg"></img>
                  </div>
                  <div className={style.services_box_content}>
                    <div className={style.services_box_title}>Stok Gözetim</div>
                    <div className={style.services_box_description}>{`Lastik Stoklama\nAraç Stoklama`}</div>
                  </div>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn={"animate__fadeInRight"}>
                <div className={style.services_box}>
                  <div className={style.services_box_image}>
                    <img src="/images/icons/services-insepction-6.svg"></img>
                  </div>
                  <div className={style.services_box_content}>
                    <div className={style.services_box_title}>Gizli Müşteri Denetimi</div>
                    <div className={style.services_box_description}>{`Satıs / Servis Hizmeti
Lastik Değişimi`}
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>


        <div className={`row ${style.services_images}`}>
          <div className={`title ${style.services_title} overflow-hidden`}>
            <AnimationOnScroll animateIn={"animate__fadeInLeft"}>Hizmet Görselleri</AnimationOnScroll>
          </div>
          <div className={style.services_image_box}>
            <AnimationOnScroll animateIn={"animate__fadeIn"}>
              <img src="/images/services/service-inspection-service/image01.png"></img>
            </AnimationOnScroll>

          </div>
          <div className={style.services_image_box}>
            <AnimationOnScroll animateIn={"animate__fadeIn"}>
              <img src="/images/services/service-inspection-service/image02.png"></img>
            </AnimationOnScroll>

          </div>
          <div className={style.services_image_box}>
            <AnimationOnScroll animateIn={"animate__fadeIn"}>
              <img src="/images/services/service-inspection-service/image03.png"></img>
            </AnimationOnScroll>

          </div>
          <div className={`${style.services_image_box} ${style.services_image_box_full}`}>
            <AnimationOnScroll animateIn={"animate__fadeIn"}>
              <img src="/images/services/service-inspection-service/image04.png"></img>
            </AnimationOnScroll>

          </div>
        </div>
      </div>
    </Layout>

  </>;
}

export default ServiceInspectionService;

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