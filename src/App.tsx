import { Link } from "react-router-dom"
import Board from "./components/Board/Board"
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
    gender: ""
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject.name, 'formDataObject');
  }

  return (
    <div>
      <form className="flex flex-col gap-2 w-[300px] mx-auto my-10" onSubmit={handleSubmit}>
        <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="name" placeholder="Name"  />
        <input className="border-2 border-gray-300 rounded-md p-2" type="email" name="email" placeholder="Email" />
        <input className="border-2 border-gray-300 rounded-md p-2" type="password" name="password" placeholder="Password" />
        <div className="flex gap-2">
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div>
        <input className="border-2 border-gray-300 rounded-md p-2" type="checkbox" name="remember" id="remember" />
        <label className="text-sm" htmlFor="remember">Remember me</label>

        <select
          className="border-2 border-gray-300 rounded-md p-2"
          name="country"
          id="country"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>

        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">Submit</button>
      </form>
    </div>
  )
}

export { App }