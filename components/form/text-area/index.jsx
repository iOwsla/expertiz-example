import React from "react";
import style from "./style.module.scss";

function TextArea({
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
  return <div className={[...className, style.textarea].join(" ")}>
    <label htmlFor={name}>{label}</label>
    <textarea id={name} onChange={onChange} name={name} type={type} placeholder={placeholder}
              value={value}></textarea>
    {
      errorMessage && <>
        <div className={[...errorClass, style.error_message].join(" ")}>
          {errorMessage}
        </div>
      </>
    }
  </div>;
}

export default TextArea;
