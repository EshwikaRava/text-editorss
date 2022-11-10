
import logo from './logo.svg';
import './App.css';
import Texteditor from './components/Texteditor';
import { useState } from 'react';


const config={
  dropdowns:["publish menu", "normal"],
buttons:["bold","italic","underline"]
}
function App() {
  const[Value,setValue]=useState("")
  return (
   
    <div className='row'>
      <div className='col-mod-6' style={{margin:"auto", margintop:"5px"}}>
        <div style={{textAlign:"center"}}>
          <h3>Text Editor</h3>
        </div>
        <Texteditor setValue={setValue} config={config}/>
        <br/>
        <div>
          {Value}
        </div>

      </div>
     
    </div>
  );
}

export default App;
