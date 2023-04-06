import React from 'react'
import { Navbar,Footer } from '.'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='text-center text-white'>
      <h1 className='text-3xl font-semibold underline'>About Us</h1>
      <p className='text-lg m-2
      text-left'>At Feefi, our mission is to provide financial support to deserving students so that they can achieve their academic goals without worrying about the financial burden. We aim to create a level playing field for all students by providing access to education loans on easy terms and at affordable rates.</p>

      <p  className='text-lg m-2
      text-left '>Our team is comprised of experienced professionals who are passionate about making a positive impact in the lives of students. We understand that every student's needs are unique, and we work closely with each of our clients to tailor our services to their specific requirements.</p>
      <p  className='text-lg m-2
     text-left  '>Our loan process is designed to be simple, transparent, and hassle-free. We provide complete guidance throughout the loan application process and ensure that our clients are fully aware of all the terms and conditions of the loan. Our goal is to make education loans accessible to all students who need them, regardless of their financial background.</p>
      <p  className='text-lg m-2
     text-left '>
      We believe that education is the foundation of a bright future, and we're committed to helping students achieve their academic dreams. If you're looking for a reliable and trustworthy partner for your education financing needs, look no further than Feefi
      </p>
    </div>
    <Footer/>
    </>
  )
}

export default About
