
/**
 * <div id="parent">
    * <div id ="child">
    * <h1>this h1 tag</h1>
    * <h2>this h2 tag</h2>
    * </div>
 * </div>
 * 
 * 
 * 
 */

// const heading = React.createElement(
//     "h1",
//     {id:"heading",name:"heading"},
//     "Hello world from React."
// );

const parent = [React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"}, 
        [React.createElement("h1",{id:"heading"},"h1 tag"),React.createElement("h2",{id:"heading2"},"h2 tag")])
    ), 
    React.createElement("div",{id:"parent2"}, 
        React.createElement("div",{id:"child"}, 
            [React.createElement("h1",{id:"heading"},"h1 tag"),React.createElement("h2",{id:"heading2"},"h2 tag")])
        )];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);