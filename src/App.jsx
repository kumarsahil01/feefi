import styles from "./style";
import {
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  EmiCalculator,
  Billing,
  Login,
  Signup,
  AuthDetails,
  Loanfunction,
  Profile,
  Resources,
  MyForm,
  Portalmain,
  Engineering,
  Interestrate,
  Documentrequire,
  Compareeduloan,
  Faq,
  About
} from "./components";

import { Routes, Route, BrowserRouter } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <>
      {/* <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
      {/* <Business />
        <CardDeal />
        <Testimonials />
        <CTA />
        <Footer />

      </div>
    </div>
  </div> */}
      <div className="bg-primary w-full overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> <Hero />
                <Business /> <Testimonials /> <CTA /> <Footer />
              </>
            }
          />
          <Route
            path="/resources"
            element={
              <>
                <Resources />
              </>
            }
          />
          <Route
            path="/registration"
            element={
              <>
                
                <Login />
                
              </>
            }
          />

          <Route
            path="/loan"
            element={
              <>
                <MyForm />
              </>
            }
          />
         
         <Route path="/faq" element={<Faq/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/job" element={<Portalmain />} />
          <Route path="/engineering" element={<Engineering/>}/>
          <Route path="/interestrate" element={<Interestrate/>}/>
          <Route path="/emicalulator" element={<><Navbar/> <Billing/> <Footer/></>}/>
          <Route  path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
       
        </Routes>
      </div>
    </>
  </BrowserRouter>
);

export default App;
