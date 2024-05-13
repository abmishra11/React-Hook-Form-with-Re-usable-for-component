import React from "react";

export default function Input({ name, placeholder, register, errors }) {
  console.log(errors[name]);
  return (
    <div>
      <input
        {...register(name, { required: true })}
        name={name}
        placeholder={placeholder}
      />
      {errors[name] ? <p>{name.toUpperCase()} field is required</p> : <></>}
    </div>
  );
}
