import logo from './logo.svg';
import './App.css';
import './style.css';
 import FunctionComp from './Function.js';
 import CompName from './class.js';
 import Heading from './Heading';
//  import { ButtonClass, Button } from './Button.js';
  import DisplayComponent from './DisplayComponents.js';
//   import { Button, ButtonClass } from './Button.js';

// import DisplayComp from './practice/DisplayComponent';

// import CompName from './practice/Class';


function App() {

  return (

    <div className="App">
    <Heading />
       <DisplayComponent />  
      
         {/* <FunctionComp />

      <CompName />   */}
       {/* <DisplayComponent />   */}

    </div>
  );
}

export default App;
