import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 className="text-6xl font-bold text-white mb-2">Photo Editor</h1>
            <h2 className="text-4xl font-bold text-white mb-5">File Uploader</h2>
            <Link 
                to="/file" 
                className="text-lg bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
                Go to File Uploader
            </Link>
        </div>
    );
}

export default Home;
