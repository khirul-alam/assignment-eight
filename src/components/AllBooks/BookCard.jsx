import React from "react";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="group card bg-base-100 shadow-md border border-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="px-4 pt-4 relative overflow-hidden">
        <img
          src={book.image_url}
          alt={book.title}
          className="rounded-xl h-72 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-6 right-6">
          <span className="badge badge-primary shadow-md font-semibold">{book.category}</span>
        </div>
      </figure>
      
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
          {book.title}
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          By <span className="font-semibold">{book.author}</span>
        </p>
        
        <div className="card-actions flex-nowrap gap-2 mt-2">
          <Link
            href={`/book/${book.id}`}
            className="btn btn-primary btn-md flex-1 rounded-xl font-bold"
          >
            Details
          </Link>
          <button className="btn btn-outline btn-primary btn-md rounded-xl">
             Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;