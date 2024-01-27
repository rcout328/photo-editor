import {
        createBrowserRouter,
        RouterProvider,
    } from "react-router-dom";
import Home from "./Home";
import File from "./File";


const router = createBrowserRouter([
{
    path: "/",
    element: <Home/>
},
{
    path: "/file",
    element: <File/>
}

]);


const Approute = () => {
    return <RouterProvider router={router} />;
};

export default Approute;
