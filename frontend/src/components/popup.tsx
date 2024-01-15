'use client';

import Button from './button';

export default function Popup({ message, onClose }: {
    message: string;
    onClose: () => void;
}) { 
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="py-4">{message}</p>
                <Button onClick={onClose} className="">Close</Button>
            </div>
        </div>
    )
}