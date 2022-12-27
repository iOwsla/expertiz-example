import React from "react";
import styles from './style.module.scss';

function Button({
  text, textColor, bgColor, className=[], style, href, children
}) {
  return <a href={href} className={`${styles.button} ${className.join(" ")}`} style={{
    color: textColor,
    backgroundColor: bgColor,
    ...style
  }}>
    <span>{text}</span>
    {children}
  </a>;
}

export default Button;
