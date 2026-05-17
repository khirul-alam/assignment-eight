"use client";
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">      
      <span className="loading loading-spinner loading-lg text-blue-900"></span>     
      
      <p className="mt-4 text-blue-900 font-medium animate-pulse">
        Loading books...
      </p>
    </div>
  );
};

export default LoadingSpinner;