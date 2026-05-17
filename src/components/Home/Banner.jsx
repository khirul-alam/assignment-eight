import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 min-h-[500px] flex items-center overflow-hidden">
           
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-400 opacity-20 rounded-full"></div>

            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10">
               
                <div className="w-full lg:w-1/2 text-center lg:text-left text-white space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Find Your 
                        <br></br>
                        <span className="text-yellow-400">Next Read</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-lg mx-auto lg:mx-0">
                        A seamless and modern web application to digitize your library experience. 
                        Borrow, track, and explore thousands of books with ease.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link href="/all-books" className="btn btn-warning btn-lg px-8 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                            Browse Books
                        </Link>
                       
                    </div>
                    
                    <div className="flex justify-center lg:justify-start gap-8 pt-6">
                        <div>
                            <p className="text-3xl font-bold">10k+</p>
                            <p className="text-sm text-blue-200">Books</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">5k+</p>
                            <p className="text-sm text-blue-200">Users</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">50+</p>
                            <p className="text-sm text-blue-200">Authors</p>
                        </div>
                    </div>
                </div>

               
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-yellow-400 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                            alt="Library Banner" 
                            className="relative rounded-2xl shadow-2xl w-[90%] mx-auto object-cover h-[350px] border-4 border-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;