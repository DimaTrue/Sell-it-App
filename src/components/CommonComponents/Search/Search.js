import React from 'react';
import style from './Search.module.scss';
import search from '../../../img/search.png';

const Search = () => (
  <div className={style.searchBlock}>
    <input className={style.input} type="text" placeholder="Try find something" />
    <img className={style.img} src={search} alt="search" />
  </div>
);


export default Search;