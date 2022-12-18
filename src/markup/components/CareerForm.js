import React, { useState } from 'react';

// components
import FileUpload from './FileUpload';

const CareerForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [collegeAttended, setCollegeAttended] = useState('');
    const [year, setYear] = useState('');
    const [date, setDate] = useState('');
    // eslint-disable-next-line
    const [file, setFile] = useState(null);

    return (
        <form>
            <h3 className="heading-sm form-heading f-w-500">Apply for the Position</h3>
            <div className="input-group">
                <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="input-group">
                <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="input-group">
                <input type="text" placeholder="College attended" value={collegeAttended} onChange={(e) => setCollegeAttended(e.target.value)} />
                <input type="text" placeholder="Year of Graduation" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="input-group">
                <input type="text" placeholder="Date of CPA completion" value={date} onChange={(e) => setDate(e.target.date)} />
                <FileUpload onStateChange={(file) => {
                    setFile(file);
                }} />
            </div>
            <div className="input-group">
                <button className="button button-3 txt-upper" type="submit">
                    <div>
                        <i className="far fa-check"></i>
                        <span>apply for the job</span>
                    </div>
                </button>
            </div>
        </form>
    );
};

export default CareerForm;
