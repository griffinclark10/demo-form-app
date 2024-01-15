import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background text-primary font-bold text-sm p-4">
            <p>&copy; {new Date().getFullYear()} Griffin Clark Form Demo. No rights reserved.</p>
        </footer>
    );
};

export default Footer;
