import React from 'react';

const Report = () => {
  const project = localStorage.getItem('projects');

  const report = JSON.parse(localStorage.getItem('tasks'));

  if (report === null) {
    return (
      <div>
        <h1>There is no task here</h1>
      </div>
    );
  }

  let totalTime = 0;
  for (let i = 0; i < report.length; i++) {
    totalTime += report[i].time;
  }

  return (
    <div>
      <h1>Your Project: {project}</h1>
      <h2>You Spent: </h2>
      <ul>
        {report.map((data, index) => {
          return (
            <li
              key={index}
              style={{ display: 'flex ', gap: '10px', alignItems: 'center' }}
            >
              <p>{data.time.toFixed(3)} hour on </p>
              <p>{data.name}</p>
            </li>
          );
        })}
      </ul>
      <h2>Total: {totalTime.toFixed(3)} for the day </h2>
    </div>
  );
};

export default Report;
