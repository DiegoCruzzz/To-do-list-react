import React, { useState } from 'react';
import '/src/styles/index.css'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTask}
        placeholder="Nueva tarea..."
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ position: 'relative', padding: '10px', border: '1px solid black', borderRadius: '4px' }} className="d-flex justify-content-between">
            <p>{task}</p>
            <button onClick={() => handleDeleteTask(index)} className="delete-icon" type="button" class="btn btn-danger">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
