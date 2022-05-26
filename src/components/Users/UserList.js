import styles from './UserList.module.css';

const UserList = (props) => {
  const users = props.users;
  return (
    <div className={styles.users}>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => {
            return (
              <li
                key={Math.random()}
              >{`${user.name} (${user.age}) years old`}</li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserList;
