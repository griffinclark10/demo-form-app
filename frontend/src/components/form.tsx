'use client';
import React, { useState } from 'react';
import Button from './button';
import { PaperPlaneIcon } from '@radix-ui/react-icons'; 

export default function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here, like sending data to a server
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-8 shadow-md rounded">
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john@example.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleTextAreaChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your message" rows={4} required></textarea>
            </div>
            <Button type="submit" className="flex flex-row text-white p-4 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium border-black rounded-lg text-sm w-full px-5 py-2.5 text-center">
                Submit
                <PaperPlaneIcon className='h-4 w-4 ml-2' />
            </Button>
        </form>
    );
}


