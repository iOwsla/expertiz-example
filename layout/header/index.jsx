import React, { useEffect, useState } from "react";
import { getLink, getLinkBySource, isActive, pageEnum } from "/lib/routes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "./style.module.scss";


function Header(props) {
  const { t, i18n } = useTranslation("home");
  const router = useRouter();
  const [select, setSelect] = useState(i18n.language);
  const [navMenu, setNavMenu] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const [headerType, setHeaderType] = useState("transparent");
  const [mobile, setMobile] = useState(false);
  const [menuList, setMenuList] = useState([
    {
      name: "Anasayfa",
      url: getLink(pageEnum.home, i18n.language),
      id: [pageEnum.home],
      subLink: null
    },
    {
      name: "Hizmetler",
      url: "#",
      id: [
        pageEnum.service_inspection,
        pageEnum.expertiz, pageEnum.mobile_expertise, pageEnum.damage_and_assessment, pageEnum.individual_expertise, pageEnum.corporate_expertise,
        pageEnum.vehicle_stocking,
        pageEnum.chauffeur_driven_vehicle,
        pageEnum.other_sectoral,
      ],
      subLink: [
        {
          name: "Servis Denetim Hizmeti",
          url: getLink(pageEnum.service_inspection, i18n.language),
          id: pageEnum.service_inspection,
        },
        {
          name: "Ekspertiz",
          url: getLink(pageEnum.expertiz, i18n.language),
          id: [pageEnum.expertiz, pageEnum.mobile_expertise, pageEnum.damage_and_assessment, pageEnum.individual_expertise, pageEnum.corporate_expertise],
        },
        {
          name: "Araç Stoklama",
          url: getLink(pageEnum.vehicle_stocking, i18n.language),
          id: pageEnum.vehicle_stocking,
        },
        {
          name: "Şoförlü Araç Taşıma ve Raporlama",
          url: getLink(pageEnum.chauffeur_driven_vehicle, i18n.language),
          id: pageEnum.chauffeur_driven_vehicle,
        },
        {
          name: "Diğer Sektörel Hizmetler",
          url: getLink(pageEnum.other_sectoral, i18n.language),
          id: pageEnum.other_sectoral,
        }
      ]
    },
    {
      name: "Kurumsal",
      url: "#",
      id: [pageEnum.who_we_are, pageEnum.board_of_directors],
      subLink: [
        {
          name: "Hakkımızda",
          url: getLink(pageEnum.who_we_are, i18n.language),
          id: pageEnum.who_we_are,
        },
        {
          name: "Yönetim Kurulu",
          url: getLink(pageEnum.board_of_directors, i18n.language),
          id: pageEnum.board_of_directors,
        }
      ]
    },
    {
      name: "Kariyer",
      url: getLink(pageEnum.career, i18n.language),
      subLink: null,
      id: [pageEnum.career]
    },
    {
      name: "İletişim",
      url: getLink(pageEnum.contact, i18n.language),
      subLink: null,
      id: [pageEnum.contact]
    }
  ]);
  const setDivHeight = (index) => () => {
    const subMenuHeightSelector = document.querySelector(`#sub_menu_height-${index}`);
    setMenuIndex(index);
    setSubMenuHeight(subMenuHeightSelector?.offsetHeight || 0);

  };


  useEffect(() => {
    function setDivHeightFunction(index) {
      const subMenuHeightSelector = document.querySelector(`#sub_menu_height-${index}`);
      setMenuIndex(index)
      setSubMenuHeight(subMenuHeightSelector?.offsetHeight)
    }

    if (window.outerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    ;
    document.addEventListener("resize", () => {
      if (window.outerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
      ;
    })
    menuList.map((e, index) => {
      if (isActive(router.asPath, router.locale, e.id)) {
        setDivHeightFunction(index)
      }
    })
  }, []);

  useEffect(() => {
    if (mobile ? window.pageYOffset >= 60 : window.pageYOffset >= 160) {
      setHeaderType("white");
    } else {
      setHeaderType("transparent");
    }
    window.addEventListener("scroll", (e) => {
      if (mobile ? window.pageYOffset >= 60 : window.pageYOffset >= 160) {
        setHeaderType("white");
      } else {
        setHeaderType("transparent");
      }
    });
  }, []);
  return (
    <>
      <header id="header" >
        <div className={style.header_fixed}>
          <div className={`${style.header} ${headerType == "white" && style.active_header} ${navMenu && style.openMenu}`}>
            <a href={getLink(pageEnum.home, i18n.language)} className={style.logo}>
              <img src={mobile && navMenu ? "/images/logo_dark.svg" : "/images/logo.svg"}></img>
            </a>
            <div className={navMenu ? `${style.hamburger} ${style.active} ${headerType == "white" && style.active_header}` : `${style.hamburger} ${headerType == "white" && style.active_header}`} onClick={() => {
              if (!navMenu) {
                document.body.classList.add("lock-scroll")
              } else {
                document.body.classList.remove("lock-scroll")
              }
              setNavMenu(!navMenu)
            }}>
              <span className={style.line}></span>
              <span className={style.line}></span>
              <span className={style.line}></span>
            </div>
          </div>
          <div className={style.navbar_container}>
            <div className={style.navbar_header}>
              <div className={navMenu ? `${style.hamburger} ${style.active}` : style.hamburger} onClick={() => {
                if (!navMenu) {
                  document.body.classList.add("lock-scroll")
                } else {
                  document.body.classList.remove("lock-scroll")
                }
                setNavMenu(!navMenu)
              }}>
                <span className={style.line}></span>
                <span className={style.line}></span>
                <span className={style.line}></span>
              </div>
            </div>
            <div style={{
              transform: navMenu ? "translateX(0%)" : "translateX(140%)"
            }} className={navMenu ? `${style.navbar}  ${headerType == "white" && style.active_header}` : style.navbar}>
              <ul className={style.menu}>
                {menuList.map((menu, index) => (
                  <>
                    <li
                      className={`${style.menu_item} ${isActive(router.asPath, router.locale, menu.id) && menuIndex == index ? style.active : menuIndex == index ? style.active : ""}`}
                      onClick={setDivHeight(index)}>
                      {
                        menu.url == "#" ? <span>{menu.name}</span> : <a href={menu.url}><span>{menu.name}</span></a>
                      }
                      {
                        menu.subLink && (

                          <div className={style.sub_menu} style={{
                            height: index == menuIndex ? `${subMenuHeight}px` : 0
                          }}>
                            <ul className={style.menu_item_list} id={`sub_menu_height-${index}`}>
                              {
                                menu.subLink.map((s_link, index2) => (
                                  <li
                                    className={`${style.menu_item_list_item} ${isActive(router.asPath, router.locale, s_link.id) && style.active}`}>
                                    <a href={s_link.url}>{s_link.name}</a>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        )
                      }
                    </li>
                  </>
                ))}
              </ul>
              <div className={style.languages}>
                <ul className={style.language_list}>
                  {router.locales.map((locale) => (
                    <Link
                      href={getLinkBySource(
                        router.asPath,
                        router.locale,
                        locale,
                      )}
                      locale={false}
                    >
                      <li
                        onClick={() => setSelect(locale)}
                        className={`${style.language} ${locale == select && style.active}`}>
                        {locale.toUpperCase()}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
