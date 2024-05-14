import { useState,useEffect } from "react";
import "./App.css";
const useStorage=(key,initialValue='')=>{
  const storedValue=localStorage.getItem(key)||initialValue;
  const [value,setValue]=useState(storedValue);
  useEffect(()=>{
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);
    },[value,key]);
    return [value,setValue];
};

function App(){
  const [text,setText]=useStorage('myText');

  return(
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
  );
}
export default App;