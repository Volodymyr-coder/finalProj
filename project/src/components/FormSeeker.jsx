import React from 'react';
import { useForm } from 'react-hook-form';
import css from './formStyle.module.css';

const FormSeeker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div>
      <form
        className={css.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          className="input"
          {...register('firstName', { required: true })}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          className="input"
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <p>Last name is required.</p>}

        <label htmlFor="email">email</label>
        <input className="input" {...register('email', { pattern: /\d+/ })} />
        {errors.email && <p>Please enter email.</p>}

        <label htmlFor="password">password</label>
        <input
          className="input"
          {...register('password', { pattern: /\d+/ })}
        />
        {errors.password && <p>Please enter number for password.</p>}
        <label htmlFor="password">Confirm password</label>
        <input
          className="input"
          {...register('password', { pattern: /\d+/ })}
        />
        {errors.password && <p>Please enter number for password.</p>}
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default FormSeeker;
