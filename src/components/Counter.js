import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const toggle = useSelector(state => state.counter.showCounter);

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const incrementbyFiveHandler=()=>{
    dispatch(counterActions.incrementbyfive(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button
          className={classes.button}
          aria-label="Decrement value"
          onClick={decrementHandler}
        >
          -
        </button>
        <span className={classes.value}></span>
        <button
          className={classes.button}
          aria-label="Increment value"
          onClick={incrementHandler}
        >
          +
        </button>
        <button
          className={classes.button}
          aria-label="Increment 5"
          
          onClick={incrementbyFiveHandler}
        >Increment 5
        </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
