import React from 'react';
import styles from './footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return <div className={cx('wrapper')}>Footer Page</div>;
};

export default Footer;
