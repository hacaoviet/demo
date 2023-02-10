import React from 'react';
import styles from './login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Login = () => {
  return <div className={cx('wrapper')}>Login Page</div>;
};

export default Login;
