import React from 'react';
import style from './ErrorBoundary.module.scss';
import errorPic from '../../../img/error.gif';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    if (this.state.error !== null) {
      return (
        <div className={style.errorPage}>
          <h1 className={style.heading}>Oops! Something went wrong!!!</h1>
          <img className={style.pic} src={errorPic} alt="error" />
          <details className={style.details} >
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.stackComponent}
          </details>
          <Link to="/" className={style.link}>Return to main page </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;