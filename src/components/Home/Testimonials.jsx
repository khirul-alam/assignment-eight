"use client";
import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sabbir Rahman",
      role: "Literature Student",
      comment: "Mango Library has the best collection of modern urban legends and horror novels. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?u=sabbir"
    },
    {
      id: 2,
      name: "Tania Akter",
      role: "Web Developer",
      comment: "I love the quiet environment and the coding section. Their frontend framework books helped me a lot in my projects.",
      avatar: "https://i.pravatar.cc/150?u=tania"
    },
    {
      id: 3,
      name: "Rakib Hasan",
      role: "Regular Member",
      comment: "The membership discounts are amazing. Processing is fast and the staff are very helpful.",
      avatar: "https://i.pravatar.cc/150?u=rakib"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 uppercase tracking-tight">
          What Our Readers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-2 border-blue-900 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-xs text-blue-600">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic italic leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;