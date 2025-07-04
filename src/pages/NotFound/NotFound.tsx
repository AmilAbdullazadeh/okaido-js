import { Link } from "react-router-dom";

function NotFound() {
    return <div>
        NotFound 🚨
        <br />
        <Link to="/">Home</Link>
    </div>;
}

export default NotFound;