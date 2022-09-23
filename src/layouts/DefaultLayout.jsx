import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'src/static/styles/bootstrap_css.css';
import 'src/static/styles/index.css';
import 'src/static/styles/common.css';
import 'src/static/styles/product.css';
import 'src/static/styles/collection_style.scss.css';
import 'src/static/styles/account.scss';
// import 'src/static/styles/account_bootstrap.scss';
// import 'src/static/styles/account_common.scss';
import 'src/static/styles/checkout.scss';

import MobileNav from 'src/components/MobileNav';
import MobileHeader from 'src/components/MobileHeader';
import MobileSubNav from 'src/components/MobileSubNav';
import BodyOverlay from 'src/components/BodyOverlay';
import BackTop from 'src/components/BackTop';
import FixedContact from 'src/components/FixedContact';
import { newsData } from 'src/data/data';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <MobileHeader />
      <BodyOverlay />
      <div className='col-right'>
        {children}
        <Footer />
      </div>
      <MobileNav />
      <MobileSubNav />
      <BackTop />
      <FixedContact />
    </>
  );
}

export default DefaultLayout;
