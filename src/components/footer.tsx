import React from 'react';
import {FaRegCopyright} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className='footerWrap'>
                <div>
                    <span><FaRegCopyright />&nbsp;2023 Task App.&nbsp;</span>
                    <span>All rights reserved.&nbsp;</span>
                    <span>Developed by Higor.</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;