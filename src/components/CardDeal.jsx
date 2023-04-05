import { card } from "../assets";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import Button from "./Button";
import EmiCalculator from "./Form";
import MyForm from "./Form1";

const CardDeal = () => (
  <section id="loan" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a Loan <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      FeeFi's user-friendly and simple loan application process requires minimal documentation. Accessible from anywhere, with AI-driven credit assessment for quick approval and flexible repayment options to suit your needs
      </p>

      <a href="/form">
        <Button styles={`mt-10`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
      <MyForm />
    </div>
  </section>
);

export default CardDeal;
