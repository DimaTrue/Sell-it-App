import React from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';

import { Store } from '../../../store';
import { logIn } from '../../../actions/user';

import style from './FormSignIn.module.scss';


const FormSignIn = () => {

  const { state: { user }, dispatch } = React.useContext(Store);
  
  if (user.isLogin) {
    return <Redirect to ='/'/>
  }
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          logIn(values, dispatch);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <form className={style.form} onSubmit={handleSubmit}>
              <input
                className={style.formInput}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                className={style.formInput}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button className={style.formButton} type="submit" disabled={isSubmitting}>
                Submit
          </button>
            </form>
          )}
      </Formik>
    </div>
  );
}
export default FormSignIn;
