/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import "./Questions.css"

const Questions = () => {
    return (
        <div className='question-container'>
            <div className="question">
                <h3>Q1. What is the difference between props & state ?</h3>
                <p><b>Props</b> allow you to pass data from one component to other components as an argument. It is used to pass data from a parent component to a child component. Props store data in object form <br/> <b>State</b> holds information about the components. It is used to manage data within a component.</p>
            </div>

            <div className="question">
                <h3>Q2. How useState() works ??</h3>
                <p><b>useState()</b> is a React Hook. It allows you to add state to a functional component. useState() returns an array which contain two values, one is the current state & another one is a function to update the state. The useState() hook works by handling and managing state in a applications.</p>
            </div>

            <div className="question">
                <h3>Q3. Besides data loading, which other purpose useEffect() is used for ???</h3>
                <p><b>useEffect()</b> is also used for dependency. Like if the dependency value anyhow change the code inside the useEffect() will run automatically again.</p>
            </div>

            <div>
                <h3>Q4. How does React works ????</h3>
                <p>Instead of manipulating the browser's DOM directly, <b>React</b> creates a virtual DOM in the memory. It does all the necessary manipulation in the virtual DOM of memory, before making the changes in the browser DOM. React only changes what needs to be changed!</p>
            </div>
        </div>
    );
};

export default Questions;