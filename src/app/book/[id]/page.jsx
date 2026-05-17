"use client";

import { useSession } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import booksData from "../../../../public/books.json";

const BookDetailsPage = () => {  
  const params = useParams(); 
  const router = useRouter(); 
  const { data, isPending } = useSession();  
  const user = data?.user; 
  const book = booksData.find(
    (item) => item.id == params.id
  );
  useEffect(() => {
    if (!isPending && !user) {
      router.push("/auth/signin");
    }
  }, [user, isPending, router]);
  
  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }  
  if (!user) {
    return null;
  }  
  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-error">
          Book Not Found
        </h1>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-base-200 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-base-100 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10 p-8">       
        <div>
          <img
            src={book.image_url}
            alt={book.title}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>      
        <div className="flex flex-col justify-center">
          <div className="badge badge-primary mb-4">
            {book.category}
          </div>
          <h1 className="text-4xl font-bold mb-4">
            {book.title}
          </h1>
          <p className="text-lg mb-4">
            Author:
            <span className="font-semibold text-primary ml-2">
              {book.author}
            </span>
          </p>
          <p className="text-base-content/70 leading-7 mb-6">
            {book.description}
          </p>
          <button className="btn btn-primary btn-lg rounded-xl">
            Borrow Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;