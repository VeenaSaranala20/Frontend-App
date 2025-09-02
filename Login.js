import axios from "axios";
import { useState } from "react";

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [token,setToken] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:8080/auth/login",{email,password});
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {token && <p>Token stored!</p>}
    </div>
  );
}
export default Login;
