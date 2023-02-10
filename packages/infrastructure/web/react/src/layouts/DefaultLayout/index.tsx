import React from 'react';
import PropTypes from 'prop-types';
import styles from './default-layout.module.scss';
import classNames from 'classnames/bind';

// components
import Header from '~/components/partials/Header';
import Footer from '~/components/partials/Footer';

const cx = classNames.bind(styles);

interface IDefaultLayout {
  children: React.ReactElement;
}

const DefaultLayout = ({ children }: IDefaultLayout) => {
  return (
    <div className={cx('wrapper')}>
      <Header />

      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>

      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
