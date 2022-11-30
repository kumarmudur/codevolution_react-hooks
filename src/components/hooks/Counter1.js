import React, { useState } from 'react';

const Counter1 = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1);

    return (
        <div>
            <p>Count: { count }</p>
            <button onClick={incrementCount}>Click</button>
        </div>
    );
};

export default Counter1;