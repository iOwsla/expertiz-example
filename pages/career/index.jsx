import React, {useEffect, useState} from "react";
import Banner from "../../components/banner";
import Layout from "/layout/main";
import style from './style.module.scss';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {getLink, pageEnum} from "../../lib/routes";
import {i18n} from "next-i18next";

function Career() {
  const [mobile, setMobile] = useState(false);
  const [items, setItems] = useState([
    {
      mini_title: "Li",
      title: "Lorem Ipsum",
      job_type: "Project Based",
      url: getLink(pageEnum.career, i18n.language)+"/"+"test",
      dark: false,
    },{
      mini_title: "Li 2",
      title: "Lorem Ipsum 2",
      job_type: "Project Based 2",
      url: getLink(pageEnum.career, i18n.language)+"/"+"test2",
      dark: true,
    },{
      mini_title: "Li 3",
      title: "Lorem Ipsum 3",
      job_type: "Project Based 3",
      url: getLink(pageEnum.career, i18n.language)+"/"+"test3",
      dark: false,
    },{
      mini_title: "Li 4",
      title: "Lorem Ipsum 4",
      job_type: "Project Based 4",
      url: getLink(pageEnum.career, i18n.language)+"/"+"test4",
      dark: true,
    },{
      mini_title: "Li 5",
      title: "Lorem Ipsum 5",
      job_type: "Project Based 5",
      url: getLink(pageEnum.career, i18n.language)+"/"+"test5",
      dark: false,
    }
  ])
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
  return <>
    <Layout>
      <Banner bannerTitle={"Kariyer"} content={["Anasayfa", "Kurumsal"]}
              imgUrl={"/images/banner/career.png"}></Banner>
      <div className={`${style.career}`}>

        <div className={"container"}>
          <div className={`row ${style.career_content} overflow-hidden`}>
            <AnimationOnScroll animateIn={"animate__fadeInDown"}>
              <div className={`${style.title} text-align-center`}>Why Join Us?</div>
              <div className={`${style.description} text-align-center`}>{`Lorem Ipsum is simply dummy text of the printing
              and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
              </div>
            </AnimationOnScroll>
          </div>
          <div className={`row gap-1 ${style.items}`}>
            <div
              className={`col-5 ${style.item} overflow-hidden bg_grey padding__top--5 padding__left--3 padding__bottom--5 padding__right--3`}>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <div className={style.item_title}>
                  Lorem ipsum
                </div>
                <div className={style.description}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </AnimationOnScroll>
            </div>
            <div
              className={`col-5 ${style.item} overflow-hidden bg_grey padding__top--5 padding__left--3 padding__bottom--5 padding__right--3`}>
              <AnimationOnScroll animateIn={mobile ? "animate__fadeInRight" : "animate__fadeInLeft"}>
                <div className={style.item_title}>
                  Lorem ipsum
                </div>
                <div className={style.description}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </AnimationOnScroll>
            </div>
            <div
              className={`col-5 ${style.item} overflow-hidden bg_grey padding__top--5 padding__left--3 padding__bottom--5 padding__right--3`}>
              <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
                <div className={style.item_title}>
                  Lorem ipsum
                </div>
                <div className={style.description}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </AnimationOnScroll>
            </div>
            <div
              className={`col-5 ${style.item} overflow-hidden bg_grey padding__top--5 padding__left--3 padding__bottom--5 padding__right--3`}>
              <AnimationOnScroll animateIn={mobile ? "animate__fadeInRight" : "animate__fadeInLeft"}>
                <div className={style.item_title}>
                  Lorem ipsum
                </div>
                <div className={style.description}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <AnimationOnScroll animateIn={"animate__fadeIn"}>
          <video src={"/video/carrer.mp4"} className={style.video} loop autoPlay muted></video>
        </AnimationOnScroll>
        <div className={style.positions}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={`${style.title} text-align-center overflow-hidden`}>
                <AnimationOnScroll animateIn={"animate__fadeInDown"}>
                  Open Job Positions
                </AnimationOnScroll>
              </div>
              <div className={`${style.description} text-align-center overflow-hidden`}>
                <AnimationOnScroll animateIn={"animate__fadeInUp"}>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </AnimationOnScroll>
              </div>
            </div>
            <div className={style.applications}>
              {items.map((item, index) => (<>
                <AnimationOnScroll key={index} animateIn={"animate__fadeIn"} className={style.application}>
                  <div className={style.application_content}>
                    <div className={`${style.app_circle} ${item.dark && style.dark}`}><span>{item.mini_title}</span></div>
                    <div className={style.app_title}>{item.title}</div>
                    <div className={style.app_type}>{item.job_type}</div>
                    <div className={style.app_button}>
                      <button onClick={(e) => document.location.href = item.url}>Başvur</button>
                    </div>
                  </div>
                </AnimationOnScroll>
              </>))}
            </div>
          </div>
        </div>
      </div>
    </Layout>

  </>;
}

export default Career;

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