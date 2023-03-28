import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Project from './components/Project';
import Report from './components/Report';
import Task from './components/Task';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Project />} />
        <Route path='/task' element={<Task />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </>
  );
};

export default App;
