import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import css from './formStyle.module.css';

const RegisterForm = () => {
  const [userType, setUserType] = useState('');

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const messages = Object.values(errors).map((err) => err.message);
    if (messages.length > 0) {
      alert(messages.join('\n'));
    }
  }, [errors]);

  const onSubmit = (data) => {
    const fullData = { ...data, userType };
    console.log('Form Data:', fullData);
    alert('Registration successful!');
    reset();
  };

  return (
    <div>
      <div className={css.userTypeSelector}>
        <button className={css.btn} onClick={() => setUserType('company')}>
          Company
        </button>
        <button className={css.btn} onClick={() => setUserType('seeker')}>
          Seeker
        </button>
      </div>

      {userType && (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            className="input"
            {...register('name', { required: 'Name is required' })}
          />

          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            {...register('email', { required: 'Email is required' })}
          />

          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
          />

          <input type="submit" value="Sign Up" />
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
