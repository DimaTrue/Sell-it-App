import React from 'react';
import style from './FormRegistration.module.scss'; 
import { Link } from 'react-router-dom';

const FormRegistration = () => (
  <form action="/" className={style.form}>
    <input className={style.formInput} type="text" placeholder="Create your login" autoComplete="on" />
    <input className={style.formInput} type="email" placeholder="Email" autoComplete="on" />
    <input className={style.formInput} type="password" placeholder="Password" autoComplete="on" />
    <input className={style.formInput} type="password" placeholder="Repeat the Password" autoComplete="on" />
    <button className={style.formButton}><Link to='/' className={style.link}>Registration</Link></button>
  </form>
);


export default FormRegistration;
