import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold font-mono text-3xl flex flex-wrap">
            <span className="text-slate-900">BookmyRoom</span>
            <span className="text-slate-700"></span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-slate-800 to-slate-600 p-2 rounded-full flex items-center shadow-lg"
        >
          <input
            type="text"
            className="bg-transparent focus:outline-none text-white placeholder-white w-24 sm:w-64 p-2 rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="ml-3 bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            <FaSearch className="text-xl" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden font-mono text-1xl lg:inline text-black font-light-bold hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline font-mono text-black font-light-bold hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-black font-extralight-bold hover:underline"> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
