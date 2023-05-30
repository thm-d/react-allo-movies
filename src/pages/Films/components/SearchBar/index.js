import React from 'react';
import { useForm } from "react-hook-form";
import style from "./index.module.scss"

export const SearchBar = (props) => {
  const { searchMovies } = props;
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm({
    defaultValues: {
      query: "",
      language: "en-US"
    }
  });

  const onSubmit = (filter) => {
    searchMovies(filter);
    reset();
  };

  return (
    <form className={ `d-flex flex-row p-2 m-2 ${style.container}` } onSubmit={handleSubmit(onSubmit)}>
      <input {...register("query")}
             className={ `flex-fill form-control mr-2 ${style.input}` }
             placeholder="Please enter your keyword..." />
      <select {...register("language")} className={ `mr-2 form-control w-25 ${style.select}` }>
        <option value="en-US">English</option>
        <option value="fr-FR">French</option>
      </select>
      <button className="btn btn-small btn-warning"
              disabled={isSubmitting}>Submit
      </button>
    </form>
  );
};