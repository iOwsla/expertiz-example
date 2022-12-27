import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Input from "../input";
import TextArea from "../text-area";
import { GeneralUtil, useRefState, Validator } from "dev-35inch";
import InputFileUpload from "../file-upload";
import { useRouter } from 'next/router';

function Appeal() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true)
    } else {
      setMobile(false)
    }
    ; window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setMobile(true)
      } else {
        setMobile(false)
      }
      ;
    });
  }, []);
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    CV: false
  };

  const [cv, setCv] = useState(null);
  const [cvUploadAlert, setCvUploadAlert] = useState('');
  const [createCvURL, setCreateCvURL] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState(initialValues)
  const [completeForm, setCompleteForm] = useState(null);
  const [errorForm, setErrorForm] = useState(false);

  const router = useRouter()

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
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (completeForm == null) {
      setFormValues({ name: "",surname: "", email: "", phone: "", message: "", CV: false })
      validator.reset();
    }
    if (completeForm != null) {
      setTimeout(() => {
        setCompleteForm(null)
        setErrorForm(false);
      }, 10000);
    }
  }, [completeForm, errorForm]);


  const uploadToCv = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      if (i.size < 10000000) {
        if (i.type == "application/pdf" || i.type == "image/jpeg" || i.type == "application/msword" || i.type == "image/png" || i.type == "image/jpg" || i.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
          setCv(i);
          setCreateCvURL(
            i.type == "application/pdf" && "pdf" ||
            i.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && "docx" ||
            i.type == "application/msword" && "doc" ||
            i.type == "image/jpeg" && URL.createObjectURL(i) ||
            i.type == "image/png" && URL.createObjectURL(i) ||
            i.type == "image/jpg" && URL.createObjectURL(i)
          );
          setFormValues({ ...formValues, CV: i });
          setCvUploadAlert('');
        } else {
          setCvUploadAlert(form.errorFileType)
        }
      } else {
        setCvUploadAlert(form.error_fileSize)
      }
    }
  };

  const deleteCv = () => {
    document.getElementById('file_input').value = ""
    document.getElementById("file_input").disabled = true;
    setTimeout(() => {
      document.getElementById("file_input").disabled = false;
    }, 100);
    setFormValues({ ...formValues, CV: false });
    setCreateCvURL();
    setCv();
  }

  const contactSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    let value = { ...formValues };
    for (var key in value) {
      formData.append(key, value[key]);
    }

    const isValid = validator.allValid()
    GeneralUtil.scrollTopForValidation(validatorRef?.current)
    reRender(1)
    setIsSubmit(true);
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
    <div className={`container ${style.appeal}`}>
      <div className={`row ${style.appeal_header}`}>
        <div className={`${style.head_title}`}>Ekspertiz</div>
        <div className={`${style.head_button}`}>
          <button onClick={(a) => document.getElementById("form-scroll").scrollIntoView({ behavior: "smooth" })}>Başvur
          </button>
        </div>
      </div>
      <div className={"row gap-2"}>
        <div className={"col-1"}>
          <p className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
        </div>
        <div className={"col-1"}>
          <p className={"description"}> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Praesent
            auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. </p>
        </div>
        <div className={"col-1"}>
          <p className={"description"}>Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
            convallis convallis diam
            sit amet lacinia. Aliquam in elementum tellus.</p>
        </div>
      </div>
      {!mobile && <>
        <div className={`row ${style.images}`}>
          <div className={style.image}>
            <img src={"/images/pages/career-image1.png"} />
          </div>
          <div className={style.image}>
            <img src={"/images/pages/career-image2.png"} />
          </div>
          <div className={style.image}>
            <img src={"/images/pages/career-image3.png"} />
          </div>
        </div>
      </>}
      {mobile &&
        <div className={style.image}>
          <img src={"/images/pages/career-image1.png"} />
        </div>
      }
      <div className={`row ${style.responsibilities}`}>
        <div className={style.responsibilities_title}>Responsibilities:</div>
        <ul className={style.list}>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
        </ul>
      </div>
      {mobile &&
        <div className={style.image}>
          <img src={"/images/pages/career-image2.png"} />
        </div>
      }
      <div className={`row ${style.responsibilities} ${style.opacity}`}>
        <div className={style.responsibilities_title}>Requirements::</div>
        <ul className={style.list}>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
          <li className={style.list_item}>
            <img src={"/images/icons/check.svg"} />
            <div className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </div>
          </li>
        </ul>
      </div>
      {mobile &&
        <div className={style.image} id={"form-scroll"}>
          <img src={"/images/pages/career-image3.png"} />
        </div>
      }
      <div className={style.form} id={"form-scroll"}>
        <div className={"title text-align-center"}>Apply for this Job</div>
        <form>
          <div className="row">
            <div className="col-1 flex flex-mobile justify-content-space-beetwen">
              <div className="col-2 width-48"> <Input errorClass={[style.contact_input]} placeholder={"Adınız"}
                errorMessage={validator.register('name', formValues?.name, [{ rule: 'required' }, {
                  rule: 'maxStringLength',
                  value: 50
                }, { rule: 'minStringLength', value: 3 }], validatorScopeKey)} value={formValues.name} name="name"
                onChange={handleChange}></Input></div>
              <div className="col-2 width-48"> <Input errorClass={[style.contact_input]} placeholder={"Soyadınız"}
                errorMessage={validator.register('surname', formValues?.surname, [{ rule: 'required' }, {
                  rule: 'maxStringLength',
                  value: 50
                }, { rule: 'minStringLength', value: 3 }], validatorScopeKey)} value={formValues.surname} name="surname"
                onChange={handleChange}></Input></div>
            </div>
            <div className="col-1">
              <Input errorClass={[style.contact_input]} placeholder={"Email"}
                errorMessage={validator.register('email', formValues?.email, [{ rule: 'required' }, { rule: 'isEmail' }, {
                  rule: 'maxStringLength',
                  value: 50
                }, { rule: 'minStringLength', value: 10 }], validatorScopeKey)} value={formValues.email} name="email"
                onChange={handleChange}></Input>
              <Input errorClass={[style.contact_input]} placeholder={"Telefon"}
                errorMessage={validator.register('phone', formValues?.phone, [{ rule: 'required' }, {
                  rule: 'maxStringLength',
                  value: 50
                }, { rule: 'minStringLength', value: 3 }], validatorScopeKey)} value={formValues.phone} name="phone"
                onChange={handleChange}></Input>
              <InputFileUpload errorClass={[style.contact_input]}
                errorMessage={isSubmit && cv == null && "Lütfen dosya yükleyiniz!"} type={"file"}
                onChange={uploadToCv}
                uploadName={cv ? cv.name : undefined}
              >
              </InputFileUpload>
              <TextArea
                errorClass={[style.contact_input]}
                className={[style.contact_textarea]}
                placeholder={"Mesajınız"}
                name="message"
                onChange={handleChange}
                value={formValues.message}
                errorMessage={validator.register('message', formValues?.message, [{ rule: 'required' }, {
                  rule: 'maxStringLength',
                  value: 500
                }, { rule: 'minStringLength', value: 10 }], validatorScopeKey)}
              ></TextArea>
            </div>
          </div>
          <div className={style.button}>
            <button onClick={completeForm ? (e) => {
              e.preventDefault()
            } : contactSubmit}
              className={`${style.button} ${completeForm == true ? style.success : completeForm == false ? style.unsuccess : ""}`}
              type="submit">{
                completeForm == true ? "Gönderildi" : completeForm == false ? "Gönderilmedi" : "Başvur"
              }</button>
          </div>
        </form>
      </div>
    </div>

  </>;
}

export default Appeal;
