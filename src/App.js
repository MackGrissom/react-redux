import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import logo from './reduxlogo.png';
function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch({type:'INC'})
  };
  
  
  const decrement = () => {
    dispatch({type:'DEC'})
  };

  const addBy = () => {
    dispatch({type:'ADD',payload: 10})
  };
  const removeBy = () => {
    dispatch({type:'ADD',payload: -10})
  };

  const reset =() => {
  dispatch({type:'RESET'})
};

return (
  <div className='container'>

    <img src={logo} className='logo'/>

  <h1> Welcome To The Counter App</h1>
  <p className="description"> Using Redux (Reducers, Actions and Dispatch) we're able to manipulate the data and return the updated state..witness the power of Redux! </p>
  <h2 className="number"> {counter} </h2>
  <button onClick={increment}  className="button">Increment</button>
  <br/>
  <button onClick={decrement} className="button"> Decrement</button>
  <br/>
  <button onClick={addBy} className="button"> Add 10</button>
  <br/>
  <button onClick={removeBy} className="button"> Remove 10</button>
  <br/>
  <button onClick={reset} className="button"> Reset </button>
  <br/>
  </div>
  );
}

export default App;
