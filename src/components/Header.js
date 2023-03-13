import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headNav}>
      <div>
        <i
          className="fa fa-angle-left"
          aria-hidden="true"
        ></i>
        2015
      </div>
      <h3>Most Views</h3>
      <div>
        <i
          className="fa fa-microphone"
          aria-hidden="true"
        />
        <i
          className="fa fa-cog"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Header;
