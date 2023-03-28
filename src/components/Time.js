import React, { useEffect, useState } from 'react';

const Time = ({ task }) => {
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const [timeTake, setTimeTaken] = useState(null);

  // console.log(startTime);
  // console.log(stopTime);

  const handleStart = () => {
    setStartTime(new Date());
  };

  const handleStop = () => {
    setStopTime(new Date());
  };

  useEffect(() => {
    const calculateTimeDifference = () => {
      if (startTime && stopTime) {
        const difference = stopTime.getTime() - startTime.getTime();
        const taskData = {
          name: task,
          time: difference / 3600000,
        };
        const existingTasksData = JSON.parse(
          localStorage.getItem('tasks') || '[]'
        );

        localStorage.setItem(
          'tasks',
          JSON.stringify([...existingTasksData, taskData])
        );

        setTimeTaken(difference / 1000);
        return difference / 1000;
      }
      return 0;
    };
    calculateTimeDifference();
  }, [stopTime, startTime, task]);

  return (
    <div style={{ display: 'flex ', gap: '10px', alignItems: 'center' }}>
      <h3>{task}</h3>
      <button disabled={startTime} onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>Stop</button>

      <p>Time elapsed: {timeTake?.toFixed(3)} seconds</p>
    </div>
  );
};

export default Time;
