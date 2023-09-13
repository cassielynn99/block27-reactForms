import { useState } from "react";

const signupAPI = `https://fsa-jwt-practice.herokuapp.com/signup`;

// Since you are sending information to our API, make sure to send a POST request passing along the username and password state values
// in the request body.
// Note: This API is expecting to revive an object containing username and password properties as the body of the request.
// Remember to reference documentation and other course materials before you check the solution.

// example: 
// fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
//   { 
//     method: "POST", 
//     headers: { 
//       "Content-Type": "application/json" 
//     }, 
//     body: JSON.stringify({ 
//       username: "some-username", 
//       password: "super-secret-999" 
//     }) 
//   })

// Store the API response in a variable. Remember to then use the method to parse the response into JS to use in your code.
//  Finally, console.log this result.

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${signupAPI}`,
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: {username},
            password: {password}
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2> {error && <p>{error}</p>}
      <label>
        Username:{" "}
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:{" "}
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default SignUpForm;
