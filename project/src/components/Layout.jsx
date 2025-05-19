import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

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
    <div>
      <div>
        <h1>{getTitle()}</h1>
        <nav>
          <Link to="/">Welcom</Link>
          <Link to="formCompany">Company</Link>
          <Link to="formSeeker">Seeker</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
