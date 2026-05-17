"use client";
import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';
import booksData from "../../../public/books.json"; 
import LoadingSpinner from '../UI/LoadingSpinner'; 

const FeaturedBooks = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  const featuredBooks = booksData.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div 
              key={book.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={book.image_url || "https://via.placeholder.com/300x400?text=No+Image"} 
                  alt={book.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {book.author}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                  {book.description || "Explore the fascinating world of this book and enhance your knowledge."}
                </p>

                <Link href={`/book/${book.id}`}>
                  <button className="w-full bg-blue-900 text-white py-2.5 rounded-lg font-semibold hover:bg-yellow-500 hover:text-blue-900 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;