import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./User.module.css";

const users = [];

const User = () => {
  const user = { name: "", age: "" };
  const [userName, setUserName] = useState("");
  const [age, setUserAge] = useState("");

  function handleBtnClick(event) {
    user.name = userName;
    user.age = age;

    users.push(user);
    console.log(users);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    // console.log(e.target);
  }

  function handleChange(e) {
    e.target.name === "user"
      ? setUserName(e.target.value)
      : setUserAge(e.target.value);
  }

  return (
    <Card className="card">
      <form className={styles.input} onSubmit={handleSubmitForm}>
        <label>Username</label>
        <input type="text" name="user" id="user" onChange={handleChange} />

        <label>Age (years) </label>
        <input type="text" name="age" id="age" onChange={handleChange} />

        <Button onButtonClick={handleBtnClick} type="submit" />
      </form>
    </Card>
  );
};

export default User;
