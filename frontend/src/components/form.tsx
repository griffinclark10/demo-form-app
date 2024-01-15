'use client';

import React, { useState } from 'react';

import Button from './button';
import Popup from './popup';

import { PaperPlaneIcon } from '@radix-ui/react-icons'; 
import axios from 'axios';

const inputClassName = "bg-gray-50 border border-secondary text-gray-900 text-sm rounded-lg block w-full p-2.5";
const labelClassName: string = "block mb-2 text-sm font-bold text-gray-800"

export default function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');

    // changes form data based on input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // changes form data based on textarea changes
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // submits form data to backend
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/submit', formData);
            console.log('Form submitted successfully:', response.data);
            setMessage("Form submitted successfully!");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage("Error submitting form :(")
        }
        setShowPopup(true);
    };

    return (
        <>
            {showPopup && <Popup message={message} onClose={() => setShowPopup(false)} />}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-8 shadow-lg rounded bg-accent border-orange-300 border">
                <div className="mb-6">
                    <label htmlFor="name" className={labelClassName}>Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputClassName} placeholder="John Doe" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className={labelClassName}>Email</label>
                    <input type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' name="email" id="email" value={formData.email} onChange={handleChange} className={inputClassName} placeholder="john@example.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className={labelClassName}>Message</label>
                    <textarea name="message" id="message" value={formData.message} onChange={handleTextAreaChange} className={inputClassName} placeholder="Your message" rows={4} required></textarea>
                </div>
                <Button type="submit">
                    Submit
                    <PaperPlaneIcon className='h-4 w-4 ml-2' />
                </Button>
            </form>
        </> 
    );
}


