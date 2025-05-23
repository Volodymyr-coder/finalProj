import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './formStyle.module.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [userType, setUserType] = useState('');

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm();
  useEffect(() => {
    Object.entries(errors).forEach(([_, error]) => {
      if (error?.message) {
        toast.error(error.message);
      }
    });
  }, [errors]);

  const onSubmit = async (data) => {
    const fullData = { ...data, userType };
    console.log('Form Data:', fullData);
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fullData)
      });

      if (!response.ok) {
        throw new Error(' Error, your registration was not successful!');
      }
      const result = await response.json();
      console.log(result);
      toast.success('Registration successful!');
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.userTypeSelector}>
          <button
            className={css.btn}
            type="button"
            onClick={() => setUserType('company')}
          >
            Company
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={() => setUserType('seeker')}
          >
            Seeker
          </button>
        </div>
        <h2 className={css.title}>Sign up</h2>

        <input
          placeholder="username"
          className={css.input}
          {...register('name', { required: 'Name is required' })}
        />

        <input
          className={css.input}
          type="email"
          placeholder="email"
          {...register('email', { required: 'Email is required' })}
        />

        <input
          className={css.input}
          type="password"
          placeholder="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />

        <input
          className={css.input}
          type="password"
          placeholder="confirm password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === watch('password') || 'Confirm password'
          })}
        />

        <input type="submit" value="Sign Up" />
        <p>
          already have account?{' '}
          <Link className={css.link} to="/login">
            Log in
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
