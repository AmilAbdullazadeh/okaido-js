import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }

    return <div>
        About
        <br />
        <button onClick={handleNavigate} className="flex justify-center items-center text-center bg-blue-500 text-[#fff] p-[10px] border-none m-2 w-[100px] h-[30px] hover:bg-blue-600 rounded-[5px] cursor-pointer">Go back</button>
    </div>;
}

export default About;