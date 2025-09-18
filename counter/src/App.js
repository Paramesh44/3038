import  {useState} from "react";
import './App.css';

function App() {
   useEffect(()=>{
    fetch("https://localhost:5000/user")
    .then((res)=>res.josn)
    .then((data)=>setUsers(data))
     .catch((err)=>console.log(err));
   },[]);
   return(
    <div className="App">
      <h1>My API+React Fetch</h1>
      <ul>
        {users.map((u)=>(
          <li key={u.id}>
            {u.name}-{u.role}
          </li> 
        ))}
           </ul>
        </div>
   );
}

export default App;
