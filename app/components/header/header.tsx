import { Link } from "react-router";

function Header (){
    return(<>
        <h1 className=" bg-rose-600 text-5xl font-bold text-center w-2/3 m-auto p-2 rounded-2xl mt-3">Content ID Checker</h1>
    <nav className=" flex flex-col w-2/3 m-auto mt-2 items-center">
        <ul className=" flex justify-between w-2/4">
            <li className="hover:text-rose-400"><Link to={"/"}>Music</Link></li>
            <li className="hover:text-rose-400"><Link to={"/video"}>Video</Link></li>
            <li className="hover:text-rose-400"><Link to={"/about"}>About</Link></li>
        </ul>
    </nav>
    </>)

}

export default Header