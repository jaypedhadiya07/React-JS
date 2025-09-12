import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../Features/Todo/TodoSlice.js";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.title);
  };

  const handleSave = (id) => {
    if (editingText.trim() !== "") {
      dispatch(editTodo({ id, title: editingText }));
    }
    setEditingId(null);
    setEditingText("");
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-5">
        My Todos
      </h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gradient-to-r from-zinc-900 to-zinc-800 px-5 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-1 mr-3 bg-zinc-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ) : (
              <span className="flex-1 text-gray-200 text-lg font-medium">
                {todo.title}
              </span>
            )}

            {editingId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-3 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21
                     c.342.052.682.107 1.022.166m-1.022-.165L18.16 
                     19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 
                     2.25 0 01-2.244-2.077L4.772 5.79m14.456 
                     0a48.108 48.108 0 00-3.478-.397m-12 
                     .562c.34-.059.68-.114 1.022-.165m0 
                     0a48.11 48.11 0 013.478-.397m7.5 
                     0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
                     51.964 0 00-3.32 0c-1.18.037-2.09 
                     1.022-2.09 2.201v.916m7.5 
                     0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;