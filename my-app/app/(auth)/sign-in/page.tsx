"use client"
import AuthForm from '@/components/AuthForm'
import { signinSchema } from '@/lib/validations'
import React from 'react'

const page = () => (
    <AuthForm
     type = "SIGN_IN"
     schema = {signinSchema}
     defaultValues = {
        {
            email : '',
            password : ''
        }
     }
     onSubmit={()=>{}} />
)

export default page