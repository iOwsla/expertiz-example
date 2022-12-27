import React from "react";
import style from "./style.module.scss";

function InputFileUpload({
                           type = "text",
                           errorMessage,
                           name,
                           className,
                           onChange,
                           value,
                           placeholder,
                           label,
                           id = "file_input",
                            uploadName="CV"
                         }) {


  return <div className={style.input}>
    <label htmlFor={name}>{label}</label>
    <div className={style.cv} onClick={(e) => document.querySelector("#file_input").click()}>
      <div className={style.cv_title}>{uploadName}</div>
      <img src={"/images/icons/file.svg"}/>
    </div>
    <input id={"file_input"} className={className} type={"file"} value={value} placeholder={placeholder}
           onChange={onChange}
           style={{display: "none"}} required/>
    {
      errorMessage && <>
        <div className={style.error_message}>
          {errorMessage}
        </div>
      </>
    }
  </div>
    ;
}

export default InputFileUpload;
