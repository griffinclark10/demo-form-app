'use client';

import Button from './button';

export default function Popup({ message, onClose }: {
    message: string;
    onClose: () => void;
}) { 
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="pb-4 pt-2">{message}</p>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>
    )
}