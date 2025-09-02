import axios from "axios";
import { useState } from "react";

function Register() {
  const [form,setForm] = useState({});

  const handleSubmit = async () => {
    await axios.post("http://localhost:8080/auth/register", form);
    alert("Registered successfully!");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="First Name" onChange={e=>setForm({...form,first_name:e.target.value})}/>
      <input placeholder="Last Name" onChange={e=>setForm({...form,last_name:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <input placeholder="University" onChange={e=>setForm({...form,university_name:e.target.value})}/>
      <input placeholder="Gender" onChange={e=>setForm({...form,gender:e.target.value})}/>
      <input placeholder="Year Joined" onChange={e=>setForm({...form,year_joined:e.target.value})}/>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
export default Register;
