import { useForm } from 'react-hook-form';

import Header from "./ui/Header/Header";


let renderedCount = 0;
export const App = () => {

  // This are callbacks that ruturns some props and inyects 
  // them directly at the inputs of the form
  const { register, handleSubmit, watch, reset, formState:
    { errors, dirtyFields, touchFields, isSubmitted }}
    = useForm({
    dafaultValues: {
      firstName: "",
      hobbies: "",
      favouriteSeries: ""
    }
  });

  console.log("reset", reset );

  // console.log("erros", errors)
  // console.log("dirtyFields", dirtyFields)
  // console.log("touchedFields ", touchedFields )
  // console.log("isSubmitted ", isSubmitted )

  const firstNameWatch = watch("firstName");

  const onSubmit = (data) => {
    console.log(data);
  }

  // displays how many times the component has been rendered
  renderedCount++;

  return (
    <>
      <Header renderedCount={renderedCount}/>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>

        {/* <input {...register('firstName', { required: true, minLength: 2 })} placeholder="First name" /> */}
        <input {...register("firstName", { required: 'Name is required', minLength: {
          value: 4,
          message: 'Minimum length is 4'
        } })} placeholder="Insert here your beautiful name 🫶"/>

        <p>{firstNameWatch}</p>
        { errors.firstName?.message && <p>{errors.firstName.message}</p> }


        <input {...register("hobbies", { required: 'i.e. coding every day 🤩', minLength: {
          value: 6,
          message: 'Minimum lenght is 6'
        } })} placeholder="I.e. Read a book underwater" />

        { <p>{errors.hobbies?.message}</p> }


        <input {...register("favouriteSeries", { required: 'i.e. Game of Thrones' })} placeholder="Breaking Bad" />
        { <p>{errors.favouriteSeries?.message}</p> }


        <button type="submit" onClick={ () => reset({
          firstName: '',
          hobbies: '',
          favouriteSeries: ''
        }) }>Submit</button>

      </form>
    </>
  );
}