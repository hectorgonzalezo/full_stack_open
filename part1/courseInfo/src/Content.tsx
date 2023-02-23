import React from 'react';
import { CoursePart } from 'course';
import Part from './Part';


function Content({ parts }: { parts: CoursePart[] }) {
  console.log(parts)
  return (
    <>
    <Part part={parts[0].name} exercise={parts[0].exercises} />
    <Part part={parts[1].name} exercise={parts[1].exercises} />
    <Part part={parts[2].name} exercise={parts[2].exercises} />
    </>
  );
}

export default Content;