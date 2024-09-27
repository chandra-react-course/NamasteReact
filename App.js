import React from "react";
import ReactDOM from "react-dom/client";

const parent = [React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"}, 
        [React.createElement("h1",{id:"heading"},"Hello Namaste React 🚀" ),React.createElement("h2",{id:"heading2"},"Hi h2 tag")])
    ), 
    React.createElement("div",{id:"parent2"}, 
        React.createElement("div",{id:"child"}, 
            [React.createElement("h1",{id:"heading"},"h1 tag"),React.createElement("h2",{id:"heading2"},"h2 tag")])
        )];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);