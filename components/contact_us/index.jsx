import React, {useCallback, useEffect, useState} from "react";
import Input from "../form/input";
import TextArea from '../form/text-area';
import style from './style.module.scss';
import {GeneralUtil, useRefState, Validator} from 'dev-35inch';
import {AnimationOnScroll} from "react-animation-on-scroll";

function ContactUs() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  const [formValues, setFormValues] = useState(initialValues)
  const [isLoading, setIsLoading] = useState(false)
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
      setFormValues({name: "", email: "", phone: "", message: ""})
      validator.reset();
    }
    if (completeForm != null) {
      setTimeout(() => {
        setCompleteForm(null)
        setErrorForm(false);
      }, 10000);
    }
  }, [completeForm, errorForm]);

  const send = useCallback(async (e) => {
    e.preventDefault();
    var formData = new FormData();
    for (var key in formValues) {
      formData.append(key, formValues[key]);
    }
    const isValid = validator.allValid()
    GeneralUtil.scrollTopForValidation(validatorRef?.current)
    reRender(1)
    if (isValid) {
      setIsLoading(true)
      try {
        let res = await fetch("https://mailsender.35inch.com/kristyitt-contact", {
          method: "POST",
          body: formData,
        });
        setIsLoading(false)
        if (res.status === 200) {
          setCompleteForm(true)
        } else {
          setErrorForm(true);
          setCompleteForm(false)
        }
      } catch (err) {
        setErrorForm(true);
        setIsLoading(false)
        console.log('error', err)
      }
    }
  }, [formValues])

  return <section className={`${style.contact_us} container`}>
    <form>
      <div className="row">
        <div className="col-1 overflow-hidden">
          <AnimationOnScroll animateIn={"animate__slideInLeft"}>
            <h1 className={`${style.contact_title} title`}>Bizimle iletişime geçin.</h1>
          </AnimationOnScroll>

        </div>
        <div className="col-1">
          <AnimationOnScroll animateIn={"animate__fadeIn"}>
            <Input placeholder={"Adınız Soyadınız"} className={[style.contact_input]}
                   errorMessage={validator.register('name', formValues?.name, [{rule: 'required'}, {
                     rule: 'maxStringLength',
                     value: 50
                   }, {rule: 'minStringLength', value: 3}], validatorScopeKey)} value={formValues.name}
                   name="name"
                   onChange={handleChange}>
            </Input>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn={"animate__fadeIn"}>
            <Input placeholder={"Email"} className={[style.contact_input]}
                   errorMessage={validator.register('email', formValues?.email, [{rule: 'required'}, {rule: 'isEmail'}, {
                     rule: 'maxStringLength',
                     value: 50
                   }, {rule: 'minStringLength', value: 10}], validatorScopeKey)} value={formValues.email}
                   name="email"
                   onChange={handleChange}>
            </Input>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn={"animate__fadeIn"}>
            <Input placeholder={"Telefon"} className={[style.contact_input]}
                   errorMessage={validator.register('phone', formValues?.phone, [{rule: 'required'}, {
                     rule: 'maxStringLength',
                     value: 50
                   }, {rule: 'minStringLength', value: 3}], validatorScopeKey)} value={formValues.phone}
                   name="phone"
                   onChange={handleChange}>
            </Input>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn={"animate__fadeIn"}>
            <TextArea
              placeholder={"Mesajınız"}
              className={[style.contact_text_area]}
              errorClass={[style.contact_text_area_error]}
              name="message"
              onChange={handleChange}
              value={formValues.message}
              errorMessage={validator.register('message', formValues?.message, [{rule: 'required'}, {
                rule: 'maxStringLength',
                value: 500
              }, {rule: 'minStringLength', value: 10}], validatorScopeKey)}
            ></TextArea>
          </AnimationOnScroll>
        </div>
      </div>
      <button onClick={completeForm ? (e) => {
        e.preventDefault()
      } : send}
              className={`${style.button} ${completeForm == true ? style.success : completeForm == false ? style.unsuccess : ""}`}
              type="submit">{
        completeForm == true ? "Gönderildi" : completeForm == false ? "Gönderilmedi" : "Gönder"
      }</button>
    </form>
  </section>;
}

export default ContactUs;
