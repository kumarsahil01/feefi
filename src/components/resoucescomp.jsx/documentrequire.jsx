import React from "react";

const Documentrequire = () => {
  return (
    <div className="text-white">
      documentrequired
      <h1>DOCUMENT REQUIRED</h1>
      <p>
        <h2>List of documents required for borrower and co-borrower</h2>
        <table>
          <h3>Student</h3>
          <tr>
            <th>KYC Documents</th>
            <th>Academic Documents</th>
          </tr>
          <tr>
            <td>Aadhar Card</td>
            <td>Acedemic Marksheets(X and XII)</td>
          </tr>
          <tr>
            <td>Pan Card</td>
            <td>Admit Letter</td>
          </tr>
          <tr>
            <td>Photo(passport size)</td>
            <td>Fee Structure</td>
          </tr>
          <tr>
            <td>Passport(abroad)</td>
            <td>Exam Score(GRE, GMAT, CAT etc.)</td>
          </tr>
        </table>
        <table>
          <h3>Co-borrower</h3>
          <tr>
            <th>If Salaried</th>
            <th>If Self Employed</th>
          </tr>
          <tr>
            <td>Aadhar & Pan Card</td>
            <td>Aadhar & Pan Card</td>
          </tr>
          <tr>
            <td>Address Proof(Electricity/ Water/ Municipality bill)</td>
            <td>Address Proof(Electricity/Water/ Municipality bill)</td>
          </tr>
          <tr>
            <td>Last 2 Form 16</td>
            <td>Last 2 Year ITR</td>
          </tr>
          <tr>
            <td>Last 3 Month's Salary Slips</td>
            <td>Current Account Bank Statement(Last 8 Months)</td>
          </tr>
          <tr>
            <td>Salary Account Bank Statement(Last 6 Months)</td>
            <td>Saving Account Bank Statement(Last 6 Months)</td>
          </tr>
          <tr>
            <td>Company ID/ Offer Letter</td>
            <td>Proof Of Existence Of Business</td>
          </tr>
        </table>
        <h2>Borrower different cases</h2>
        <p>
          The applicant can avail an education loan for both abroad and domestic
          cases. The borrower may even have a job experience before, which gives
          rise to a few changes. If in case the applicant has had a job
          experience, then the bank also needs his 6 months’ Salary A/C
          statement, ITR of last two years/Form 16, Income proof (Salary slip),
          Company ID/Offer Letter The differences between both of themare listed
          below: DOMESTIC CASES: For cases where education loan is taken to
          study in India, only the above-listed documents are required. But the
          student must have the college admit letter, without it, the loan
          cannot be availed. ABROAD CASES: When a student applies for an
          education loan for studying abroad, the bank asks for a passport.
          Unlike domestic cases, the student can avail an education loan without
          an admit letter from college, just by showing the scorecard (GMAT,
          GRE, etc).
        </p>
        <h2>Co-borrower different cases</h2>
        <p>
          A co-borrower is someone who takes the responsibility of repaying the
          loan, if the borrower fails to do so. Not every person can be a
          co-borrower, the bank has certain criteria regarding who can be the
          applicant’s co-borrower (parents, husband or father in law in case the
          applicant is married). A salaried co-borrower has to provide a
          different set of documents than a self-employed co-borrower. The list
          of documents that should be submitted by a salaried and a
          self-employed co-borrower is provided in the table. A pensioner is
          also treated as a salaried person but you may need to have multiple
          borrowers in that case.
        </p>
        <h2>Collateral</h2>
        <p>
          A collateral is required to diminish the risk involved. Since the
          student hasn't started earning so there is a great uncertainty that
          whether the student will be able to repay the loan, hence collateral
          is needed.A collateral can be anything like FD, property etc. They are
          divided into two parts, liquid and solid. Liquid assets are movable
          like FD, insurance policy etc whereas, the solid ones are immovable
          like property, etc.
        </p>
      </p>
    </div>
  );
};

export default Documentrequire;
