import styles from "./Button.module.css";

const Button = (props) => {
  function handleBtnClick(event) {
    // event.preventDefault();
    props.onButtonClick();
  }

  return (
    <button
      className={styles.button}
      onClick={handleBtnClick}
      type={props.type}
    >
      {props.btnContent}
    </button>
  );
};

export default Button;
