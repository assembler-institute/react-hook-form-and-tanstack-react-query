import { useState, useEffect } from "react";

const GetUsers = () => {

  const [ users, setUsers ] = useState([]);

  const fetchUsers = async () => {

    const response = await fetch('https://reqres.in/api/users');
    if (!response.ok) {
      throw new Error('Error while fetching users');
    }
    const data = await response.json();
    return setUsers(data.data);
  }

  useEffect(() => {
    fetchUsers();
  } , []);

  return (
    <>
      <div className="users">
        {users?.map(user => (
          <div key={user.id}>
            <h3>{user.first_name} {user.last_name}</h3>
            <img src={user.avatar} alt={user.first_name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default GetUsers;