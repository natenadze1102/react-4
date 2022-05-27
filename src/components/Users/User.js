import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import UserList from "./UserList";
import styles from "./User.module.css";
import ErrorModal from "../UI/ErrorModal";

const users = [];

const User = () => {
  const user = { name: "", age: "" };

  const [userName, setUserName] = useState("");
  const [age, setUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // let errorModalIsDisplayed = false;
  const [errorModalIsDisplayed, setErrorModalIsDisplayed] = useState("none");

  function handleDisplay(value) {
    setErrorModalIsDisplayed(value);
  }

  function getErrorMessage(value) {
    errorMessage = value;
  }

  function handleBtnClick() {
    console.log("clicked");
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    user.name = userName;
    user.age = age;

    if (userName.length > 0 && age.length > 0) {
      users.push(user);
      console.log(typeof age);
      setUserName("");
      setUserAge("");

      console.log(errorModalIsDisplayed);
    }
    if (age < 1) {
      setErrorModalIsDisplayed("block");
      setErrorMessage("Please enter a valid  age (>0)");
    } else {
      setErrorModalIsDisplayed("block");
      setErrorMessage("Please enter a valid name and age (non-empty values)");
    }
  }

  function handleChange(e) {
    e.target.name === "user"
      ? setUserName(e.target.value)
      : setUserAge(e.target.value);

    if (e.target.value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  return (
    <Card className="card">
      <form className={`${styles.input}`} onSubmit={handleSubmitForm}>
        <label className={`${!isValid && styles.invalid}`}>Username</label>
        <input
          type="text"
          name="user"
          id="user"
          value={userName}
          onChange={handleChange}
          className={`${!isValid && styles.invalid}`}
        />

        <label className={`${!isValid && styles.invalid}`}>Age (years) </label>
        <input
          type="text"
          name="age"
          id="age"
          value={age}
          onChange={handleChange}
          className={`${!isValid && styles.invalid}`}
        />

        <Button
          onButtonClick={handleBtnClick}
          type="submit"
          btnContent={"Add User"}
        />
      </form>

      <UserList users={users} />

      <ErrorModal
        name={userName}
        age={age}
        sendErrorMessage={getErrorMessage}
        isDisplayed={handleDisplay}
        isDisplayed2={errorModalIsDisplayed}
        errorContent={errorMessage}
      />
    </Card>
  );
};

export default User;
