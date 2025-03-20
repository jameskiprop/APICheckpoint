import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  // State to store the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetching data from the API using axios
    axios
      .get("https://jsonplaceholder.typicode.com/users") // API endpoint
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        // Handling the errors if the request fails
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
