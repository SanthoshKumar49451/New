import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [visible, setVisible] = useState(false);


    const closeMenu = () => {
        setVisible(false); // Set the visible state hide the menu
    };

    return (
        <div className='bg-white flex w-full h-5  sm:flex-col gap-2 p-3 justify-between sm:h-screen   sm:w-48'>
            {/* Header section */}
            <div className='p-2'>
                <div className='p-2'>
                    <h3 className='text-sm md:text-xl'>CodeAnt Ai</h3>
                </div>

                {/* Always visible menu items on larger screens */}
                <div className='hidden sm:flex flex-col gap-2'>
                    <Link to={'/'}>
                        <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                            Repositories
                        </p></Link>
                    <Link to={'/ai'}>
                        <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                            Ai code review
                        </p>
                    </Link>

                    <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        Cloud security
                    </p>
                    <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        How to use
                    </p>
                    <Link>  <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        Settings
                    </p>
                    </Link>

                </div>
            </div>

            {/* Always visible items for support and logout */}
            <div className='hidden sm:flex flex-col gap-2'>
                <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                    Support
                </p>
                <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                    Logout
                </p>
            </div>


            <p className='p-2 block sm:hidden' onClick={() => setVisible(true)}>
                &#9776; {/* Hamburger icon */}
            </p>

            {/* for small screens */}
            {visible && (
                <div className='sm:hidden flex flex-col gap-2 absolute top-0 left-0 w-full bg-white p-3 shadow-lg'>
                    {/* Menu items */}
                    <Link to={'/'}> <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        Repositories
                    </p>
                    </Link>
                    <Link to={'/ai'}> <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        Ai code review
                    </p>
                    </Link>
                 
                   
                    <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        Cloud security
                    </p>
                    <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        How to use
                    </p>
                    <p className='bg-white hover:bg-blue-500 hover:text-white hover:cursor-pointer text-center px-3 py-1 rounded'>
                        Settings
                    </p>

                    {/* Close button */}
                    <p className='bg-red-500 text-white text-center px-3 py-1 rounded mt-2' onClick={closeMenu}>
                        Close Menu
                    </p>
                </div>
            )}
        </div>
    );
};

export default Nav;
