import React from 'react'
import BookCoverSvg from '@/components/BookCoverSvg'
import Image from 'next/image'





interface PROPS
{
    variant : "wide" | "small"
    className? : string,
    coverColor : string,
    coverImage : string
}

const BookCover = ({variant,className,coverColor,coverImage}:PROPS) => {
  return (
    <div className='hover:scale-105'>
      <BookCoverSvg coverColor={coverColor} />

      <div className='absolute z-10 w-80 h-[450px] hover:scale-105'>
        <Image 
         src = {coverImage}
         width={280}
         height = {450}
         alt = "book-fp"
        className='object-fill ml-10 rounded-sm shadow-amber-50'
         />

      </div>



    </div>

  )
}

export default BookCover