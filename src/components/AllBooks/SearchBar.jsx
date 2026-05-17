import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="form-control w-full max-w-3xl">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search by book title or author..."
            className="input input-bordered w-full pl-14 h-16 shadow-xl focus:border-primary transition-all rounded-2xl text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <CiSearch className="text-3xl text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;