import React from 'react';
import { useForm } from 'react-hook-form';

const FormSeeker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="firstName">firstName</label>
      <input {...register('firstName', { required: true })} />

      <label htmlFor="lastName">lastName</label>
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}

      <label htmlFor="email">email</label>
      <input {...register('email', { pattern: /\d+/ })} />
      {errors.email && <p>Please enter email.</p>}

      <label htmlFor="Phone number">Phone number</label>
      <input {...register('Phone ', { pattern: /\d+/ })} />
      {errors.phone && <p>Please enter phone number </p>}

      <input type="submit" />
    </form>
  );
};

export default FormSeeker;
