import React from 'react';
import { Formik, Form, Field } from 'formik';
//import { CustomInput } from '..';

const LoginForm = ({ initialValues, handleSubmit, validate }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleSubmit }) => {
        return (
        <Form onSubmit={handleSubmit}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Field
              data-testid="usernameOrEmail"
              type="text"
              name="email"
              placeholder="Username/Email"
              component={() => <input />}
              inputClass="mb-4 mt-2 text-monospace"
            />
            <Field
              data-testid="login-password"
              type="password"
              name="password"
              placeholder="Password"
              component={() => <input />}
              inputClass="mb-4 mt-4 text-monospace"
            />
            <button
              data-testid="login-button"
              className="btn btn-primary btn-lg mt-3 text-monospace"
              type="submit"
              disabled={isSubmitting}
              style={{ textTransform: 'uppercase', minWidth: '12rem' }}
            >
              Submit
            </button>
          </div>
        </Form>
      )}}
    </Formik>
  );
};

export default LoginForm;