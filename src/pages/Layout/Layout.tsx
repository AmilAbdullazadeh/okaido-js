import { Link, Outlet } from "react-router-dom";

function Layout() {
    return <div>
        <header className="bg-blue-500 text-[#fff] p-[10px]">
            <Link to="/" className="text-[#fff]">Home</Link>    
            <Link to="/about" className="text-[#fff]">About</Link>
        </header>

        <Outlet />

        <footer className="bg-blue-500 text-[#fff] p-[10px]">
            <Link to="/" className="text-[#fff]">Home</Link>
            <Link to="/about" className="text-[#fff]">About</Link>
        </footer>
    </div>;
}

export default Layout;