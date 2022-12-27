import React from "react";
import Button from "../form/button";
import style from "./style.module.scss";
import {getLink, pageEnum} from "../../lib/routes";
import {i18n} from "next-i18next";

function Detail() {
  return <div className={style.detail}>
    <div className="container">
      <div className={style.detail}>
        <h1 className={style.title}>Türkiye’de <br></br>
          +75 Noktada</h1>
        <div className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
          dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
        </div>
        <div className={style.button}><Button textColor={"#FFCC05"} href={getLink(pageEnum.expertiz, i18n.language)}
                                              bgColor="black" text={"Detay İçin Tıklayın"}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.10889 4H12.8613" stroke="#FFCC05" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M9.03516 0.800049L12.8615 4.00005L9.03516 7.20005" stroke="#FFCC05" strokeWidth="1.5"
                  strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        </div>
      </div>
    </div>
  </div>;
}

export default Detail;
