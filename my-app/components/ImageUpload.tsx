"use client"
import { Image, ImageKitProvider,  } from '@imagekit/next'
import React from 'react'

const authenticator = async() => {
  try{

  }
  catch(err : any)
  {
    throw new Error(`Authentication request failed : ${err.message}`)
  }
}

const ImageUpload = () => {
  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload