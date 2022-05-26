import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div style={styles.modal}>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorModal;
