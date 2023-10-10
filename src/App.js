import './App.css';
import {data} from "./data.js";
import {useState} from "react";

function App() {
  console.log(data);
  const [search ,setSearch] = useState("");

  function handleChange(e){
    setSearch(e.target.value);
  }
  console.log(search);
  return (
    <div className="main">
      <div className="inner">
        <h1>Search Filter</h1>
        <form action="">
          <input type="textArea"  onChange={handleChange} />
        </form>
        <table>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {data.filter( (item) =>{
            return search.toLowerCase() === '' ?
            item : item.first_name.toLowerCase().includes(search.toLowerCase());
          }).map( (item) =>(
            <tr key ={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            
          </tr>
          ) )}
          
        </table>
      </div>
    </div>
  );
}

export default App;
