import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center gap-4 mt-8">
      <input
        type="text"
        placeholder="Enter a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-zinc-900 rounded-xl border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-lg outline-none text-gray-100 py-3 px-5 shadow-md transition"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-lg"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;