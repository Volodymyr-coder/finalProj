import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  const location = useLocation();

  const pathname = location.pathname;

  const isCompanyFormPage = pathname.includes('formCompany');
  const isSeekerFormPage = pathname.includes('formSeeker');

  const getTitle = () => {
    if (isCompanyFormPage) return 'Company';
    if (isSeekerFormPage) return 'Seeker';
    return 'Welcom';
  };

  return (
    <div className={css.pageContent}>
      <div className={css.navContainer}>
        <h1>{getTitle()}</h1>
        <nav>
          <Link className={css.link} to="/">
            Welcom
          </Link>

          <Link className={css.link} to="register">
            Sign Up
          </Link>
          <Link className={css.link} to="login">
            Log in
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
