import styles from "./app.module.css";
import data from "./data.json";
import { useState } from "react";

export const App = () => {
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const stepsForward = () => {
    if (steps.length - 1 === activeIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const stepsBack = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const stepStart = (index) => {
    setActiveIndex(index);
  };
  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  const moveToNextStep = () => {
    if (!isLastStep) {
      setActiveIndex(activeIndex + 1);
    }
  };
  const moveBackStep = () => {
    if (!isFirstStep) {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles["steps-list"]}>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`${styles["steps-item"]}${
                  activeIndex === index ? styles.active : ""
                } ${index < activeIndex ? styles.done : ""}`}
              >
                <button
                  className={styles["steps-item-button"]}
                  onClick={() => stepStart(index)}
                >
                  {index + 1}
                </button>
                Шаг {index + 1}
              </li>
            ))}
          </ul>
          <div className={styles["buttons-container"]}>
            <button
              className={styles.button}
              disabled={isFirstStep}
              onClick={stepsBack}
            >
              Назад
            </button>
            <button
              className={styles.button}
              disabled={isLastStep}
              onClick={stepsForward}
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
