import React from 'react';
import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx('wrapper')}>
      <div className="grid">
        <div className="row">
          <div className="col">
            <p>Sidebar Page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
