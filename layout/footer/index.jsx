import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { getLink, pageEnum } from "../../lib/routes";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const [t, i18n] = useTranslation("home");
  const [mobile, setMobile] = useState(false);

  const [menuList, setMenuList] = useState([
    {
      name: "Hizmetler",
      subLink: [
        {
          name: "Servis Denetim Hizmeti",
          url: getLink(pageEnum.service_inspection, i18n.language),
          id: pageEnum.service_inspection
        },
        {
          name: "Ekspertiz",
          url: getLink(pageEnum.expertiz, i18n.language),
          id: pageEnum.expertiz
        },
        {
          name: "Araç Stoklama",
          url: getLink(pageEnum.vehicle_stocking, i18n.language),
          id: pageEnum.vehicle_stocking
        },
        {
          name: "Şoförlü Araç Taşıma ve Raporlama",
          url: getLink(pageEnum.chauffeur_driven_vehicle, i18n.language),
          id: pageEnum.chauffeur_driven_vehicle
        },
        {
          name: "Diğer Sektörel Hizmetler",
          url: getLink(pageEnum.other_sectoral, i18n.language),
          id: pageEnum.other_sectoral
        }
      ]
    },
    {
      name: "Şirket",
      subLink: [
        {
          name: "Hakkımızda",
          url: getLink(pageEnum.who_we_are, i18n.language),
          id: pageEnum.who_we_are
        },
        {
          name: "Yönetim Kurulu",
          url: getLink(pageEnum.board_of_directors, i18n.language),
          id: pageEnum.board_of_directors
        },
        {
          name: "Kariyer",
          url: getLink(pageEnum.career, i18n.language),
          id: pageEnum.career
        },
        {
          name: "İletişim",
          url: getLink(pageEnum.contact, i18n.language),
          id: pageEnum.contact
        }
      ]
    },
    {
      name: "Destek",
      subLink: [
        {
          name: "Privacy Policy",
          url: getLink(pageEnum.who_we_are, i18n.language),
          id: pageEnum.board_of_directors
        },
        {
          name: "Terms of Service",
          url: getLink(pageEnum.board_of_directors, i18n.language),
          id: pageEnum.board_of_directors
        },
        {
          name: "Code of Conduct",
          url: getLink(pageEnum.board_of_directors, i18n.language),
          id: pageEnum.board_of_directors
        }
      ]
    },
  ]);

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
  const htmlItem = <>
    {
      menuList.map((m, i) => (
        <>
          <ul key={i} className={`${style.footer_menu}`}>
            <span className="title-sm">{m.name}</span>
            {m.subLink.map((sl, sli) => (<>
              <li onClick={(e) => document.location.href = sl.url}
                className={sl.url.replace(`/${router.locale}`, "") === router.asPath && style.active}>{sl.name}</li>
            </>))}
          </ul>
        </>
      ))
    }
    <ul className={`${style.footer_menu} ${style.footer_social}`}>
      <li>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_7_186)">
            <path
              d="M23 12.0723C22.9997 9.77914 22.3698 7.53404 21.1847 5.60282C19.9997 3.6716 18.3091 2.13514 16.3132 1.17535C14.3173 0.215556 12.0996 -0.127381 9.92274 0.18714C7.74585 0.50166 5.70092 1.46047 4.03002 2.95004C2.35913 4.43962 1.13226 6.39759 0.494652 8.59216C-0.142956 10.7867 -0.164596 13.126 0.432293 15.333C1.02918 17.54 2.2196 19.5223 3.86263 21.0452C5.50565 22.5682 7.53247 23.568 9.70312 23.9263V15.5413H6.78308V12.0723H9.70312V9.42835C9.70312 6.42135 11.4205 4.75935 14.0463 4.75935C14.9089 4.77226 15.7695 4.85046 16.6213 4.99335V7.94735H15.1704C14.7336 7.88685 14.2917 8.00982 13.9418 8.28923C13.5919 8.56864 13.3627 8.98162 13.3045 9.43735C13.2881 9.56497 13.2855 9.69412 13.2969 9.82235V12.0723H16.4833L15.9735 15.5413H13.2902V23.9263C15.9965 23.4813 18.4617 22.0427 20.2419 19.8694C22.022 17.6962 23.0001 14.9312 23 12.0723Z"
              fill="#383838" />
          </g>
          <defs>
            <clipPath id="clip0_7_186">
              <rect width="23" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </li>
      <li>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 4.5998C22.1375 4.9998 21.275 5.29981 20.3167 5.39981C21.275 4.79981 22.0417 3.79981 22.425 2.6998C21.4667 3.2998 20.5083 3.69981 19.4542 3.89981C18.5917 2.8998 17.3458 2.2998 16.0042 2.2998C13.4167 2.2998 11.3083 4.4998 11.3083 7.1998C11.3083 7.5998 11.3083 7.99981 11.4042 8.29981C7.37917 8.09981 3.92917 6.09981 1.62917 3.0998C1.15 3.8998 0.958333 4.69981 0.958333 5.59981C0.958333 7.29981 1.82083 8.79981 3.06667 9.69981C2.3 9.69981 1.53333 9.49981 0.958333 9.09981C0.958333 9.09981 0.958333 9.0998 0.958333 9.19981C0.958333 11.5998 2.5875 13.5998 4.69583 13.9998C4.3125 14.0998 3.92917 14.1998 3.45 14.1998C3.1625 14.1998 2.875 14.1998 2.5875 14.0998C3.1625 16.0998 4.8875 17.4998 6.99583 17.4998C5.36667 18.7998 3.35417 19.5998 1.15 19.5998C0.766667 19.5998 0.383333 19.5998 0 19.4998C2.10833 20.8998 4.6 21.6998 7.1875 21.6998C15.9083 21.6998 20.6042 14.1998 20.6042 7.6998C20.6042 7.4998 20.6042 7.29981 20.6042 7.09981C21.5625 6.39981 22.3292 5.4998 23 4.5998Z"
            fill="#383838" />
        </svg>

      </li>
    </ul>
  </>
  return <>


    <footer className={`${style.footer} container`}>
      <div className={`${style.footer_desc}`}>
        <div className="row">
          <a href={getLink(pageEnum.home, i18n.language)} className={style.footer_image}>
            <img src="/images/logo_dark.svg"></img>
          </a>
          <div className={`${style.description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque,
            mauris eu quis ultricies viverra dui venenatis. Eu odio sit tincidunt elementum a. Vulputate egestas sed
            gravida ut purus id tristique. Eu feugiat aliquam egestas convallis ultrices tellus.
          </div>
          <div className={style.footer_copyright}>
            © BiEkpser 2015. Tüm Hakları Saklıdır.
          </div>
        </div>
      </div>
      {mobile ? <div className={style.footer_menus}>{htmlItem}</div> : htmlItem}
    </footer>
  </>;
}

export default Footer;
