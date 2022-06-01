import styles from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
  const users = props.users;
  return (
    <Card className={styles.users}>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>{`${user.name} (${user.age}) years old`}</li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </Card>
  );
};

export default UserList;
