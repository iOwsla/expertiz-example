import React from "react";
import style from './style.module.scss';

function Banner({imgUrl = "/images/banner/who-we-are.png", content = [], bannerTitle}) {
  return <>
    <section className={style.banner} style={{
      backgroundImage: `linear-gradient(to right, rgba(0,0,0, .6), rgba(0,0,0, .6)), url("${imgUrl}")`
    }}>
      <div className="container">
        <div className={style.banner_content}>
          <span className={style.banner_title}>{bannerTitle}</span>
          <div className={style.banner_pages}>
            {
              content.map((c, i) => {
                return <>
                  {content[i - 1] &&
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.65872 2.47887C5.56604 2.57375 5.51416 2.70111 5.51416 2.83374C5.51416 2.96637 5.56604 3.09374 5.65872 3.18862L10.8363 8.50005L5.65872 13.8104C5.56604 13.9053 5.51416 14.0327 5.51416 14.1653C5.51416 14.2979 5.56604 14.4253 5.65872 14.5202C5.70376 14.5664 5.75762 14.6032 5.81711 14.6283C5.8766 14.6534 5.94052 14.6664 6.00509 14.6664C6.06966 14.6664 6.13358 14.6534 6.19307 14.6283C6.25256 14.6032 6.30642 14.5664 6.35147 14.5202L11.8573 8.87087C11.954 8.77166 12.0082 8.6386 12.0082 8.50005C12.0082 8.36151 11.954 8.22845 11.8573 8.12924L6.35147 2.47993C6.30642 2.43366 6.25256 2.39689 6.19307 2.37178C6.13358 2.34668 6.06966 2.33374 6.00509 2.33374C5.94052 2.33374 5.8766 2.34668 5.81711 2.37178C5.75762 2.39689 5.70376 2.43366 5.65872 2.47993V2.47887Z"
                        fill="white"/>
                    </svg>}
                  <span className={content.findIndex((e) => content.reverse()[0] == e) == i && style.active}>{c}</span>
                </>
              })
            }
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Banner;
