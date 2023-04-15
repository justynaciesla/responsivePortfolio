import React from "react";
import { Formik, ErrorMessage } from "formik";
import {
  StyledFieldWrapper,
  StyledLabel,
  StyledField,
  StyledWrapper,
  StyledMessageField,
  StyledErrorWrapper,
  StyledForm,
  StyledButton,
  StyledImg,
} from "./StyledContactForm.js";
import Send from "./../../../assets/icons/send1.png";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("* This field is required").min(3, "Min 3 char"),
  email: Yup.string()
    .required("* This field is required")
    .email("Invalid email"),
  subject: Yup.string().required("* This field is required"),
  message: Yup.string().required("* This field is required"),
});

const ContactForm = () => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={contactFormValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          emailjs
            .send(
              "service_jxetn4d",
              "template_eoxqc68",
              values,
              "IRRCGXUbqy9tiHNEH"
            )
            .then(() => alert("Your message has been sent."))
            .catch((err) => console.log(err));

          resetForm();
        }}>
        {({ values, handleChange }) => (
          <StyledForm>
            <StyledFieldWrapper>
              <StyledLabel htmlFor='name'>YOUR NAME</StyledLabel>
              <StyledField
                id='name'
                type='text'
                name='name'
                placeholder='Enter your name'
              />
              <StyledErrorWrapper>
                <ErrorMessage name='name' />
              </StyledErrorWrapper>
            </StyledFieldWrapper>

            <StyledFieldWrapper>
              <StyledLabel htmlFor='email'>EMAIL</StyledLabel>
              <StyledField
                id='email'
                type='text'
                name='email'
                placeholder='Enter your email'
              />
              <StyledErrorWrapper>
                <ErrorMessage name='email' />
              </StyledErrorWrapper>
            </StyledFieldWrapper>

            <StyledFieldWrapper>
              <StyledLabel htmlFor='subject'>SUBJECT</StyledLabel>
              <StyledField
                id='subject'
                type='text'
                name='subject'
                placeholder='Enter your subject'
              />
              <StyledErrorWrapper>
                <ErrorMessage name='subject' />
              </StyledErrorWrapper>
            </StyledFieldWrapper>

            <StyledFieldWrapper>
              <StyledLabel htmlFor='message'>MESSAGE</StyledLabel>
              <StyledMessageField
                type='text'
                as='textarea'
                name='message'
                value={values.message}
                onChange={handleChange}
                placeholder='Enter your message'
              />
              <StyledErrorWrapper>
                <ErrorMessage name='message' />
              </StyledErrorWrapper>
            </StyledFieldWrapper>

            <StyledButton type='submit'>
              SEND MESSAGE
              <StyledImg
                src={Send}
                width='1.25rem'
                height='1.25rem'
                margin='0rem 0rem 0rem 0.6rem'
              />
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default ContactForm;
