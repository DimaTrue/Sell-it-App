import React from 'react';
import { Link } from "react-router-dom";
import style from './WrongPath.module.scss';

class WrongPath extends React.Component {
  
    state = { 
      test: 0,
    };
 
  render() {
    // Simulate an error
    if (this.state.test) {
      throw new Error('Simulate an error');
    }

    return (
      <div className={style.wrap}>
        <h1>Error Page</h1>
        <section className={style.errorContainer}>
          <span>4</span>
          <span><span className={style.screenReaderText}>0</span></span>
          <span>4</span>
        </section>
        <div className={style.linkContainer}>
        <Link to="/" className={style.moreLink}>Return to main page</Link>
        </div>
       </div>
    );
  }
}

export default WrongPath;