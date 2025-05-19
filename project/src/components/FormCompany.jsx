import React from 'react';
import { useForm } from 'react-hook-form';
import css from './formStyle.module.css';

const FormCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="css.container">
      <form
        className={css.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <label htmlFor="Company Name">Company Name</label>

        <input
          className="input"
          {...register('Company Name', { required: true })}
        />
        <label htmlFor="email">email</label>

        <input
          className="input"
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <p>Last name is required.</p>}
        <label htmlFor="Phone number">Phone number</label>

        <input
          className="input"
          {...register('Phone number', { pattern: /\d+/ })}
        />
        {errors.age && <p>Please enter number for age.</p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormCompany;
