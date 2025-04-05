import React from 'react'
import BookOverview from '@/components/ui/BookOverview'
import BookList from '@/components/ui/BookList'
import { sampleBooks } from '../constants'

function Home() {
  return (
    <div>
      <BookOverview {...sampleBooks[0]} />
      <BookList/>
      
    </div>
  )
}

export default Home