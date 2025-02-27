import React, { useState, useEffect } from 'react'
import './index.css'
import { Form, Button, Alert } from 'react-bootstrap'
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [alert, setAlert] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset the alert
        setAlert({ show: false, variant: '', message: '' });

        // Simple validation
        if (!email || !message || !name) {
            setAlert({
                show: true,
                variant: 'danger',
                message: 'Please fill in all fields.',
            });
            return;
        }

        // Simulate successful submission
        emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Use environment variables
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            "#form",
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(
            () => {
                setAlert({
                    show: true,
                    variant: 'success',
                    message: 'Message sent successfully!',
                });

                // Clear the form fields
                setEmail('');
                setMessage('');
                setName('');
            },
            (error) => {
                console.error('Failed to send message:', error);
                setAlert({
                    show: true,
                    variant: 'danger',
                    message: 'Failed to send message. Please try again later.',
                });
            }
        );
    };
    useEffect(() => {
        if (alert.show) {
            const timer = setTimeout(() => {
                setAlert({ show: false, variant: '', message: '' });
            }, 2000);

            // Clear timeout if the component unmounts or alert state changes
            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <section className='contact-container' id='contact'>
            <header className='contact-header'>Contact</header>
            <div className='contact-form-container'>
                <h1>If you want to further collaborate, </h1>
                {alert.show && (
                    <Alert className="alert" variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>
                        {alert.message}
                    </Alert>
                )}
                <Form onSubmit={handleSubmit} className="contact-form" id="form">
                    <Form.Group controlId='formBasicMessage'>
                        <Form.Control
                            type='text'
                            placeholder='Name'
                            name='from_name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Control
                            type='email'
                            placeholder='Email'
                            name='from_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='formBasicMessage'>
                        <Form.Control
                            as='textarea'
                            rows={6}
                            value={message}
                            name='message'
                            placeholder='Message'
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <Button className='btn btn-danger' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </section>
    )
}

export default ContactPage
