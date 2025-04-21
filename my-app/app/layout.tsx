import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import { ReactNode } from "react";



//setting up the font
const ibmPlexSans = localFont({
  src : [
      { path : '/fonts/IBMPlexSans-Regular.ttf', weight : '400', style : 'normal'},
      { path : '/fonts/IBMPlexSans-Bold.ttf', weight : '700', style : 'normal'},
      { path : '/fonts/IBMPlexSans-Medium.ttf', weight : '500', style : 'normal'},
      { path : '/fonts/IBMPlexSans-SemiBold.ttf', weight : '600', style : 'normal'}
    
  ]
})

// //we will use this font using classname


const bebasNeue = localFont({
  src : [
    {
      path : "/fonts/BebasNeue-Regular.ttf", weight : '400', style : 'normal'
    }
  ], 
  variable : "--bebas-neue" , 

})

//we will use this font using variable name 
  

export const metadata: Metadata = {
  title: "PageFlow - A Book Management Platform",
  description: "Organize, track, and manage your books with PageFlow — a modern and user-friendly book management web application. ",
};

const RootLayout = ({children}: {children: ReactNode;}) =>{

  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} bg-[#0B0F1E] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;  
