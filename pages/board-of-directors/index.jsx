import React from "react";
import Layout from "/layout/main";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Banner from "/components/banner";
import style from "./style.module.scss";

function BoardOfDirectors() {
  const images = [
    {
      title: "Herman Defoe",
      image: "/images/pages/kurumsal/Container.png",
      body: "Lorem Ipsum",
    },
    {
      title: "Andrew Graham",
      image: "/images/pages/kurumsal/Container-1.png",
      body: "Lorem Ipsum",
    },
    {
      title: "Angela McKenzie",
      image: "/images/pages/kurumsal/Container-2.png",
      body: "Lorem Ipsum",
    },
    {
      title: "Sam Reimy",
      image: "/images/pages/kurumsal/Container-3.png",
      body: "Lorem Ipsum",
    },
    {
      title: "Sutar",
      image: "/images/pages/kurumsal/Container-4.png",
      body: "Lorem Ipsum",
    },
    {
      title: "Sutina",
      image: "/images/pages/kurumsal/Container-5.png",
      body: "Lorem Ipsum",
    },
    {
      title: "Suratmo",
      image: "/images/pages/kurumsal/Container-6.png",
      body: "Lorem Ipsum",
    },
    {
      title: "Supali",
      image: "/images/pages/kurumsal/Container-7.png",
      body: "Lorem Ipsum",
    }
  ];
  return (<Layout>
      <Banner bannerTitle={"Yönetim Kurulu"} content={["Kurumsal", "Yönetim Kurulu"]}
              imgUrl={"/images/banner/board-of-directors.png"}></Banner>

      <div className={style.board_of_directors}>
        <div className={"container"}>
          <div className={`row ${style.images}`}>
            {
              images.map((img, index) => <>
                <div className={`col-4 ${style.image_box}`}>
                  <div className={style.image}>
                    <img src={img.image}/>
                  </div>
                  <div className={style.content}>
                    <div className={style.title}>{img.title}</div>
                    <div className={style.description}>{img.body}</div>
                  </div>
                </div>
              </>)
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BoardOfDirectors;

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