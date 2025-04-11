import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  imageSrc: string;
}

const BookCard = ({ title, author, category, imageSrc }: BookCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-72 mb-4 group overflow-hidden rounded-lg">
        <img 
          src={imageSrc} 
          alt={`${title} by ${author}`} 
          className="w-full h-full object-cover rounded-lg transition duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <h3 className="font-semibold text-lg leading-tight">{title} - By {author}</h3>
      <p className="text-gray-300 text-sm">{category}</p>
    </div>
  );
};

export default BookCard;