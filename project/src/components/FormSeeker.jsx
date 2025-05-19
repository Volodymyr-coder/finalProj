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

        <label htmlFor="Phone number">Phone number</label>
        <input className="input" {...register('Phone ', { pattern: /\d+/ })} />
        {errors.phone && <p>Please enter phone number </p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormSeeker;
