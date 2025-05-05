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





import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTask();
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border rounded ${
              task.completed ? 'bg-green-100 line-through' : ''
            }`}
          >
            <span onClick={() => toggleComplete(task.id)} className="cursor-pointer flex-1">
              {task.text}
            </span>
            <button
              className="text-red-500"
              onClick={() => deleteTask(task.id)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
