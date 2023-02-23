import React from 'react';
import { CoursePart } from 'course';

function Total({ parts }: { parts: CoursePart[] }){
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
}

export default Total;