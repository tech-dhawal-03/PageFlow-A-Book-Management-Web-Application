import Image from 'next/image'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='auth-container bg-[#0B0F1E] '>
            <section className='auth-form'>
                <div className="auth-box">
                    <div className="flex flex-row">
                        {/* TO-DO:- 1 Add logo here... */}
                        <h1 className='text-4xl font-extrabold text-white'>
                            PageFlow
                        </h1>

                    </div>

                    <div>
                        {children}
                    </div>
     
                </div>
            

            </section>

            <section className='auth-illustration '>
                <Image
                 src="/booksAuth.jpg"
                 alt="auth-image"
                 width={1000}
                 height={1000}
                 className='size-full object-cover'
                 />


            </section>


        </main>
    )
}

export default layout