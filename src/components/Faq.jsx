import React from 'react'
import { Navbar,Footer } from '.'
import {faq} from '../constants/index'

const Faq = () => {
  return (
    <div>
      <Navbar/>
      <div className=' m-20 p-20'>
        {faq.map((fq,i)=>{
            return(
            <div key={i} className='bg-slate-400 p-3 m-1 rounded-xl  '>
                <p className='text-white underline'> Qus: {fq.qus}</p>
                <br />
                <h1><b>Ans:</b> {fq.ans}</h1>
            </div>
            )
        })}

      </div>
      <Footer/>
    </div>
  )
}

export default Faq
