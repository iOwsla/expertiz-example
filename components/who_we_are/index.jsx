import React from "react";
import Button from "../form/button";
import style from "./style.module.scss";
import {getLink, pageEnum} from "../../lib/routes";
import {i18n} from "next-i18next";
import {AnimationOnScroll} from "react-animation-on-scroll";

function WhoWeAre() {
  return <>
    <section className="container">
      <div className={style.who_we_are}>
        <div className={`row justify-content-center padding__top--lg padding__bottom--lg  ${style.who_we_are_content}`}>
          <div className={`title flex-1 ${style.who_we_are_title} `}>
            <AnimationOnScroll animateIn={"animate__slideInLeft"}>
              Bieksper kimdir <span className="text_yellow">?</span>
            </AnimationOnScroll>
          </div>
          <div
            className={`${style.description}  ${style.who_we_are_description} col-2 margin__top--2 margin__bottom--2 overflow-hidden`}>
            <AnimationOnScroll animateIn={"animate__slideInRight"}>
              8 yılı aşkın süredir , otomotiv sektöründe faaliyet gösteren Bieksper ,
              Ekspero Bilişim Teknolojileri Ltd Şti’nin
              iştirakidir. Türkiye’de 2.el oto alım/ satım
              sırasındaki ilişkiyi kurumsal temeller üzerine yeniden düzenleyip, alışılagelmiş
              alım/satım deneyimlerini teknoloji ile senkronize ederek güvenli bir alım/satım
              zemini oluşturmaktadır.
              Ülke genelinde 15 ilde bulunan otomobil stok alanları ve oto ekspertiz tesisleri ile
              yılda 40.000 adet üzeri kurumsal filo araç ekspertizi ve ekspertriz sonrası değerleme
              hizmeti , 50.000 adet üzeri şoförlü araç taşıma hizmetinin yanı sıra iş ortaklıgı yapmış
              olduğu global operasyonel filo kiralama şirketlerine yılda 650.000 araç/gün
              stoklama hizmeti sağlayan Bieksper kurumsal oto ekspertiz sektörünün Türkiye’deki
              lider kuruluşudur.
            </AnimationOnScroll>

          </div>
          <div className="margin__top--8">
            <AnimationOnScroll animateIn={"animate__jackInTheBox"}>
              <Button textColor={"black"} href={getLink(pageEnum.who_we_are, i18n.language)}
                      text={"Daha Fazla"} className={[style.button]}></Button>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>

  </>;
}

export default WhoWeAre;
