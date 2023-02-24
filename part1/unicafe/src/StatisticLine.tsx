import React from 'react';

interface StatisticLineProps {
  text: string;
  value: number;
}

function StatisticLine({ text, value }: StatisticLineProps){
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default StatisticLine;