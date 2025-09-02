import axios from "axios";
import { useEffect, useState } from "react";

function Teachers() {
  const [teachers,setTeachers] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8080/teachers", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTeachers(res.data);
    };
    fetchData();
  },[]);

  return (
    <table border="1">
      <thead>
        <tr><th>ID</th><th>University</th><th>Gender</th><th>Year Joined</th></tr>
      </thead>
      <tbody>
        {teachers.map(t=>(
          <tr key={t.id}>
            <td>{t.id}</td><td>{t.university_name}</td><td>{t.gender}</td><td>{t.year_joined}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Teachers;
