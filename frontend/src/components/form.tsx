'use client';

import React, { useState } from 'react';

import Button from './button';
import Popup from './popup';
import Error from './error';

import { useForm } from 'react-hook-form';
import { PaperPlaneIcon } from '@radix-ui/react-icons'; 
import axios from 'axios';

const inputClassName = "bg-gray-50 border border-secondary text-gray-900 text-sm rounded-lg block w-full p-2.5";
const labelClassName: string = "block mb-2 text-sm font-bold text-gray-800"

type FormValues = {
    name: string;
    email: string;
    message: string;
};

export default function UserForm() {

    const form = useForm<FormValues>();
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');

    // submits form data to backend
    const onSubmit = async (data: FormValues) => {
        try {
            const response = await axios.post('http://localhost:5000/api/submit', data);
            console.log('Form submitted successfully:', response.data);
            setMessage('Form submitted successfully!🎉');
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Error submitting form!😰');
        }
        setShowPopup(true);
    };

    return (
        <>
            {showPopup && <Popup message={message} onClose={() => {setShowPopup(false), reset()}} />}
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-lg mx-auto my-10 p-8 shadow-lg rounded bg-accent border-orange-300 border">
                <div className="mb-6">
                    <label htmlFor="name" className={labelClassName}>Name</label>
                    <input type="text" id="name" className={inputClassName} placeholder="John Doe" {...register("name", {
                        required: 'Name is required',
                    })} />
                    {errors.name ? (
                        <Error errorMessage={errors.name?.message} />
                    ) : (
                        null
                    )}
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className={labelClassName}>Email</label>
                    <input type="email" id="email" className={inputClassName} placeholder="john@example.com" {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'Invalid email address'
                        }
                    })} />
                    {errors.email ? (
                        <Error errorMessage={errors.email?.message} />
                    ) : (
                        null
                    )}
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className={labelClassName}>Message</label>
                    <textarea id="message" placeholder="Your message" rows={4} className={inputClassName} {...register("message", {
                        required: 'Message is required',
                    })} >
                    </textarea>
                    {errors.message ? (
                        <Error errorMessage={errors.message?.message} />
                    ) : (
                        null
                    )}
                </div>
                <Button type="submit">
                    Submit
                    <PaperPlaneIcon className='h-4 w-4 ml-2' />
                </Button>
            </form>
        </> 
    );
}


