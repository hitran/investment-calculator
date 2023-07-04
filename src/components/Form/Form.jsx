import { useState } from "react";
import styles from "./Form.module.css";

const initialUserInput = {
  currentSaving: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

const Form = (props) => {
  const [formData, setFormData] = useState(initialUserInput);

  const inputChangeHandler = (type, val) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [type]: +val,
      };
    });
  };

  const calculateHandler = (e) => {
    e.preventDefault();
    props.onCaculateInvesment(formData)
  }

  const resetHandler = () => {
    setFormData(initialUserInput);
  }
  
  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) =>
              inputChangeHandler("currentSaving", e.target.value)
            }
            value={formData.currentSaving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              inputChangeHandler("yearlyContribution", e.target.value)
            }
            value={formData.yearlyContribution}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) =>
              inputChangeHandler("expectedReturn", e.target.value)
            }
            value={formData.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
            value={formData.duration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
