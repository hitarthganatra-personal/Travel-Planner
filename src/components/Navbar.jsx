import React from "react";

function Navbar() {
    return (
        <>
            <header className="sticky top-0 text-gray-400 bg-transparent backdrop-blur-md body-font z-10 shadow-md shadow-slate-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src="/logo.svg" className="w-10 h-10 text-white p-2 bg-yellow-100 rounded-full">
                            
                        </img>
                        <span className="ml-3 text-xl">Did we decide the name??</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white uppercase">
                        <a className="mr-5 hover:underline hover:cursor-pointer">Home</a>
                        <a className="mr-5 hover:underline hover:cursor-pointer">About Us</a>
                        <a className="mr-5 hover:underline hover:cursor-pointer">Contact Us</a>
                    </nav>
                    <button className="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-white rounded hover:text-black mt-4 md:mt-0 hover:cursor-pointer uppercase">
                        Register / Login 
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;
