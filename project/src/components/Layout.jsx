import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  const location = useLocation();

  const pathname = location.pathname;

  const isCompanyFormPage = pathname.includes('companyForm');
  const isSeekerFormPage = pathname.includes('seekerForm');

  const getTitle = () => {
    if (isCompanyFormPage) return 'formCompany';
    if (isSeekerFormPage) return 'formSeeker';
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
          <Link className={css.link} to="formCompany">
            Company
          </Link>
          <Link className={css.link} to="formSeeker">
            Seeker
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
