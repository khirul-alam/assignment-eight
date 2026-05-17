"use client";
import React, { useState, useEffect } from "react";
import booksData from "../../../public/books.json";
import SearchBar from "@/components/allbooks/SearchBar";
import Sidebar from "@/components/allbooks/Sidebar";
import BookCard from "@/components/allbooks/BookCard";

const AllBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const categories = ["All", ...new Set(booksData.map((book) => book.category))];

  useEffect(() => {
    const filtered = booksData.filter((book) => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All" || book.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-10 bg-base-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary mb-2 text-blue-900">Explore Our Library</h1>
        <p className="text-gray-500 italic">Find your next favorite book from our collection</p>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="flex flex-col lg:flex-row gap-10">        
        <Sidebar 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />

        <main className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 font-medium">
              Showing <span className="text-primary font-bold">{filteredBooks.length}</span> books
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-inner border-2 border-dashed border-gray-200">
                <h3 className="text-2xl font-bold text-gray-400">No books match your search!</h3>
                <button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All")}}
                  className="btn btn-link text-primary mt-2"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllBooksPage;