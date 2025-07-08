import { useState } from "react";
import Add from "./components/Add";

 const Display = () => {
   const [items, setItems] = useState([]);
   const [show, setShow] = useState(false);
   const addItem = (text) => {
     if(text.trim() !== '') {
      setItems([...items, text]);
      setShow(false);
       
     }
   }
   return (
     <div className="App flex flex-col  border-blue-600  w-screen h-full  border-2">
       <Add onshow={ () => setShow(true)} onAdd={addItem} showinput={show} />
 <ul id="list" className="list border-amber-500 m-6">
   {items.map((item, index) => (
     <li key={index}>{item}</li>
   ))}
 </ul>
     </div>
   );
 };
 
 export default Display;