import { useState } from "react";

const User = () =>{
    const [count, setCount] = useState(0);
    return(
        <div className="user-menu">
            <h1>name: Chandrasekhar</h1>
            <h2>location: Hyderabd</h2>
        </div>
    );
};

export default User;