import { useState } from "react";
import './index.css';

function App(){

  var d=new Date();
  var changeState= useState();
  var [count,increase]=useState(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);


  setInterval(()=>{
    var d=new Date();
    increase(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  },1000);

  return(
    <>
    <div className="count">
    <h2>{count}</h2>
    </div>
    </>
  );
}


export default App;