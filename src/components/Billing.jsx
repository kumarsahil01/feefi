import { apple, bill, google } from "../assets";
import React, {useState} from "react";

import styles, { layout } from "../style";

import EmiCalculator from './Form'
const Billing = () => (
  
  <>
 <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
      <EmiCalculator/>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      An EMI Calculator is a utility tool, which helps you to calculate the amount you repay each month towards your loan. You can use the EMI calculator and calculate the EMI amount on a car loan, home loan, bike loan, or a personal loan. You get an idea of the monthly repayments you make towards these loans.
      </p>
    
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
  </>
);

export default Billing;
