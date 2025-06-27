import React, { useState } from "react";
import "./App.css";

function App() {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };
  const goPrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="progress-bar">
        {Array.from({ length: totalSteps }, (_, index) => {
          const step = index + 1;
          const isReached = step <= currentStep;
          return (
            <React.Fragment key={step}>
              <div className={`step ${isReached ? "active" : ""}`}>
                <span className="checkmark">{isReached ? "✓" : "×"}</span>
                {isReached && (
                  <span className="label">{step === 1 ? "Start" : `Step ${step - 1}`}</span>
                )}
              </div>
              {step < totalSteps && (
                <div className={`line ${step < currentStep ? "active" : ""}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={goPrevious} disabled={currentStep === 1}>←</button>
        <button onClick={goNext} disabled={currentStep === totalSteps}>→</button>
      </div>
    </div>
  );
}

export default App;
