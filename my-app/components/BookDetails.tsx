import React from 'react';
import { Star } from 'lucide-react';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';
import BookCover from '@/components/BookCover';
import BookCoverSvg from '@/components/BookCoverSvg';


interface BookProps {
  book_id: Number,
  title: string,
  author: string,
  genre: string,
  rating: number,
  total_copies: number,
  available_copies: number,
  description: string,
  color: string,
  cover: string

}

interface RatingStarsProps {
  rating: number,
  outOf?: number;
}

function RatingStars({ rating, outOf = 5 }: RatingStarsProps) {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    if (rating >= i) {
      // Full star
      stars.push(
        <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
      );
    } else if (rating >= i - 0.5) {
      // Half star (left yellow, right gray)
      stars.push(
        <div key={i} className="relative w-5 h-5">
          <Star
            className="absolute text-yellow-400 fill-yellow-400"
            style={{ clipPath: "inset(0 50% 0 0)" }}
            size={20}
          />
          <Star
            className="absolute text-gray-400 fill-gray-400"
            style={{ clipPath: "inset(0 0 0 50%)" }}
            size={20}
          />
        </div>
      );
    } else {
      // Empty star
      stars.push(
        <Star key={i} className="text-gray-400 fill-gray-400" size={20} />
      );
    }
  }

  return <div className="flex gap-0.5">{stars}</div>;
}



const BookDetails = ({ book_id, title, author, genre, rating, total_copies, available_copies, description, color, cover }: BookProps) => {
  return (
    <div className="min-h-screen bg-[#0B0F1E] text-white mx-10 ">


      <main className="container-custom px-4 py-12">
        {/* Book Details Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-lg">By <span className="font-semibold text-amber-400">{author}</span></p>
              <span className="text-gray-400">•</span>
              <p className="text-lg">Category: <span className="text-amber-400">{genre}</span></p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <RatingStars rating={rating} />
              <span className="font-semibold">{rating}/5</span>
            </div>

            <div className="flex gap-8 mb-8 text-gray-300">
              <div>
                <p className="text-sm text-gray-400">Total books:</p>
                <p className="font-semibold text-lg">{total_copies}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Available books:</p>
                <p className="font-semibold text-lg">{available_copies}</p>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <Button className="bg-amber-100 hover:bg-amber-200 text-black font-medium py-3 px-6">
              <span className="mr-2"><Book /></span> BORROW NOW
            </Button>
            <Button className='book-btn'>
              Hello World


            </Button>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-[450px] md:rotate-12 md:mx-20">
              <BookCover
                variant="wide"
                className="z-10 rotate-12"
                coverColor={color}
                coverImage={cover}
              />
              <div className="absolute w-full h-full bg-blue-500/20 blur-3xl -z-10 transform translate-x-8 translate-y-8"></div>
            </div>
          </div>
        </div>

        {/* Popular Books Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10">Popular Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 ">

            <BookCard
              title="Origin"
              author="Dan Brown"
              category="Thriller / Mystery"
              imageSrc="/lovable-uploads/bffd9f12-de3c-4a9c-90d6-308f9e3cccb2.png"
              coverColor={color}
            />

            <BookCard
              title="Origin"
              author="Dan Brown"
              category="Thriller / Mystery"
              imageSrc="/lovable-uploads/bffd9f12-de3c-4a9c-90d6-308f9e3cccb2.png"
              coverColor={color}
            />

            <BookCard
              title="Origin"
              author="Dan Brown"
              category="Thriller / Mystery"
              imageSrc="/lovable-uploads/bffd9f12-de3c-4a9c-90d6-308f9e3cccb2.png"
              coverColor={color}
            />

            {/* <BookCard 
              title="The Fury" 
              author="Alex Michaelides" 
              category="Psychological Thriller" 
              imageSrc="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=200&h=300"
            />
            <BookCard 
              title="The Maidens" 
              author="Alex Michaelides" 
              category="Psychological Thriller" 
              imageSrc="https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=200&h=300"
            />
            <BookCard 
              title="Gerald's Game" 
              author="Stephen King" 
              category="Horror Game" 
              imageSrc="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?auto=format&fit=crop&q=80&w=200&h=300"
            />
            <BookCard 
              title="Don't Turn Around" 
              author="Jessica Barry" 
              category="Thriller / Suspense" 
              imageSrc="https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=200&h=300"
            />
            <BookCard 
              title="Don't Turn Around" 
              author="Jessica Barry" 
              category="Thriller / Suspense" 
              imageSrc="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=200&h=300" */}
            {/* /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetails;
