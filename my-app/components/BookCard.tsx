import React from "react";
import BookCoverSvg from "@/components/BookCoverSvg";
import BookCover from "@/components/BookCover";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  imageSrc: string;
  coverColor: string
}

const BookCard = ({ title, author, category, imageSrc, coverColor }: BookCardProps) => (

    <div className="flex flex-col items-start gap-4 w-full p-10">
      <div className="relative w-60 h-[300px]">
        <BookCover
          variant="wide"
          className=""
          coverColor={"#1c1f40"}
          coverImage={imageSrc}
          
        />
        <div className="absolute w-full h-full bg-blue-500/20 blur-3xl -z-10 transform translate-x-8 translate-y-8" />
      </div>
  
      <div>
        <h3 className="font-semibold text-center text-lg">{title} - By {author}</h3>
        <p className="text-gray-300 text-sm">{category}</p>
      </div>
    </div>
  );


  export default BookCard
  
