import React from "react";
import './index.css';

function App(props){
  return <p>hello {props.nameobj.name} ! email is {props.nameobj.email}</p>;
  
}
function App2(){
  const obj2= {name:"arya",email:"sdsad@saasd"};
  return (
  
  <>
  <p className="myClass1">hello</p>;
<App nameobj={obj2} />

  </>

  )
  
}

class App1 extends React.Component{
 
  render(){



    return(
    
    <div style={
      {
        color:'blue'
      }
    }>
    
    <h2>hello unikaksha</h2>
    <p>My name is swati yadav</p>
    </div>
    );
  }
}

export default App;
export {App1,App2};