import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="">
            <img className="w-full h-screen" src="https://i.ibb.co/gvWB75F/Screenshot-2024-04-28-200353.png" alt="" />
            <Link to='/'><button className="btn btn-accent w-full">Back to Home</button></Link>
        </div>
    );
};

export default Error;