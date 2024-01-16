import React from 'react';

import { GitHubLogoIcon, PersonIcon } from '@radix-ui/react-icons';

const Header = () => {
    return (
        <header className="bg-primary px-5 md:px-20 p-5 flex flex-row align-items text-secondary">
            <img src="logo2.svg" alt="Logo" className="mr-2 h-7 w-7" />
            <a href="/">
                <h1 className='font-bold text-lg lg:text-xl'>Demo-Form-App</h1>
            </a>
            <div className="flex-grow" />
            <a className='p-1 mr-2 border border-secondary rounded hover:bg-secondary hover:text-primary' href='https://chatgsc.com' target='_blank'>
                <PersonIcon className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a className='p-1 rounded hover:bg-secondary hover:text-primary' href='https://github.com/griffinclark10/demo-form-app' target='_blank'>
                <GitHubLogoIcon className="h-5 w-5 md:h-6 md:w-6" />
            </a>
        </header>
    );
};

export default Header;
