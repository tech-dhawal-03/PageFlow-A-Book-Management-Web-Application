"use client"
import AuthForm from '@/components/AuthForm'
import { signupSchema } from '@/lib/validations'
import React from 'react'

const SignUp = () =>(
  <AuthForm
    type = "SIGN_UP"
    schema = {signupSchema}
    defaultValues = {
      {
        email : '',
        password : '',
        fullName : '',
        universityId : '',
        universityCard : ''

      }
    }
    onSubmit = {()=>{
       
    }}
    />  

)

export default SignUp