import { useEffect, useState } from "react";

function App() {
  const baseUrl = "https://dummyjson.com";
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData)

    const id = Math.floor(Math.random() * 1000000);
    fetch(`${baseUrl}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
      },
    })
      .then(res => res.json())
      .then(data => console.log(data, 'data'))
      .catch(err => console.log(err, 'err'));

  }

  function getUsers() {
    fetch(`${baseUrl}/users`)
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(err => console.log(err, 'err'));
  }

  // lifecycle method
  useEffect(() => {

    getUsers();

    return () => {
      // cleanup function
      console.log("unmount");
    }

  }, []); // dependency array - if empty, it will run only once

  return (
    <div>
      <form className="flex flex-col gap-2 w-[300px] mx-auto my-10" onSubmit={handleSubmit}>
        <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="firstName" placeholder="First Name"  />
        <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="lastName" placeholder="Last Name"  />
        <input className="border-2 border-gray-300 rounded-md p-2" type="number" name="age" placeholder="Age"  />

        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">Submit</button>
      </form>

      <div className="flex flex-col gap-2 w-[300px] mx-auto my-10 text-center">
        {users.map((user: any) => (
          <div key={user.id} className="border-2 border-gray-300 rounded-md p-2">
            <p>{user.firstName} {user.lastName} {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { App }