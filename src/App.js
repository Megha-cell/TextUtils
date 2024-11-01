
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React from "react";
 import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
//my-3 is bootstrap class for spacing
function App() 
{
  const [mode,setMode] =useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)
    
    },3000)
  }


  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      //document.title="TextUtils - Dark Mode"

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      //document.title="TextUtils - Light Mode"

    }
  }
  return (
    <>

<Router>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
{/* <TextForm showAlert={showAlert} heading="Enter your text to ananlyze below" mode={mode}/> */}
<Alert alert={alert}/> 
{/* <About/> */}
<div className="container">
  <Routes> 
    
          <Route exact path="/about"
            element={<About mode={mode}/>}>
          </Route> 
          
           <Route exact path="/"
          element = {<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}>
          </Route>
  </Routes> 
  
       



</div>
 </Router> 
</>
  );
}


export default App;