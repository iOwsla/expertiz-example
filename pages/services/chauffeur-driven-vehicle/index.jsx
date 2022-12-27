import React, {useEffect, useState} from "react";
import BannerVideo from "/components/banner/video";
import Layout from "/layout/main";
import style from './style.module.scss';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function BoardOfDirectors() {
  const [mobile, setMobile] = useState(false);
  const [data, setData] = useState([
    {
      title: `Depo İade
      Taşıma`,
      description: `Iş ortaklığı yapmış olduğumuz Kurumsal Operasyonel Filo
      Kiralama şirketlerinin kiralama süreleri dolan araçlarının müşteri
      adreslerinden hasar durum bildirir araç iade formlarının doldurulup müşteri adresinden teslim alınıp şoförlü taşıma yapılarak depolarımıza ekspertiz için taşınan araçlara verilen hizmet biçimidir.
      `
    },
    {
      title: `Yedek İkame
      Taşıma`,
      description: `İş ortaklığı yapmış olduğumuz Kurumsal Operasyonel Filo Kiralama
      şirketlerinin müşterilerinin dolaşımda olan araçlarının servis bakım vs gibi işlemlerinin bir
      günden fazla sürmesi durumunda iş süreçlerinin aksamaması için
      depolarımızda bulunan havuz araçlarını şoförlü taşıma ile teslim
      etmekteyiz.
      `
    }, {
      title: `Yeni Teslimat
      Taşıma`,
      description: `Iş ortaklığı yapmış olduğumuz Kurumsal Operasyonel Filo Kiralama şirketlerinin yeni müşterileri için önceden depolarımızda stoklama
      yaptıgı araçların kiralanması durumunda yeni müşterilere
      hazırlanarak teslim edilmesi hizmetidir.
      `
    },
    {
      title: `Muayene Taşıma`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti `
    },
    {
      title: `Lastik Değişimi Taşıma`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti `
    }
  ]);
  const [imgData, setImgData] = useState([
    {
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class`,
      img: `/images/pages/sofor/phone-image1.png`,
      left: true
    },
    {
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class`,
      img: `/images/pages/sofor/phone-image2.png`,
      left: false
    },
    {
      description: `Teslim alınan her araç için
      iş emri açılır.`,
      img: `/images/pages/sofor/isemrilistesi.png`,
      left: true
    },
    {
      description: `Taşınan araç depoya veya müşteriye teslim
      edildiğinde araç ile ilgili yakıt ve diğer form
      bilgilerine ulaşılır.`,
      img: `/images/pages/sofor/geridönüsbilgisi.png`,
      left: false
    },
    {
      description: `Taşınan araca ait işlem özeti barko ile görüntülenir.`,
      img: `/images/pages/sofor/stokhareketleri.png`,
      left: true
    },
    {
      description: `Taşınan araç depoya giri yaptıktan sonra
      stok hareketleri görüntülenir.
      `,
      img: `/images/pages/sofor/islemozeti.png`,
      left: false
    },
    {
      description: `Taşınan iade araç depoya giri yaptığında iade
      formu veya taşıma formu mail ile tarafınıza ulaşır
      ve sistemden online görüntülenir.
      `,
      img: `/images/pages/sofor/form.png`,
      left: true
    }
  ]);
  const [index, setIndex] = useState(0);
  const [positionX, setPositionX] = useState(0);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true)
    } else {
      setMobile(false)
      document.querySelector("#slider-content").style.marginLeft = document.querySelector("#row-video").getBoundingClientRect().left + "px";
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setMobile(true)
      } else {
        setMobile(false)
        document.querySelector("#slider-content").style.marginLeft = document.querySelector("#row-video").getBoundingClientRect().left + "px";
      }
      ;
    });

  }, []);

  const clickPosition = (index, type) => () => {
    const box = document.querySelector(`#box-${index}`);
    const boxWidth = box.getBoundingClientRect()?.width;
    if (type == "previous") {
      setIndex(index)
    } else {
      setIndex(index)
    }
    setPositionX((mobile ? boxWidth : boxWidth + (36)) * index);
  };

  const sliderDiv = <div className={style.chauffeur_driven_vehicle_content} id={"slider-content"}>
    <div className={style.leftbar}>
      <div className={`title ${style.chauffeur_driven_vehicle_title}`}>
        Yılda 50.000 Adet Araç Taşıma ve Raporlama Hizmeti
      </div>
      <div className={style.pagination}>
        <div className={style.pagination_number}>
          <span className={style.pagination_number_primary}>{index + 1}</span>
          <span className={style.pagination_number_secondary}> / {data.length}</span>
        </div>
        <div className={style.pagination_arrows}>
          <div className={style.previous}
               onClick={clickPosition(index - 1 < 0 ? (data.length - 1) : index - 1, "previous")}>
            <img src="/images/icons/previous.svg"></img>
          </div>
          <div className={style.next}
               onClick={clickPosition(index + 1 > (data.length - 1) ? 0 : index + 1, "next")}>
            <img src="/images/icons/next.svg"></img>
          </div>
        </div>
      </div>
    </div>
    <div className={style.slider}>
      {
        data.map((v, i) => {
          return <>
            <div className={`${style.box} ${i == index && style.active}`} style={{
              transform: `translateX(-${positionX}px)`
            }} id={`box-${i}`}>
              <div className={`${style.box_number} ${i == index && style.active}`}>{i + 1}</div>
              <div className={style.box_content}>
                <div className={`${style.box_title} ${i == index && style.active}`}>{v.title}</div>
                <div className={style.box_description}>
                  {v.description}
                </div>
              </div>
            </div>
          </>
        })
      }
    </div>
  </div>;
  return <>
    <Layout>
      <BannerVideo bannerTitle={`Şoförlü Araç\nTaşıma ve Raporlama`} videoUrl={"/video/sofor.mp4"}
                   content={["Hizmetlerimiz", "Şoförlü Araç Taşıma ve Raporlama"]}></BannerVideo>
      <div className={style.chauffeur_driven_vehicle}>
        {!mobile && sliderDiv}
        <div className="container">
          {mobile && sliderDiv}
          <div className={`row align-items-center ${style.video}`} id={"row-video"}>
            <div className={`col-2 width-50 ${style.video_left}`}>
              <video src="/video/sofor_mobile.mp4" loop autoPlay muted></video>
            </div>
            <div className={`col-2 width-50 ${style.video_right}`}>
              <div className={style.video_content}>
                <div className={`${style.title} ${style["title-md"]}`}>
                  <span className={`${style.text_yellow}`}>Raporlama ve Mobil Ekranlar</span>
                </div>
                <div className={style.title}>
                  Bieksper Aracını Canlı İzleyin
                </div>
                <div className={style.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                  mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                  tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                </div>
              </div>
            </div>
          </div>
          {
            imgData.map((v, i) => <>
              <div className={`row align-items-center justify-content-space-beetwen ${style.img_data}`}>
                <div className={`col-2 ${v.left ? `width-40` : `width-60`} ${style.img_data_left}`}>
                  {
                    mobile ? <img src={v.img} className="width-100"></img> : v.left ?
                      <p className="description">{v.description}</p>
                      :
                      <img src={v.img} className="width-80"></img>
                  }
                </div>
                <div className={`col-2  ${v.left ? `width-60` : `width-40`} ${style.img_data_right}`}>
                  {
                    mobile ? <p className="description">{v.description}</p> : v.left ?
                      <img src={v.img} className="width-80"></img>
                      :
                      <p className="description">{v.description}</p>
                  }
                </div>
              </div>

            </>)
          }
        </div>
      </div>
    </Layout>

  </>;
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