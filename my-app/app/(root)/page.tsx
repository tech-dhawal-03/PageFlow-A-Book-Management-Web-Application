import React from 'react'
import BookDetails from '@/components/BookDetails'
import { sampleBooks } from '../constants'


function Home() {
  return (
    <div>
     <BookDetails {...sampleBooks[0]} />
      
    </div>
  )
}

export default Home