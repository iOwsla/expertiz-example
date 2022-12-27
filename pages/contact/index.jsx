import React, {useEffect, useState} from "react";
import Banner from "../../components/banner";
import Layout from "/layout/main";
import style from "./style.module.scss";
import TextArea from "../../components/form/text-area";
import Input from "../../components/form/input";
import {GeneralUtil, useRefState, Validator} from "dev-35inch";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


function Contact() {
  const [mobile, setMobile] = useState(false);
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

  const initialValues = {name: "", surname: "", email: "", phone: "", message: ""};
  const [formValues, setFormValues] = useState(initialValues)
  const [completeForm, setCompleteForm] = useState(null);
  const [errorForm, setErrorForm] = useState(false);

  const [validator, validatorRef] = useRefState(new Validator({
    validatorMessages: {
      messages: {
        required: "Zorunlu Alan!",
        maxStringLength: "Maximum karakter sınırını aştınız.",
        minStringLength: "Minimum karakter sınırı altındasınız.",
        isEmail: "Email Formatı Hatalı",
        isNumber: "Lütfen sadece numara giriniz"
      }
    }
  }))

  const validatorScopeKey = validator.generateNewScopeKey()
  const [, reRender] = useState(null)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  useEffect(() => {
    if (completeForm == null) {
      setFormValues({
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: ""
      })
      validator.reset();
    }
    if (completeForm != null) {
      setTimeout(() => {
        setCompleteForm(null)
        setErrorForm(false);
      }, 10000);
    }
  }, [completeForm, errorForm]);

  const contactSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    let value = {...formValues};
    for (var key in value) {
      formData.append(key, value[key]);
    }

    const isValid = validator.allValid()
    GeneralUtil.scrollTopForValidation(validatorRef?.current)
    reRender(1)
    if (isValid) {
      setCompleteForm(true);
      try {
        let res = await fetch("https://mailsender.35inch.com/otuzbesinch-career", {
          method: "POST",
          body: formData
        })
        if (res.status === 200) {
          setCompleteForm(true)
        } else {
          setCompleteForm(false)
        }
      } catch (err) {
        setCompleteForm(false)
        console.log('error', err)
      }
    }
  }
  return <>
    <Layout>
      <Banner bannerTitle={"İletişim"} content={["Anasayfa", "İletişim"]}
              imgUrl={"/images/banner/contact.png"}></Banner>

      <div className={style.contact}>
        <div className={"container"}>
          <div className={`row ${style.contact_content}`}>
            <div className={`col-2 ${style.left}`}>
              <div className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, nullam
                risus, viverra scelerisque elit quis. Luctus at velit, tincidunt feugiat quis sapien eu. Dignissim orci
                in maecenas odio viverra auctor molestie.
              </div>
              <div className={`row ${style.items}`}>
                <div className={`${style.item}`}>
                  <div className={style.item_logo}>
                    <img src={"/images/icons/location.svg"} alt={"Icon"}></img>
                  </div>
                  <div className={style.item_content}>
                    <div className={style.item_top_title}>İstanbul Genel Merkez</div>
                    <div className={style.item_title}>Turgut Özal Mah. E-5 Üzeri
                      Petrol Ofisi içi 42 / J
                      ESENYURT / İSTANBUL
                    </div>
                  </div>
                </div>

                <div className={`${style.item}`}>
                  <div className={style.item_logo}>
                    <img src={"/images/icons/location.svg"} alt={"Icon"}></img>
                  </div>
                  <div className={style.item_content}>
                    <div className={style.item_top_title}>İzmir Grup Müdürlüğü</div>
                    <div className={style.item_title}>9 Eylül Mah. Sarnıç Yolu
                      No:35 Sarnıç
                      Gaziemir, İZMİR
                    </div>
                  </div>
                </div>


              </div>
              <div className={`row ${style.items} ${style.item_second}`}>
                <div className={`${style.item}`}>
                  <div className={style.item_logo}>
                    <img src={"/images/icons/phone.svg"} alt={"Icon"}></img>
                  </div>
                  <div className={style.item_content}>
                    <div className={style.item_top_title}>Phone</div>
                    <div className={style.item_title}>+90 850 480 05 10</div>
                  </div>
                </div>
                <div className={`${style.item}`}>
                  <div className={style.item_logo}>
                    <img src={"/images/icons/email.svg"} alt={"Icon"}></img>
                  </div>
                  <div className={style.item_content}>
                    <div className={style.item_top_title}>Email</div>
                    <div className={style.item_title}>info@bieksper.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-3 ${style.right}`}>
              <form className={style.form}>

                <div className={style.input_left_right}>
                  <div className={style.input_left}>
                    <Input
                      errorClass={[style.input_error]}
                      name={"name"}
                      value={formValues.name}
                      onChange={handleChange}
                      errorMessage={validator.register('name', formValues?.name, [{rule: 'required'}, {
                        rule: 'maxStringLength',
                        value: 50
                      }, {rule: 'minStringLength', value: 3}], validatorScopeKey)} placeholder={"Adınız"}></Input>
                  </div>
                  <div className={style.input_right}>
                    <Input
                      errorClass={[style.input_error]}
                      name="surname"
                      onChange={handleChange}
                      value={formValues.surname}
                      errorMessage={validator.register('surname', formValues?.surname, [{rule: 'required'}, {
                        rule: 'maxStringLength',
                        value: 50
                      }, {rule: 'minStringLength', value: 3}], validatorScopeKey)} placeholder={"Soyadınız"}></Input>
                  </div>
                </div>
                <div className={style.input_right}>
                  <Input
                    errorClass={[style.input_error]}
                    name="email"
                    onChange={handleChange}
                    value={formValues.email}
                    errorMessage={validator.register('email', formValues?.email, [{rule: 'required'}, {rule: 'isEmail'}, {
                      rule: 'maxStringLength',
                      value: 50
                    }, {rule: 'minStringLength', value: 10}], validatorScopeKey)} placeholder={"Email"}></Input>
                </div>
                <TextArea
                  errorClass={[style.text_area_error]}
                  name={"message"}
                  onChange={handleChange}
                  value={formValues.message}
                  errorMessage={validator.register('message', formValues?.message, [{rule: 'required'}, {
                    rule: 'maxStringLength',
                    value: 500
                  }, {rule: 'minStringLength', value: 10}], validatorScopeKey)}
                  placeholder={"Mesaj"} className={[style.text_area]}></TextArea>
                <button onClick={completeForm ? (e) => {
                  e.preventDefault()
                } : contactSubmit}
                        className={`${style.button} ${completeForm == true ? style.success : completeForm == false ? style.unsuccess : ""}`}
                        type="submit">{
                  completeForm == true ? "Gönderildi" : completeForm == false ? "Gönderilmedi" : "Gönder"
                }</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe width="100%" height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Turgut%20%C3%96zal%20Mh,%2070.%20Sk.%20No:42C,%2034513%20Esenyurt/%C4%B0stanbul+(Bieksper)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
    </Layout>

  </>;
}

export default Contact;

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