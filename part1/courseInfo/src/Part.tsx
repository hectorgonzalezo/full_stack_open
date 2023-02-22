import React from 'react';

interface PartProps {
  part: string;
  exercise: number;
}

function Part({ part, exercise }: PartProps){
  return <p> {part} {exercise} </p>;
}

export default Part;