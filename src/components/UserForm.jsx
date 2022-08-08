import { useMutation, useQueryClient } from "@tanstack/react-query";

async function postUser() {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Jose Valenzuela',
      job: 'Magician'
    })
  });

    if(!response.ok) {
      throw new Error('Error while fetching products')
    }
    return response.json();
}

const UserForm = () => {
  
  // useQueryClient will get the query client from the context
  const queryClient = useQueryClient();

  // useMutation will use the postUser function to post the data and then refetch the data
  // without the need to refresh the page or refresh the data
  // onSuccess will be called if the data is posted successfully
  // onSettle will be called if the data is posted successfully or if it fails
  // onError will be called if the data is not posted successfully
  const mutation = useMutation(postUser, {
    onSettled: (data) => {
      console.log(data);
    },
    onSuccess: (response) => {
      console.log(response);
      // queryClient.invalidateQueries('users') // this will invalidate the query

      // setQueryData will set the data (old data + new data) in the cache and will not fetch the data again
      queryClient.setQueryData(['users'], (oldData) => {
        console.log({...oldData.data});
        // returns the old data plus the new data
        return {
          ...oldData,
          data: [ ...oldData.data, {
            id: response.id,
            name: response.name,
            job: response.job
          }]
        }
      })
    },
    onError: (error) => {
      console.log(error);
    }
  })

  // important not to call the mutate directly on the button click
  // it might cause the data to be posted twice, introduce errors, and so on
  const handleSubmit = () => {
    mutation.mutate()
  }

  return (
    <>
      <h2>User Form</h2>
      <button onClick={ handleSubmit } >Create User</button>
    </>
  )

}

export default UserForm;