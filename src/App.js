import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  // function saveUser(value) {
  //   setUsersList(value)
  // }
  function saveUser(name, age) {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  }
  return (
    <>
      <AddUser onAddUsers={saveUser} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
