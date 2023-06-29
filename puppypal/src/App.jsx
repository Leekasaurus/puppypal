import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppyList);
  <p onClick={} key={puppy.id}>{puppy.name}</p>

 
 
  
  function handleClick() {
    //<button onClick={this.handleClick}>Click me!</button>
    onClick={()=>{setFeatPupId(puppy.id)}}
    setFeatPupId
    { featuPupID && <p>{ featPupId }</p> } 
  }


 

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  {featPupId && (
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
  )};
 
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
export default App
