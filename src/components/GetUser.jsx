import { useQuery } from "@tanstack/react-query";

// fetchUser is a function that will fetch the data
const fetchUser = async() => {
  const response = await fetch('https://reqres.in/api/users');

  if(!response.ok) {
    throw new Error('Error while fetching users');
  }
  return response.json()
}

// useQuery will use the fetchUser function to fetch the data
const GetUser = () => {

  const { data, status } = useQuery(['users'], fetchUser, {
    staleTime: 2000, // staleTime will keep the data for 2 seconds after you leave the page/function this data is in and then delete if unused
    cacheTime: 5000 // cacheTime will keep the data for 5 seconds anyhow and then delete if it is not
  });
  // console.log(data);

  // We are using the status to check if the data is loading or not
  if(status === 'loading') {
    return <p>Loading users...</p>
  }

  if(status === 'error') {
    return <p>There is an error fetching the users...</p>
  }

  return data.data.map(user => (
      <div key={ user.id }>
        <h2>{ user.first_name }</h2>
        <img src={ user.avatar } />
        <h2>{ user.email }</h2>
        <h2> { user?.name } </h2>
        <h2> { user?.job } </h2>
      </div>
    ))
}

export default GetUser