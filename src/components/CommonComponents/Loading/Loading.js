import React from 'react';
import style from './Loading.module.scss';

const Loading = () => (
  <div className={style.cont}>
  <h1 className={style.heading}> Loading. . . </h1>
  <div className={style.loader}></div>
  </div>
);

export default Loading;