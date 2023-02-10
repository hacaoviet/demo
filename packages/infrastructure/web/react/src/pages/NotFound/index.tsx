import React from 'react';
import styles from './notfound.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NotFound = () => {
  return <div className={cx('wrapper')}>NOT FOUND</div>;
};

export default NotFound;
