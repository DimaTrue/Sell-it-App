import React from 'react';
import style from './Login.module.scss';
import bg from '../../../img/bg.jpg';
import logo from '../../../img/lightLogo.png';
import FormSignIn from '../FormSignIn/FormSignIn';
import FormRegistration from '../FormRegistration/FormRegistration';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    activeComponent: 1,
  }

  renderSignIn = () => this.setState({ activeComponent: 1 });

  renderRegistration = () => this.setState({ activeComponent: 2 });

  render() {
    const { login } = this.props;
    return <div className={style.main}>
      <div className={style.bg}>
        <img className={style.picture} src={bg} alt="bg" />
      </div>
      <div className={style.loginPage}>
        <div className={style.logoBlock}>
          <Link to="/"><img src={logo} alt="sell it" /></Link>
        </div>
        <div className={style.btn}>
          <button className={style.button} onClick={this.renderSignIn}>Sign In</button>
          <button className={style.button} onClick={this.renderRegistration}>Sign Up</button>
        </div>
        {this.state.activeComponent === 1 && <FormSignIn login={login}/>}
        {this.state.activeComponent === 2 && <FormRegistration />}
        <div className={style.copy}>Frontend labs 2017</div>
      </div>
    </div>
  }
}

export default Login;