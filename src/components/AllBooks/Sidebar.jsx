import React from "react";
import { MdFilterListAlt } from "react-icons/md";

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-full lg:w-1/4">
      <div className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-200 sticky top-28">
        <div className="flex items-center gap-2 mb-6 text-primary">
          <MdFilterListAlt className="text-2xl" />
          <h2 className="text-xl font-bold tracking-wide">Categories</h2>
        </div>
        
        <div className="flex flex-wrap lg:flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-ghost justify-start normal-case text-base hover:bg-primary/10 transition-all ${
                selectedCategory === cat ? "bg-primary text-white hover:bg-primary-focus shadow-md" : "text-gray-600"
              }`}
            >
              {cat}
              {selectedCategory === cat && <span className="ml-auto">●</span>}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;