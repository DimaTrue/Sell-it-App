import React from 'react';
import style from './Header.module.scss';
import logo from '../../../img/logo.png';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => (
  <div className={style.header}>
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Link to='/login'><img src={logo} alt="logo" /></Link>
        </div>
        <Search />
        <UserMenu />
      </div>
    </div>
  </div>
);

export default Header;