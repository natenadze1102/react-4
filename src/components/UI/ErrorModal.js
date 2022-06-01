// import Card from './Card';
import styles from './ErrorModal.module.css';
import Button from './Button';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHandleError} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.content}>{props.message}</div>

      <Button onClick={props.onHandleError}>Okay</Button>
    </div>
  );
};

const ErrorModal = (props) => {
  if (props.age.length === 0) {
    console.log(props.user);
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHandleError={props.onHandleError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onHandleError={props.onHandleError}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
