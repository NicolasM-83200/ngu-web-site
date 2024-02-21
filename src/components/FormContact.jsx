import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormContact = () => {
  const form = useRef(null);
  const [notification, setNotification] = useState({
    error: false,
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3fhkj5m',
        'template_g5qlupp',
        form.current,
        '7HknnXjEthYvuIT3n'
      )
      .then(
        (result) => {
          setNotification({
            error: false,
            message: 'Message sent successfully!',
          });
          form.current.reset();
          setTimeout(() => {
            setNotification({ error: false, message: '' });
          }, 5000);
        },
        (error) => {
          setNotification({
            error: true,
            message: 'An error occurred, please try again later.',
          });
          setTimeout(() => {
            setNotification({ error: false, message: '' });
          }, 5000);
        }
      );
  };

  return (
    <form className='contact-container__form' onSubmit={sendEmail} ref={form}>
      {notification.message.length > 0 && (
        <div
          className={`contact-container__notif-container ${
            notification.error ? 'error' : ''
          }`}
        >
          <p className='contact-container__notif'>{notification.message}</p>
        </div>
      )}
      <div className='contact-container__form-group'>
        <input
          id='name'
          name='user_name'
          className='contact-container__input'
          type='text'
          placeholder='Your name...'
          required
          autocomplete='off'
        />
        <label className='contact-container__label' htmlFor='name'>
          Your name
        </label>
      </div>
      <div className='contact-container__form-group'>
        <input
          id='email'
          name='user_email'
          className='contact-container__input'
          type='email'
          placeholder='Your email...'
          required
          autocomplete='off'
        />
        <label className='contact-container__label' htmlFor='email'>
          Your email
        </label>
      </div>
      <div className='contact-container__form-group'>
        <input
          id='object'
          name='object'
          className='contact-container__input'
          type='text'
          placeholder='Object of the message...'
          required
          autocomplete='off'
        />
        <label className='contact-container__label' htmlFor='object'>
          Object of the message
        </label>
      </div>
      <div className='contact-container__form-group'>
        <textarea
          id='message'
          name='message'
          className='contact-container__input'
          placeholder='Message'
          rows={5}
          required
          autocomplete='off'
        ></textarea>
        <label className='contact-container__label' htmlFor='message'>
          Message
        </label>
      </div>
      <button className='contact-container__submitBtn' type='submit'>
        send message
      </button>
    </form>
  );
};

export default FormContact;
