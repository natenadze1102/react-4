import { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
// import UsersList from './UsersList';
import styles from './User.module.css';
import ErrorModal from '../UI/ErrorModal';

// const users = [];

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const user = { name: '', age: '' };

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setUserEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorModalIsDisplayed, setErrorModalIsDisplayed] = useState(false);

  // function handleDisplay(value) {
  //   setErrorModalIsDisplayed(value);
  // }

  function addUserHandler(event) {
    event.preventDefault();
    user.name = enteredUserName;
    user.age = +enteredAge;

    if (enteredAge < 1) {
      setErrorModalIsDisplayed(true);
      setErrorMessage('Please enter a valid  age (>0)');
      return;
    } else if (enteredAge.length === 0 && enteredUserName.length === 0) {
      setErrorModalIsDisplayed(true);
      setErrorMessage('Please enter a valid name and age (non-empty values)');
      return;
    }

    props.onAddUsers(user.name, user.age);

    setEnteredUserName('');
    setUserEnteredAge('');
  }

  function userNameChangeHandler(event) {
    setEnteredUserName(event.target.value);
    if (event.target.value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function ageChangeHandler(event) {
    setUserEnteredAge(event.target.value);

    if (event.target.value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function handledisplayErrorModal(value) {
    setErrorModalIsDisplayed(false);
  }
  return (
    <Wrapper>
      <Card className={styles.input}>
        <form className={`${styles.input}`} onSubmit={addUserHandler}>
          <label className={`${!isValid && styles.invalid}`} htmlFor="name">
            Username
          </label>
          <input
            type="text"
            name="user"
            id="user"
            value={enteredUserName}
            onChange={userNameChangeHandler}
            className={`${!isValid && styles.invalid}`}
            ref={nameInputRef}
          />

          <label className={`${!isValid && styles.invalid}`} htmlFor="age">
            Age (years){' '}
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
            className={`${!isValid && styles.invalid}`}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {errorModalIsDisplayed && (
        <ErrorModal
          name={enteredUserName}
          age={enteredAge}
          title="Input error"
          onHandleError={handledisplayErrorModal}
          message={errorMessage}
        />
      )}
    </Wrapper>
  );
};

export default AddUser;
