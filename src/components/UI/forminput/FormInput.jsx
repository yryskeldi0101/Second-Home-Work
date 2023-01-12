import React from 'react'
import "./FormInput.css"
const FormInput = ({ id, value, labelName, placeholder, inputType, onChange}) => {
  return (
    <div className="div_block">
      <label className="label"  htmlFor={id}>{labelName}</label>
      <input className="input" value={value} placeholder={placeholder || "..."} id={id} type={inputType} onChange={onChange}/>
    </div>
  )
}

export default FormInput