import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

function EmiCalculator() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    const r = interest / 1200; // Monthly interest rate
    const n = tenure; // Total number of months
    const numerator = principal * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const calculatedEmi = Math.round(numerator / denominator);
    setEmi(calculatedEmi);
  };
  // const data = {
  //   labels: ["EMI"],
  //   datasets: [
  //     {
  //       label: "EMI Amount",
  //       data: [emi],
  //       backgroundColor: "#FFCE56",
  //     },
  //   ],
  // };
  const data = [
    { name: "Group A", value: emi * tenure - principal },
    { name: "Group B", value: principal },
  ];
  const COLORS = ["#0x50CCDC", "#65E1E7", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="  items-center sm:my-16 my-6 sm:px-8 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <p className="text-white text-center font-semibold m-1">"Your Personalized Education Loan Repayment Planner"</p>
      <h2 class="text-gradient font-bold shadow-md shadow-white text-center p-1 m-2 mb-4">
        {" "}
        EMI Calculator
      </h2>
      <form className="">
        <div className="p-2 text-white  font-poppins ">
          <label className="">Loan Amount:</label>
          <input
            className="rounded-[10px] ml-2 text-black p-0.5 pl-1 font-semibold "
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseInt(e.target.value))}
          />
        </div>
        <div className="p-2 text-white  font-poppins ">
          <label>Interest Rate:</label>
          <input
            type="number"
            className="rounded-[10px] ml-4 text-black p-0.5 pl-1 font-semibold "
            value={interest}
            onChange={(e) => setInterest(parseFloat(e.target.value))}
          />
        </div>
        <div className="p-2 text-white  font-poppins ">
          <label>
            Loan Tenure
            <br />
            (in Months ):
          </label>
          <input
            type="number"
            className="rounded-[10px] font-semibold ml-5 -mt-1 text-black p-0.5 pl-1"
            value={tenure}
            onChange={(e) => setTenure(parseInt(e.target.value))}
          />
        </div>
        <div>
          <button
            type="button"
            className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10"
            onClick={calculateEmi}
          >
            Calculate EMI
          </button>
        </div>
      </form>
      <div className="flex">
        <div className="rounded-lg text-gradient bg-white  pl-2 p-2 font-semibold mt-8 ml-0">
          {emi > 0 && (
            <div>
              <h3>EMI: {emi}</h3>
              <h3>Total Interest Payable: {emi * tenure - principal}</h3>
              <h3>Total Paybale Amount:{emi * tenure}</h3>
            </div>
          )}
        </div>

        <div className="-mt-3">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default EmiCalculator;
