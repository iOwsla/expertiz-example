import React, { useState, useEffect } from "react";
import style from './style.module.scss';
function EasySteps({ mobile }) {
  const firstData = [
    {
      number: "01",
      title: "Araç Teslim Alma",
      description: `Kurumsal Filo kiralama şirketlerine ait olan kullanım ve sözleşme
süresi dolmuş araçların en yakın Bieksper araç depolarına teslimatı
sırasında oluşturulan araç teslim durumunu gösteren rapordur.`
    },
    {
      number: "02",
      title: "Hasar Tespiti",
      description: `Dünya standartlarında belirlenmiş Adil yıpranma koşulllarının
kaspam dışında kalan hasarlı bölümlerinin tek tek tespit
edilmesi ve bu hasarların yine akredite olmuş kuruluşlardan
elde edilen datalar ile belirlenmiş fiyatlamalarla değer kaybı ,
onarım işçiliği gibi detay raporlarınının oluşturulması işlemidir.`
    },
    {
      number: "03",
      title: "Hasarların Değer Fiyatlaması",
      description: `Hasar tespiti ile belirlenen bölümlerin işçilik saat ücretlerinin,
onarım sarf malzeme giderlerinin ve parça giderlerinin
hesaplanması işlemidir. Bu işlemler dünya genelinde
akredite olmuş kuruluşlardan elde edilen datalar ile
oluşturulmaktadır.`
    },
    {
      number: "04",
      title: "Hasar Değer Raporu",
      description: `Hasar tespiti ve hasarların detaylı fotoğraflarının fiyatlamaları ile birlikte sunulduğu kontrolü sağlanan aracın
toplam değer düşüm maliyetinin hesaplandığı final raporudur. Bu rapor çalışmış olduğumuz Filo Kiralama
şirketlerine müşterilerine tanzim etmeleri gereken değerkaybı toplam tutarı ile ilgili referans niteliğindedir.
`
    }
  ];
  const [data, setData] = useState([...firstData, ...firstData]);
  const [slider, setSlider] = useState({
    time: 8500,
    autoPlay: true,
    pagination: true,
    animation: false,
    animation_time: 8500
  });
  const [sliderIndex, setSliderIndex] = useState(0);

  let sliderTimeout;
  let animationTimeout;
  function resetTimeout(type) {
    if (type) clearTimeout(type);
  }

  useEffect(() => {
    setSlider({ ...slider, animation: true });
    if (slider.autoPlay) {
      resetTimeout(sliderTimeout);
      sliderTimeout = setTimeout(() => {
        setSliderIndex((prevIndex) => {
          changePosition(prevIndex >= (firstData.length - 1) ? 0 : prevIndex + 1);
          return prevIndex >= (firstData.length - 1) ? 0 : prevIndex + 1;
        });
        resetTimeout(sliderTimeout);

      }, slider.time);
    }
    return () => resetTimeout(sliderTimeout);
  }, [sliderIndex]);
  useEffect(() => {
    if (slider.autoPlay) {
      resetTimeout(animationTimeout);
      animationTimeout = setTimeout(() => {
        setSlider({ ...slider, animation: false });
        resetTimeout(animationTimeout);
      }, slider.animation_time);
    }
    return () => resetTimeout(animationTimeout);
  }, [slider]);

  const [positionX, setPositionX] = useState(null);
  function changePosition(index) {
    const step = document.getElementById(`step-${(index >= data.length ? 0 : index + 1)}`);
    const slideItemWidth = step.getBoundingClientRect().width;
    setPositionX(index == 0 ? 0 : (slideItemWidth * index) + (mobile ? (window.innerWidth - slideItemWidth) * index : index > 0 ? 100 * index : 100));
  }
  const changeSlider = (index) => (e) => {
    e.preventDefault();
    if (index === sliderIndex) return;
    changePosition(index);
    resetTimeout(animationTimeout);
    setSlider({ ...slider, animation: false });
    setSliderIndex(index);
  };


  return <div className={`${style.easy_steps}`}>

    <div className={`${style.easy_steps_content} ${mobile && "container"}`}>
      <div className={style.step_title}>
        Get Started with 4 Easy Steps
      </div>
      <div className="width-65">
        <div className={style.step_description}>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, </div>
      </div>
    </div>
    <div className="padding__bottom--20 position-relative">
      <div className={`${style.steps} overflow-hidden`}>

        {
          data.map((v, i) => <>
            <div className={style.step_container}>
              {mobile && <div className={style.line} id={`line-${i}`}></div>}
              <div className={`${style.step} ${sliderIndex == i && style.active}`} id={`step-${i}`}
                style={{
                  transform: `translateX(-${positionX}px)`
                }}
              >
                <div className={`${style.step_content}`} id={`step-item-${i}`} >
                  <div className={`${style.step_number} ${sliderIndex == i && style.active}`}>{v.number}</div>
                  <div className={`${style.step_title}`}>{v.title}</div>
                  <div className={`${style.step_description}`}>{v.description}</div>
                </div>
              </div>

              {
                mobile ?
                  <div className={style.line} id={`line-${i}`}></div>
                  : i >= 0 && i < 2 ? <div className={style.line} id={`line2-${i}`}></div> : <div className={style.line_width}></div>
              }

            </div>
          </>)
        }
        <div className={style.pagination}>
          {
            data.slice(0, firstData.length).map((s, index) => {
              return <>
                <div className={style.page} onClick={changeSlider(index)}>
                  <div className={`${style.page_content} ${sliderIndex == index && slider.animation && style.active}`}>
                    {
                      sliderIndex == index && slider.animation ?
                        <div>
                          <span className={style.page_content_text}>0{index + 1}</span>
                          <span className={style.page_content_text}>-</span>
                          <span className={style.page_content_text}>{s.title}</span>
                        </div>
                        :
                        <span className={style.page_content_text}>
                          0{index + 1}
                        </span>
                    }
                  </div>
                  <div className={`${style.pagination_line} ${slider.animation && index == sliderIndex ? style.animation : ""}`} style={{
                    width: slider.animation && index == sliderIndex ? "6rem" : "0rem",
                  }}>
                    <div className={style.line_coldown}></div>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </div>
    </div>
  </div>;
}

export default EasySteps;
