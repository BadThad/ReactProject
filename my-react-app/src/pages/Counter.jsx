import {useState} from "react";

import "../Counter.css";

function Counter() {
    const [counter, setCounter] = useState (10); /* Counter is set with initial state of 10 */

    const increaseCount = () => {
        setCounter(counter + 1);
    }

    const decreaseCount = () => {
        setCounter(counter - 1);
    }

    const resetCount = () => {
        setCounter(10);
    }

    return ( 
        <div className = "counter-container">
            <h2>{counter}</h2>
            <div className="counter-btn">
                <button className="decrease-btn" onClick={decreaseCount}>-</button>
                <button className="increase-btn" onClick={increaseCount}>+</button>
            </div>
            <button className="reset-btn" onClick={resetCount}>Reset</button>
        </div>
    )
}

export default Counter