import React from "react";
import { Star } from "lucide-react";

interface PROPS {
  book_id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
}

const BookOverview = ({
  title,
  author,
  genre,
  total_copies,
  available_copies,
  description,
  color,
  cover,
  rating,
}: PROPS) => {
  return (
    <section className="text-5xl font-semibold text-white md:text-7xl">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
      </div>

      <div className="mt-7 flex flex-row flex-wrap gap-6 text-xl text-light-100">
        <p className="font-light">
          By-{" "}
          <span className="text-light-200 text-yellow-200 font-semibold">
            {author}
          </span>
        </p>

        <p className="font-light">
          Category :{" "}
          <span className="font-semibold text-light-200 text-yellow-200">
            {genre}
          </span>
        </p>

        <p>
          <Star className="inline" />

          <span className="text-yellow-200 text-light inline p-2 ">{rating}/5</span>
        </p>
      </div>  

      <div className="text-xl mt-2 font-light">

      

        <p className="flex flex-row gap-4">
            Total Books : <span className="text-yellow-200 font-semibold">{total_copies} </span>
            Available Books : <span className="text-yellow-200 font-semibold">{available_copies} </span>
        </p>
        
        </div>

        <div>
            <p className="text-sm font-light mt-2">
                {description}
            </p>
        </div>
    
    </section>
  );
};

export default BookOverview;
