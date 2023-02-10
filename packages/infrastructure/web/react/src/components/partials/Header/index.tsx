import React from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  return <div className={cx('wrapper')}>Header Page</div>;
};

export default Header;
