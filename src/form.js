import { useState } from "react";

const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;


const Forms = () => {
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleValidation = (name, value) => {
    let errorMessage = error;
    switch (name) {
      case "firstName": {
        errorMessage.firstName =
          value.length < 5 ? "This is not valid name" : "";
        break;
      }
      case "age":{
        errorMessage.age = value<18 || value >25 ? "Age should be between 18-25" : "";
        break;
      }
      case "email":{
        errorMessage.email = !reg.test(value) ? "email is invalid" : "";
        break;
      }
      case "password": {
        // errorMessage.password = value.length < 8 ? "Password should be of atleast 8 characters" : "";
        if(value.length < 10){
            errorMessage.password = "Password should be of atleast 8 characters";
        }else if (!value.includes("@")){
            errorMessage.password = "there should atleast one alphanumeric character";
        }else{
            errorMessage.password = "";
        }
        break;
      }
      default: {
        return;
      }
    }
    setError(errorMessage);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    //handle validation
    handleValidation(name, value);
    //updating the state
    switch (name) {
      case "firstName": {
        console.log("firstName switch", event.target.value);
        setFistName(value);
        break;
      }
      case "lastName": {
        console.log("lastName switch", event.target.value);
        setLastName(value);
        break;
      }
      case "age": {
        setAge(value);
        break;
      }
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      default: {
        return;
      }
    }
  };

  console.log("firstName, lastName", firstName, lastName, age);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("events while submitting", event);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name
            <input
              placeholder="Type here.."
              type={"text"}
              value={firstName}
              name="firstName"
              onChange={handleOnChange}
            />
          </label>
          <span style={{ color: "red" }}>{error.firstName}</span>
        </div>
        <div>
          <label>
            last Name
            <input
              placeholder="Type here.."
              type={"text"}
              value={lastName}
              name="lastName"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age
            <input
              placeholder="Type here.."
              type={"number"}
              value={age}
              name="age"
              onChange={handleOnChange}
            />
          </label>
          <span style={{ color: "red" }}>{error.age}</span>
        </div>
        <div>
          <label>
            Email Adress
            <input
              placeholder={"Type here.."}
              type={"email"}
              value={email}
              name="email"
              onChange={handleOnChange}
            />
          </label>
          <span style={{ color: "red" }}>{error.email}</span>
        </div>
        <div>
          <label>
            Password
            <input
              placeholder="Type here.."
              type={"password"}
              value={password}
              name="password"
              onChange={handleOnChange}
            />
          </label>
          <span style={{ color: "red" }}>{error.password}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;

/*
1. Simple form - 1 inputs 
2. Save states- (data handling)
3. Validation 
4. Form submission
*/
