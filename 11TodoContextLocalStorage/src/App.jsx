import { useEffect, useState } from "react";
import { TodoContextProvider } from "../Contexts/TodoContext.js";
import TodoForm from "../Components/TodoForm.jsx";
import TodoItem from "../Components/TodoItem.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((perv) => [...perv, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((perv) =>
      perv.map((pervTodo) => (pervTodo.id === id ? todo : pervTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((perv) => perv.filter((perv) => perv.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((perv) =>
      perv.map((perv) =>
        perv.id === id ? { ...perv, completed: !perv.completed } : perv
      )
    );
  };

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"));

    if (Todos && Todos.length > 0) {
      setTodos(Todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#000000] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
