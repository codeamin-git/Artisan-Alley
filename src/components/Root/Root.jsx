import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h2>this is root of routes</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;