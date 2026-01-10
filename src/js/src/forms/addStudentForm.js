import React, { Component } from 'react';
import { Formik } from 'formik';
import { Input, Button } from 'antd';

const { Password } = Input;

class AddStudentForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validate={values => {
          const errors = {};

          // First Name
          if (!values.firstName) {
            errors.firstName = 'First Name Required';
          } else if (values.firstName.length > 15) {
            errors.firstName = 'Length must be less than 15';
          }

          // Last Name
          if (!values.lastName) {
            errors.lastName = 'Last NameRequired';
          } else if (values.lastName.length > 15) {
            errors.lastName = 'Length must be less than 15';
          }

          // Gender
          if (!values.gender) {
            errors.gender = 'Gender Required';
          } else if (values.gender !== 'MALE' && values.gender !== 'FEMALE') {
            errors.gender = 'Invalid Gender';
          }

          // Email
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          // Password
          if (!values.password) {
            errors.password = 'Required';
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(values.password)
          ) {
            errors.password =
              '8–15 chars, uppercase, lowercase, number & special char required';
          }
            // Confirm Password
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Passwords doesr not match';
            }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>

            <Input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

            <Input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
            
                        <select
                            id="gender"
                            name="gender"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.gender}
                        >
                            <option value="">Select a gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </select>
                        {touched.gender && errors.gender ? (
                            <div>{errors.gender}</div>
                        ) : null}
            <Input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Password
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && <div>{errors.password}</div>}
            <Password
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
                {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>}
            <Button
              type="primary"
              htmlType="submit"
              disabled={isSubmitting}
              style={{ marginTop: 16 }}
            >
              Submit
            </Button>

          </form>
        )}
      </Formik>
    );
  }
}

export default AddStudentForm;
export { AddStudentForm };
