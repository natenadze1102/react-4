import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  if (props.age.length === 0) {
    // props.sendErrorMessage(
    //   'Please enter valid name and age (non empty values)'
    // );
    // console.log(props.errorMessage);
    console.log(props.user);
  }
  return (
    <div className={styles.modal}>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorModal;
