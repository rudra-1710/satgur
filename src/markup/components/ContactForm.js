import React, { useState } from 'react';

const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [accountant, setAccountant] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col-lg-6">
                    <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-lg-6">
                    <input type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" placeholder="Accountant" value={accountant} onChange={(e) => setAccountant(e.target.value)} />
                </div>
                <div className="col-lg-6">
                    <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <textarea type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button className="button button-3 txt-upper" type="submit">
                        <div>
                            <i className="far fa-comment"></i>
                            <span>send message</span>
                        </div>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
