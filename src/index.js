import ReactDOM from 'react-dom';
import React from 'react';
//import styled from "styled-components";
import './index.css';
import logo from './logo.png'
/*
const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
*/

function Welcome(props) {
    return <h2>Hello, {props.name}</h2>;
}

function clickMe(){
    alert('ok stop');
    
}
function App() {
    return (
      <div>
         
        <div>
          <img className='logo' src={logo} alt = 'doge' size='100px'/>
          <h1> Bhutan-Taiwan Assiciation </h1>
        </div>
        
        <div>
            <button onClick={clickMe}>
                Don't Press
            </button>
        </div>

        <div>
          <h1 style={{color: "Grey", backgroundColor: "Blue", width: '4.5rem', alignContent:'left'}}> 
          ok 
          </h1>
        </div>
        
      </div>
    );
  }
//const element = <Welcome name='Sara'/>

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App/>);

 