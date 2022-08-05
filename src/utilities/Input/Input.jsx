import React from "react";
import "./Input.scss"
function Input(props) {
  const {type,inputId,inputClassName,required,placeholder,value,labelText,labelClassName}=props
  return (
    <div>
      <div className="input_container">
        <input type={type} id={inputId} required={required} className={inputClassName}
        placeholder={placeholder} value={value} />
        <label htmlFor={inputId} className={labelClassName}>{labelText}</label>
      </div>
    </div>
  );
}

export default Input;
