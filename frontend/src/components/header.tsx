import React from 'react';

import { GitHubLogoIcon } from '@radix-ui/react-icons';

const Header = () => {
    return (
        <header className="bg-primary px-20 p-5 flex flex-row align-items text-secondary">
            <img src="logo2.svg" alt="Logo" className="mr-4 h-7 w-7" />
            <h1 className='font-bold text-xl'>Demo-Form-App</h1>
            <div className="flex-grow" />
            <a className='p-1 rounded hover:bg-secondary hover:text-primary' href='https://github.com/griffinclark10/demo-form-app' target='_blank'>
                <GitHubLogoIcon className="h-6 w-6" />
            </a>
            
        </header>
    );
};

export default Header;
