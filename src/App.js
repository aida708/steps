import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Go at work 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); //update state based on current state
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        ❌
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step
            {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              disabled={step === 1}
              text="Previous"
            >
              <span> 👈</span> Previous
            </Button>

            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              text="Next"
            >
              Next <span>👉</span>
            </Button>

            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}>
              Next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
