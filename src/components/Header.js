import React from 'react';
import styles from '../styles/Header.module.css';
import { Outlet, Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className={styles.headNav}>
        <div>
          <Link to="/">
            <i
              className="fa fa-angle-left"
              aria-hidden="true"
            ></i>
          </Link>
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
      </header>
      <Outlet />
    </>
  );
};

export default Header;
