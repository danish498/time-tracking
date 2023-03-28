import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Time from './Time';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const project = localStorage.getItem('projects');

  const report = JSON.parse(localStorage.getItem('tasks'));

  const handleTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const resetHandle = () => {
    localStorage.removeItem('tasks');
    setTasks([]);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/report'>Listing</Link>
          </li>
        </ul>
      </nav>

      <div
        style={{
          display: 'flex ',
          gap: '2px',
          flexDirection: 'column',
          marginBottom: '30px',
        }}
      >
        <h2>Add a Task: {project} </h2>
        <button style={{ width: '60px' }} onClick={resetHandle}>
          Reset Task
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input type='text' value={taskInput} onChange={handleTaskInput} />
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {tasks?.map((task, index) => (
          <div>
            <Time task={task} key={index} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Task;
