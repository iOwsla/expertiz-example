import React from "react";
import style from './style.module.scss';

function Popup({positionX, positionY, setModal, setMediaData, setMedia, media, mapData}) {
  return <div onMouseLeave={() => setModal(true)} style={{
    top: positionY - 20,
    left: positionX
  }} className={style.popup}>
    <div className={style.popup_container}>
      <div className={style.popup_content}>
        <div style={{
          position: "absolute", bottom: "1rem", left: "1rem"
        }}>
          <div className={style.city}>
            {mapData.city}
          </div>
          <div className={style.address}>
            {mapData.address}
          </div>
        </div>
      </div>
      <div className={style.popup_content_2}>
        <div className={style.image_content}>
          <div className={style.image_data}>Bayi: {mapData.seller}</div>
        </div>
        <div className={style.image_arrow} style={{
          cursor: "pointer"
        }} onClick={() => {
          setMedia(!media)
          setMediaData(mapData.gallery)
        }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M0 20C0 8.97164 8.97164 0 20 0C31.0284 0 40 8.97164 40 20C40 31.0284 31.0284 40 20 40C8.97164 40 0 31.0284 0 20ZM17.845 29.5116L26.1784 21.1784C26.83 20.5266 26.83 19.4734 26.1784 18.8217L17.845 10.4884C17.1934 9.83672 16.14 9.83672 15.4884 10.4884C14.8367 11.14 14.8367 12.1934 15.4884 12.845L22.6434 20L15.4883 27.155C14.8366 27.8066 14.8366 28.86 15.4883 29.5116C15.8133 29.8366 16.24 30 16.6666 30C17.0934 30 17.52 29.8366 17.845 29.5116Z"
                  fill="#FFCC05"/>
          </svg>
        </div>
      </div>
    </div>
    <div style={{
      zIndex: "6",
      position: "absolute",
      left: "50%",
      bottom: "-1rem",
      transform: "translateX(-50%) rotate(180deg)",
      width: "3rem",
      height: "2rem",
      backgroundColor: "white",
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
    }}>

    </div>
  </div>;
}

export default Popup;
