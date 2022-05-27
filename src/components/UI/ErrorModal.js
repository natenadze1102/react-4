import styles from "./ErrorModal.module.css";
import { useState } from "react";
import Button from "./Button";

const ErrorModal = (props) => {
  // const [display, setDisplay] = useState("none");
  let display = props.isDisplayed2;

  function handleButtonClick() {
    // setDisplay("none");
    props.isDisplayed("none");
    console.log(props.isDisplayed2);
  }

  if (props.age.length === 0) {
    // props.sendErrorMessage(
    //   'Please enter valid name and age (non empty values)'
    // );
    // console.log(props.errorMessage);
    console.log(props.user);
  }
  return (
    <div className={styles.backdrop} style={{ display: display }}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {/* <h2>{props.message}</h2> */}
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.content}>{props.errorContent}</div>

        <Button btnContent="Okay" onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default ErrorModal;
