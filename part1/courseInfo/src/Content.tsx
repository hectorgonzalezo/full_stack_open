import React from 'react';
import Part from './Part';

interface ContentProps {
  part1: string;
  exercises1: number;
  part2: string;
  exercises2: number;
  part3: string;
  exercises3: number;
}

function Content({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}: ContentProps) {
  return (
    <>
    <Part part={part1} exercise={exercises1} />
    <Part part={part2} exercise={exercises2} />
    <Part part={part3} exercise={exercises3} />
    </>
  );
}

export default Content;