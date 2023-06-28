import React, { useState } from 'react';
import {
  FormWrap,
  FormContent,
  Form,
  FormLabel,
  FormRow,
  HalfWidthInput,
  FormSelect,
  FormTextArea,
  FormButton,
  Text,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from '../ContactForm/FormElement.js';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmissionStatus, setFormSubmissionStatus] = useState('');

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setFormSubmissionStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setFormSubmissionStatus('Form submission failed. Please try again later.');
      });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <>
      <InfoContainer lightBg={true} id="contact">
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <TopLine>Contact Us</TopLine>
                <Heading>Let's talk about your next adventure!</Heading>
                <Subtitle>
                The combination of travel services offered to you is a package within the meaning of the Package Travel and Linked Travel Arrangements Regulations. <br/><br/> Therefore, you will benefit from all EU rights applying to packages. Sneaky Travels will be fully responsible for the proper performance of the package as a whole.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <FormWrap>
                <FormContent>
                  <Form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <HalfWidthInput name="bot-field" onChange={handleChange} />
                      </label>
                    </p>
                    <FormRow>
                      <FormLabel htmlFor="name">
                        Name
                        <HalfWidthInput
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          required
                        />
                      </FormLabel>
                      <FormLabel htmlFor="email">
                        Email
                        <HalfWidthInput
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                      </FormLabel>
                    </FormRow>
                    <FormLabel htmlFor="subject">
                      Subject
                      <FormSelect id="subject" name="subject" value={subject} onChange={handleChange} required>
                        <option value="">--Please choose an option--</option>
                        <option value="New Booking Inquiry">New Booking Inquiry</option>
                        <option value="Existing Booking Inquiry">Existing Booking Inquiry</option>
                        <option value="Other">Other</option>
                      </FormSelect>
                    </FormLabel>
                    <FormLabel htmlFor="message">
                      Message
                      <FormTextArea id="message" name="message" placeholder='Type your message here and include all details.' value={message} onChange={handleChange} required />
                    </FormLabel>
                    <FormButton type="submit">Submit</FormButton>
                    {formSubmissionStatus && <Text>{formSubmissionStatus}</Text>}
                  </Form>
                </FormContent>
              </FormWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactForm;
