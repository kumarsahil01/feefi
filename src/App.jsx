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
  Profile
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
                <Navbar /> <Hero/> 
               <Business/> <Testimonials/> <CTA/>  <Footer />
              </>
            }
          />
          <Route
            path="/resources"
            element={
              <>
                <Navbar /> <Billing/> <Footer />
              </>
            }
          />
          <Route
            path="/registration"
            element={
              <>
                 <Signup/>  
                 <Login/>
                 <AuthDetails/>
              </>
            }
          />

          {/* <Route
          path="/loan"
          element={
            <>
            <Loanfunction/>
            </>
          }
          /> */}

       <Route
        path="/profile"
        
        element={<Profile/>}
       />
        </Routes>
      </div>
    </>
  </BrowserRouter>
);

export default App;
