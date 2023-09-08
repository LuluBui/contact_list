import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [users, setUsers] = useState([]);
const [selected, setSelected] = useState(null);
const selectedUser = users.find((ser)=> ser.id === selected);
useEffect(()=> {
  const fetchData = async()=>{
    const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
    const jdata = await response.json();
    setUsers(jdata);
  }
  fetchData();
} ,[]);
console.log(window.location.hash.slice(1));
// useEffect(()=> {
//   window.addEventListener('hashchange', ()=> {
//     setSelected(window.location.hash.slice(1)*1);
//   });
// }, []);
  return (
    <>
      { 
        users.map((ser) => {
          return <p onClick={()=>{
            setSelected(ser.id === selected ? '': ser.id)
          }}key={ser.id}>{ser.name}</p>
          //}}key={ser.id}><a href={ser.id}>{ser.name}</a></p>
          
          
          // return <p key={ser.id} onClick={()=>{
          //   setFeatPupId(ser.id)
          // }>{ser.name}</p>;/*<p onClick={()=>{
          //   setFeatPupId(ser.id)
          // }}`#${ser.id === selected ? '': ser.id}`*/ 
        })
      }
      {selectedUser && (
        <div className="topborder">
          <h2>{selectedUser.name}</h2>
          <ul>
            <li><h3>Username</h3> {selectedUser.username}</li>
            <li><h3>Email</h3> {selectedUser.email}</li>
            <li><h3>Address</h3> <p>{selectedUser.address.street}, {selectedUser.address.suite}</p>
            <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p></li>
            <li><h3>Phone Number</h3><p>{selectedUser.phone}</p></li>
            <li><h3>Website</h3><p>{selectedUser.website}</p></li>
            <li><h3>Company</h3> <p>{selectedUser.company.name}</p>
            <p>&quot;{selectedUser.company.catchPhrase}&quot;</p></li>
          </ul>
        </div>
      )}
    </>
  )
}
export default App
