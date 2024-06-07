import { useContext } from "react";

import { AuthContext } from "../../Provider/AuthProvider";

 
const Home = () => {
    const authContext = useContext(AuthContext);
    console.log(authContext);
    return (
        <div>
            <h2 className="text-2xl">Home: {authContext.name}</h2>
        </div>
    );
};



export default Home;