import { useState } from 'react';

export default function Withdraw() {
    const [input, setInput] = useState(" ");
    const [amount, setAmount] = useState(undefined);
    const userBalance = 3000;
  
    const handleInput = event => {
        setInput(event.target.value);
    };
  
    const logValue = () => {
      const printInScreen = input;
      setAmount(printInScreen)
    };
  
    return (
      <div>
        <input onChange={handleInput}/>
        <button onClick={logValue}>Withdraw</button>
        <div>{ amount === undefined || 0 ? <p>Choose an amount</p> 
        : amount % 20 === 0 && userBalance >= amount  ? <p>Successful withdrawal for €{amount}.00</p> 
        : userBalance < amount ? <p> Insufficient funds</p>
        : <p>Only bills of €20.00 allowed!</p> }</div>
        <br></br>
        <img src='../cc.png' alt="credit card logos" className="cc"/>
      </div>
    );
  }
  
 
