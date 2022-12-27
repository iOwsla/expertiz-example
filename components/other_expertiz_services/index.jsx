import React from "react";
import style from './style.module.scss';
import {useRouter} from "next/router";
import {getLink, isActive, pageEnum} from '/lib/routes'

function OtherExpertizService() {
  const router = useRouter();
  return <div className={style.sidebar}>

    <div className={style.sidebar_title}>Diğer Ekspertiz Hizmetleri</div>

    <ul className={style.sidebar_list}>
      <li className={style.sidebar_item}><a href={getLink(pageEnum.corporate_expertise, router.locale)}
                                            className={`${style.sidebar_link} ${isActive(router.asPath, router.locale, pageEnum.corporate_expertise) ? style.active : ""}`}>Kurumsal
        Ekspertiz</a></li>
      <li className={style.sidebar_item}><a href={getLink(pageEnum.damage_and_assessment, router.locale)}
                                            className={`${style.sidebar_link} ${isActive(router.asPath, router.locale, pageEnum.damage_and_assessment) ? style.active : ""}`}>Hasar
        ve Değerleme</a></li>
      <li className={style.sidebar_item}><a href={getLink(pageEnum.individual_expertise, router.locale)}
                                            className={`${style.sidebar_link} ${isActive(router.asPath, router.locale, pageEnum.individual_expertise) ? style.active : ""}`}>Bireysel
        Ekspertiz</a></li>
      <li className={style.sidebar_item}><a href={getLink(pageEnum.mobile_expertise, router.locale)}
                                            className={`${style.sidebar_link}  ${isActive(router.asPath, router.locale, pageEnum.mobile_expertise) ? style.active : ""}`}>Mobil
        Ekspertiz</a></li>
    </ul>

  </div>;
}

export default OtherExpertizService;
