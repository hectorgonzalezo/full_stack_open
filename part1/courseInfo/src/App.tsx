import React from "react";
import Header from './Header';
import Content from './Content';
import Total from './Total';
import { CoursePart } from "course";

interface CourseInfo {
  name: string;
  parts: CoursePart[];
}

function App() {
  const course: CourseInfo = {
    name: "Half` Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  );
}


export default App;
