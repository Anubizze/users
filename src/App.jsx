import { useState, useEffect } from 'react'
import './App.css'
import './index.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Пользователи</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow p-6 relative text-center"
          >
            <img
              className="w-24 h-24 rounded-full mx-auto object-cover"
              src={`https://i.pravatar.cc/150?img=${user.id}`} // Генератор аватаров
              alt={user.name}
            />
            <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
            <p className="text-gray-500 text-sm flex items-center justify-center mt-1">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" /></svg>
              {user.address.street}, {user.address.city}
            </p>
            <p className="text-gray-600 text-sm mt-3 px-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, tempora.
            </p>

            <div className="flex justify-between items-center mt-5 text-sm px-2">
              <span className="text-gray-400">Membership</span>
              <span className="text-yellow-600 font-medium flex items-center gap-1">
                <span className="text-yellow-500">★</span> Gold Member
              </span>
            </div>

            <button className="border border-green-500 text-green-600 font-medium px-4 py-1 rounded mt-3 hover:bg-green-100 transition">
              Renew
            </button>

            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Get Connected</p>
              <div className="flex justify-center gap-3">
                {["facebook", "twitter", "google", "instagram"].map((net) => (
                  <div
                    key={net}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 transition cursor-pointer"
                  >
                    <i className={`fab fa-${net}`}></i>
                  </div>
                ))}
              </div>
            </div>

            {/* Иконка редактирования */}
            <div className="absolute top-4 right-4 cursor-pointer text-blue-500 hover:text-blue-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;