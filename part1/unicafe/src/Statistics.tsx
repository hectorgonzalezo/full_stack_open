import React from 'react';
import StatisticLine from './StatisticLine';

interface StatisticsProps {
  good: number;
  neutral: number;
  bad: number;
}

function Statistics({ good, neutral, bad}: StatisticsProps){
  const sum = good + neutral + bad;

  if(good === 0 && neutral === 0 && bad === 0){
    return <p>No feedback given</p>
  } else {
    return(
      <>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              Statistics
            </th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={sum}/>
          <StatisticLine text="average" value={(good - bad) / sum}/>
          <StatisticLine text="positive" value={good / sum}/>
        </tbody>
      </table>
      </>
    )
  }
}

export default Statistics;