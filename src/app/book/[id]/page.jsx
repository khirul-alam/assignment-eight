"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import booksData from "../../../../public/books.json";
import Link from "next/link";
import { toast } from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  
  const book = booksData.find((b) => b.id === parseInt(id));
  
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-500">Book Not Found!</h2>
        <Link href="/all-books" className="btn btn-primary mt-4">
          Back to All Books
        </Link>
      </div>
    );
  }

  const handleBorrow = () => {
    if (book.available_quantity > 0) {
      toast.success(`You have successfully borrowed "${book.title}"`);
    } else {
      toast.error("Sorry, this book is currently out of stock!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12 bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-200">        
       
        <div className="lg:w-1/2 bg-base-200 flex justify-center items-center p-8">
          <img
            src={book.image_url}
            alt={book.title}
            className="rounded-2xl shadow-2xl max-h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
       
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="badge badge-primary badge-outline mb-4">{book.category}</div>
          
          <h1 className="text-4xl font-extrabold mb-2 text-base-content leading-tight">
            {book.title}
          </h1>
          
          <p className="text-xl text-primary font-medium mb-6">
            by <span className="italic">{book.author}</span>
          </p>

          <div className="divider"></div>

          <p className="text-gray-500 leading-relaxed mb-8 text-lg">
            {book.description}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-lg font-bold">Availability:</span>
            <div className={`badge p-4 font-bold ${book.available_quantity > 0 ? 'badge-success' : 'badge-error'}`}>
              {book.available_quantity > 0 ? `${book.available_quantity} copies left` : 'Out of Stock'}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleBorrow}
              disabled={book.available_quantity === 0}
              className="btn btn-primary btn-lg flex-1 shadow-lg"
            >
              Borrow This Book
            </button>
            <button 
              onClick={() => router.back()}
              className="btn btn-outline btn-lg flex-1"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
        <h3 className="text-xl font-bold mb-2">Why read this book?</h3>
        <p className="text-gray-600">
          This masterpiece by {book.author} is a must-read for anyone interested in {book.category.toLowerCase()}. 
          Add it to your personal library today!
        </p>
      </div>
    </div>
  );
};

export default BookDetails;