import React from "react";
import { useForm } from "react-hook-form";

export default function App({submit, loading = false, error}) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => submit(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> Battle Name </label>
       <input {...register("name", { required: true, maxLength: 30 })} />
    
      <input type="submit" />
      <h6>{error}</h6>
      <h6> {loading ? 'Loading...' : ''}</h6>
    </form>
  );
}