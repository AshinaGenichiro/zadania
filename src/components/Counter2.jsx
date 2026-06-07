import { useState } from 'react';
import './Counter.css';

function Counter2() {
  const [count, setCount] = useState(0);
 

  return (
    <div>
      <p className={count > 0 ? 'dodatnia' : count < 0 ? 'ujemna' : ''}>
        {count}
      </p>
      <button type="button" onClick={() => setCount((value) => value - 1)}>-</button>
      <button type="button" onClick={() => setCount((value) => value + 1)}>+</button>
    </div>
  );
}

export default Counter2;