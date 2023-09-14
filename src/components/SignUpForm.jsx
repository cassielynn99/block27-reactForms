import { useState } from "react";

const signupAPI = `https://fsa-jwt-practice.herokuapp.com/signup`;

function SignUpForm({setToken}) {
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
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2> 
      {error && <p>{error}</p>}
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
