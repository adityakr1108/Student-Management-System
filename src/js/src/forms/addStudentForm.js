import React from 'react';
import { Formik } from 'formik';
import { Input, Button, Tag } from 'antd';
import { addNewStudent } from '../client';
import {successNotification, warningNotification } from '../Notification';


const tagStyle = {
  backgroundColor: '#f50', color: 'white', marginTop: '2px', marginBottom: '2px', display:
    'block', width: 'fit-content'
};
const h4Style = { marginBottom: '6px', marginTop: '5px', display: 'inline' };

const AddStudentForm = (props) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
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
        errors.lastName = 'Last Name Required';
      } else if (values.lastName.length > 15) {
        errors.lastName = 'Length must be less than 15';
      }

      // Gender
      if (!values.gender) {
        errors.gender = 'Gender Required';
      } else if (!['female', 'male', 'FEMALE', 'MALE', 'Male', 'Female'].includes(values.gender)) {
        errors.gender = "Gender must be 'Male' or 'Female'";
      }

      // Email
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={(student, { setSubmitting, resetForm }) => {
      addNewStudent(student)
        .then(() => {
          successNotification(
            'Student added successfully',
            `Student ${student.firstName} ${student.lastName} has been added.`
          );
          props.onSuccess();
          setSubmitting(false);
          resetForm(); // Reset the form fields to their initial values
        })
        .catch((error) => {
          const message = 'Error while adding student';
          warningNotification(message, error.error || 'An unexpected error occurred. Please try again.');
          setSubmitting(false);
        });
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
      submitForm,
      isValid
    }) => (
      <form onSubmit={handleSubmit}>
        <h4 style={{ marginBottom: '8px' }}>Enter the first name</h4>
        <Input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {errors.firstName && touched.firstName && <Tag style={tagStyle}>{errors.firstName}</Tag>}
        <h4 style={h4Style}>Enter the last name</h4>
        <Input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {errors.lastName && touched.lastName && <Tag style={tagStyle}>{errors.lastName}</Tag>}
        <h4 style={h4Style}>Select the gender from the options below: </h4>
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
        {touched.gender && errors.gender &&
          <Tag style={tagStyle}>{errors.gender}</Tag>
        }
        <Input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && <Tag style={tagStyle}>{errors.email}</Tag>}
        <Button
          onClick={() => submitForm()}
          type="primary"
          disabled={isSubmitting || (touched && !isValid)}
        >
          Submit
        </Button>
      </form>
    )}
  </Formik>
);

export { AddStudentForm };