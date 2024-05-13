import { useState } from "react";
import "./App.css";
import Input from "./component/Input";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          register={register}
          name={"email"}
          placeholder={"Enter email address"}
          errors={errors}
        />
        <Input
          register={register}
          name={"age"}
          placeholder={"Enter age"}
          errors={errors}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
