import React, {useEffect, useState} from "react";
import Layout from "/layout/main";
import style from './style.module.scss';
import {AnimationOnScroll} from "react-animation-on-scroll";
import BannerVideo from "/components/banner/video";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function VehicleStocking() {
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
          if (document.querySelector("#ads").getBoundingClientRect().top - 400 < 0) {
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
  return <>
    <Layout>
      <BannerVideo content={["Hizmetlerimiz", "Araç Stoklama Hizmeti"]}
                   bannerTitle="Araç Stoklama Hizmeti" videoUrl={"/video/stoklama.mp4"}></BannerVideo>
      <div className={style.vehicle_stocking} id="ads">
        <div className="container">
          <div className="row gap-2">
            <div className={`col-1 title ${style.vehicle_stocking_title} overflow-hidden`}>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                Araç Stoklama Hizmeti
              </AnimationOnScroll>
            </div>
            <div className={`row gap-1 ${style.vehicle_stocking_descriptions}`}>
              <AnimationOnScroll className={`col-1 flex ${style.vehicle_stocking_description} overflow-hidden`}
                                 animateIn={"animate__fadeInUp"}>

                <div className={`margin__right--2 ${style.vehicle_stocking_description_image}`}>
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M29 14.5C29 17.3678 28.1496 20.1712 26.5563 22.5557C24.963 24.9402 22.6984 26.7988 20.0489 27.8963C17.3994 28.9937 14.4839 29.2809 11.6712 28.7214C8.85847 28.1619 6.27482 26.7809 4.24696 24.753C2.2191 22.7251 0.838104 20.1415 0.278619 17.3288C-0.280867 14.5161 0.00628603 11.6006 1.10376 8.95107C2.20123 6.30154 4.05972 4.03694 6.44424 2.44366C8.82875 0.850379 11.6322 0 14.5 0C18.3456 0 22.0338 1.52766 24.7531 4.24694C27.4723 6.96622 29 10.6544 29 14.5ZM12.8808 22.1729L23.635 11.4187C23.8106 11.2421 23.9092 11.0032 23.9092 10.7541C23.9092 10.5051 23.8106 10.2662 23.635 10.0896L22.3179 8.77244C22.2313 8.68402 22.1279 8.61382 22.0138 8.56586C21.8997 8.51791 21.7771 8.49322 21.6533 8.49322C21.5296 8.49322 21.407 8.51791 21.2929 8.56586C21.1788 8.61382 21.0754 8.68402 20.9888 8.77244L12.2163 17.545L8.04751 13.4488C7.96192 13.3607 7.85954 13.2906 7.74643 13.2428C7.63331 13.195 7.51177 13.1704 7.38897 13.1704C7.26617 13.1704 7.14461 13.195 7.0315 13.2428C6.91838 13.2906 6.81601 13.3607 6.73043 13.4488L5.40125 14.7658C5.22564 14.9424 5.12707 15.1813 5.12707 15.4304C5.12707 15.6794 5.22564 15.9183 5.40125 16.0949L11.4429 22.1366C11.5293 22.2232 11.632 22.292 11.745 22.3388C11.858 22.3857 11.9791 22.4098 12.1015 22.4098C12.2238 22.4098 12.3449 22.3857 12.4579 22.3388C12.5709 22.292 12.6736 22.2232 12.76 22.1366L12.8808 22.1729Z"
                      fill="#FFCC05"/>
                  </svg>
                </div>
                <div className={style.description}>İş ortaklığı yapmış olduğumuz, başta kurumsal operasyonel
                  filo kiralama şirketleri olmak üzere depolarımızda ekspertiz
                  ve değer belirleme hizmeti sağlamış olduğumuz
                  müşterilerimizin araçlarının stoklama hizmetini
                  sağlamaktayız.</div>

              </AnimationOnScroll>
              <AnimationOnScroll className={`col-1 flex ${style.vehicle_stocking_description} overflow-hidden`}
                                 animateIn={"animate__fadeInUp"}>
                <div className={`margin__right--2 ${style.vehicle_stocking_description_image}`}>
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M29 14.5C29 17.3678 28.1496 20.1712 26.5563 22.5557C24.963 24.9402 22.6984 26.7988 20.0489 27.8963C17.3994 28.9937 14.4839 29.2809 11.6712 28.7214C8.85847 28.1619 6.27482 26.7809 4.24696 24.753C2.2191 22.7251 0.838104 20.1415 0.278619 17.3288C-0.280867 14.5161 0.00628603 11.6006 1.10376 8.95107C2.20123 6.30154 4.05972 4.03694 6.44424 2.44366C8.82875 0.850379 11.6322 0 14.5 0C18.3456 0 22.0338 1.52766 24.7531 4.24694C27.4723 6.96622 29 10.6544 29 14.5ZM12.8808 22.1729L23.635 11.4187C23.8106 11.2421 23.9092 11.0032 23.9092 10.7541C23.9092 10.5051 23.8106 10.2662 23.635 10.0896L22.3179 8.77244C22.2313 8.68402 22.1279 8.61382 22.0138 8.56586C21.8997 8.51791 21.7771 8.49322 21.6533 8.49322C21.5296 8.49322 21.407 8.51791 21.2929 8.56586C21.1788 8.61382 21.0754 8.68402 20.9888 8.77244L12.2163 17.545L8.04751 13.4488C7.96192 13.3607 7.85954 13.2906 7.74643 13.2428C7.63331 13.195 7.51177 13.1704 7.38897 13.1704C7.26617 13.1704 7.14461 13.195 7.0315 13.2428C6.91838 13.2906 6.81601 13.3607 6.73043 13.4488L5.40125 14.7658C5.22564 14.9424 5.12707 15.1813 5.12707 15.4304C5.12707 15.6794 5.22564 15.9183 5.40125 16.0949L11.4429 22.1366C11.5293 22.2232 11.632 22.292 11.745 22.3388C11.858 22.3857 11.9791 22.4098 12.1015 22.4098C12.2238 22.4098 12.3449 22.3857 12.4579 22.3388C12.5709 22.292 12.6736 22.2232 12.76 22.1366L12.8808 22.1729Z"
                      fill="#FFCC05"/>
                  </svg>
                </div>
                <div className={style.description}>Adana, Ankara, Antalya, Bursa, Balıkesir, Denizli,
                  Eskişehir, Manisa, Gaziantep, İstanbul (Anadolu Yakası),
                  İstanbul (Avrupa Yakası), İzmir, Kayseri, Malatya,
                  Samsun, Trabzon
                </div>

              </AnimationOnScroll>
            </div>
          </div>
          <div className={`row justify-content-space-beetwen ${style.vehicle_stocking_list}`}>
            <div className={`col-3 width-32 ${style.vehicle_stocking_info} overflow-hidden`}>
              <AnimationOnScroll animateIn={"animate__fadeInDown"}>
                <div className={style.vehicle_stocking_top_title}>Türkiye genelinde</div>
                <div className={style.vehicle_stocking_title}><span id="value" data-value="15">0</span> İlde</div>
                <div className={style.vehicle_stocking_description}>bulunan depolarımızda araç
                  stoklama hizmeti.
                </div>
              </AnimationOnScroll>
            </div>
            <div className={`col-3 width-32 ${style.vehicle_stocking_info} overflow-hidden`}>
              <AnimationOnScroll animateIn={"animate__fadeInDown"}>
                <div className={style.vehicle_stocking_top_title}>Yılda</div>
                <div className={style.vehicle_stocking_title}><span id="value" data-value="650000">0</span>+</div>
                <div className={style.vehicle_stocking_description}>Araç / Gün stoklama hizmeti</div>
              </AnimationOnScroll>
            </div>
            <div className={`col-3 width-32 ${style.vehicle_stocking_info} overflow-hidden`}>
              <AnimationOnScroll animateIn={"animate__fadeInDown"}>
                <div className={style.vehicle_stocking_top_title}>15 İlde</div>
                <div className={style.vehicle_stocking_title}><span id="value" data-value="4150">0</span></div>
                <div className={style.vehicle_stocking_description}>adet araç kapasiteli kapalı, güvenli
                  araç stok sahası
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <AnimationOnScroll animateIn={"animate__fadeIn"}>
          <img src="/images/pages/vehicle-stock-image.png"
               className={`width-100 margin__top--8 ${style.vehicle_stocking_banner}`} style={{
                height: "50rem"
               }}></img>
        </AnimationOnScroll>
      </div>

    </Layout>

  </>;
}

export default VehicleStocking;

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