// import { useEffect, useState } from 'react'

// import './App.css'

// const App = ()=> {
//   // const [show,setShow] = useState(false);
//   const [count,setCount] = useState(0);
//   useEffect(() => {
    
//     setCount(count+1)
//   },[])
  

//   // return (
//   //   <div className=""> {
//   //     show && (
//   //       <div className="bg-red-500 text-white p-4"> <h1>Hello Potatoes</h1>
//   //       <p>I am invincible</p> </div>
//   //     ) 
//   //   }
//   //   <button onClick={()=> setShow(!show)}> 
//   //     {show ? 'Hide Box' : 'Show Box'}
//   //   </button>
//   //   </div>
//   // )

//   return (
//     <div>
//       {count}
//     </div>
//   )


// }
 

// export default App





// import { useState } from 'react';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const addTask = () => {
//     if (input.trim() === '') return;

//     const newTask = {
//       id: Date.now(),
//       text: input,
//       completed: false
//     };

//     setTasks([...tasks, newTask]);
//     setInput('');
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map(task =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">📝 To-Do List</h1>

//       <div className="flex gap-2 mb-4">
//         <input
//           className="border p-2 flex-1"
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter task..."
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') addTask();
//           }}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={addTask}
//         >
//           Add
//         </button>
//       </div>

//       <ul className="space-y-2">
//         {tasks.map(task => (
//           <li
//             key={task.id}
//             className={`flex justify-between items-center p-2 border rounded ${
//               task.completed ? 'bg-green-100 line-through' : ''
//             }`}
//           >
//             <span onClick={() => toggleComplete(task.id)} className="cursor-pointer flex-1">
//               {task.text}
//             </span>
//             <button
//               className="text-red-500"
//               onClick={() => deleteTask(task.id)}
//             >
//               ✖
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import { FaTimes } from 'react-icons/fa';

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Add Products</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter product title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            placeholder="Enter product description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <input
            type="text"
            placeholder="Enter category"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="url"
            placeholder="Enter image URL"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default App;