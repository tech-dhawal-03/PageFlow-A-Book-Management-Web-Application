"use client"
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import { ZodType } from 'zod'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { FIELD_NAMES, FIELD_TYPES } from '@/app/constants'
import ImageUpload from '@/components/ImageUpload'


interface PROPS<T extends FieldValues> {
    schema: ZodType<T>,
    defaultValues: T,
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>,
    type: "SIGN_IN" | "SIGN_UP"

}

//Inspite of creating seoarate form for both signup and signin, we will make one


const AuthForm = <T extends FieldValues>({
    type,
    schema,
    defaultValues,
    onSubmit
}: PROPS<T>) => {

    const isSignIn = type === "SIGN_IN"

    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(data)
    }





    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-white font-semibold text-2xl'>
                {isSignIn ? 'Welcome Back' : 'Create Account'}
            </h1>

            <p className='text-light-100'>
                {isSignIn ? 'Access the vast collection of resources to enhance yourself.' : 'Complete all fields to enjoy benefits of enhancing yourself. '}

            </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">

                    {Object.keys(defaultValues).map((field)=>(
                    <FormField
                      key={field}
                      control={form.control}
                      name={field as Path<T>}
                      render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES ]}
                            </FormLabel>
                            <FormControl>
                                {field.name === 'universityCard' ?
                                <ImageUpload />
                                : 
                                <Input required placeholder={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES ]

                                } {...field} className='form-input' />
                      }
                            </FormControl>
                            <FormDescription>
                                This is your {field.name}.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                        />
                    ))}


                

                    <Button type="submit" className='bg-yellow-300 text-black w-full'>
                    {isSignIn ? "Sign In": "Sign Up" }   
                    </Button>
                </form>
            </Form>


            <p className='text-center text-base font-medium'>
                {isSignIn ? 'New to PageFlow ? ' :  'Already have an account ? '}

                <Link href = {isSignIn ? "/sign-up" : "/sign-in" } className='font-bold text-yellow-300' >
                {isSignIn ? "Sign Up": "Sign In"}
                </Link>

            </p>
        </div>
    )
}

export default AuthForm