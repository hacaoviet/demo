import React from 'react';
import PropTypes from 'prop-types';
import styles from './unique-layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IUniqueLayout {
  children: React.ReactNode;
}

const UniqueLayout = ({ children }: IUniqueLayout) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>{children}</div>
    </div>
  );
};

UniqueLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UniqueLayout;
