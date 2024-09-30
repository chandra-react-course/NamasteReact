import React from "react";
import ReactDOM from "react-dom/client";
import aarvi from "/images/aarvi.jpg";

//const heading = (<h1 id="heading">This is JSX Syntax..Namaste React</h1>);
const HeadingComponent = () => <h1 id="heading">Namaste React form Functional Component</h1>;

const Heading= () =>{return (

<div id="parent" className="divClass">
    <h1 id="heading">This is Parent Div h1 Tag</h1>
<div id="child" className="divClass">
    <h1>This is Nested Div h1 tag. Namaste React</h1>
</div>
<p id="para">
<HeadingComponent/>
What does JSX stand for?
JavaScript XML
What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.</p>
<form id="EmpForm" className="input-group">
    First Name: <input type="text" id="firstName" />
    Last Name: <input type="text" id="lastName" />
    <select id="gender">
        <option>Male</option>
        <option>FeMale</option>
    </select>
    <img className="imgTag" src={aarvi} alt="aarvi. logo"/>
    <a href="https://google.com">Google</a>
    <button className="submit-btn">Submit</button>
</form>
</div>
)};

const root = ReactDOM.createRoot(document.getElementById("root"));

//This is for render the react element
//root.render(heading);

//This is for render the react componenet
root.render(<Heading/>);