import logo from './logo.svg';
import './App.css';
import Monishka from './Monishka';
import Header from './Header';
import Component from './Component';

function upi(){
  alert("i am clicked");  
}

function App() {
  return (
    <>
    <select name='cc'>
      <option value={1}>Value 1</option>
      <option value={2}>Value 2</option>
      <option value={3}>Value 2</option>
    </select>
    <button className='btn btn-success' onClick={upi}>Click Me</button>
    <Header amount={100} upi="maverickxjames@apl"/>
    </> 
  );
}

export default App;
