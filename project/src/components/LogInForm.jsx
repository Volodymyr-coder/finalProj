import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './formStyle.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LogInForm = () => {
  const {
    register,
    reset,
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
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const result = await response.json();
      console.log('Login successful:', result);
      toast.success('Login successful!');
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={css.title}>Log In</h2>

        <input
          className={css.input}
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
        />

        <input
          className={css.input}
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />

        <input className={css.submit} type="submit" value="Log In" />
        <p>
          don't have account?{' '}
          <Link className={css.link} to="/register">
            Sign up
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LogInForm;
