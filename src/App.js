import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

function App() {
  const [userInput, setUserInput] = useState();

  const calculateHandler = (data) => {
    setUserInput(data);
  };

  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput["currentSaving"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCaculateInvesment={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && <p style={{textAlign: "center"}}>No investment calculated yet.</p>}
      {userInput && <Result yearlyData={yearlyData} initialInvestment = {userInput["currentSaving"]}/>}
    </div>
  );
}

export default App;
