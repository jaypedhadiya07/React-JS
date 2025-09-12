import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-6 drop-shadow-md">
          Redux Toolkit Todo App
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;