"use client";
import React from 'react';

const Stats = () => {
  const statsData = [
    { id: 1, label: "Total Books", value: "15,000+", icon: "📚" },
    { id: 2, label: "Active Members", value: "2,500+", icon: "👥" },
    { id: 3, label: "Daily Visitors", value: "120+", icon: "📖" },
    { id: 4, label: "Digital Resources", value: "500+", icon: "💻" },
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;