import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
                     <h1 className="flex items-center justify-center font-bold text-black text-6xl pt-5">Photo Editor</h1>
                     <h1 className=" flex items-center justify-center font-bold text-black text-4xl pt-5">File Uploader</h1>
                     <Link to="/file" className="flex items-center justify-center pt-10">File</Link>
        </div>
    )
}

export default Home;
