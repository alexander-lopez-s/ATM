
import './App.css';
import Withdraw from './Main';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>KBC Bank</h1>
      <br></br>
      <h2>Welcome dear client!</h2>
      <p>Your available balance is: <span>€3000.00</span></p>
      <br></br>
      <Withdraw/>
    </div>
    </div>
  );
}

export default App;
