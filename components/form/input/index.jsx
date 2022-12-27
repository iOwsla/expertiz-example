import React from "react";
import style from "./style.module.scss";

function Input({
                 type = "text",
                 errorMessage,
                 name,
                 className=[],
                 onChange,
                 value,
                 placeholder,
                 errorClass=[],
                 label
               }) {
  return <div className={style.input}>
    <label htmlFor={name}>{label}</label>
    <input id={name} className={className} onChange={onChange} name={name} type={type} value={value}
           placeholder={placeholder}/>
    {
      errorMessage && <>
        <div className={[...errorClass, style.error_message].join(" ")}>
          {errorMessage}
        </div>
      </>
    }
  </div>;
}

export default Input;
