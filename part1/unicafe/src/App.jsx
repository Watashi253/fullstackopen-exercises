import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

  const Statistics = (props) => {
    if(props.all===0){
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
    return (
      <div>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.all} />
        <StatisticLine text='average' value={props.avg} />
        <StatisticLine text='positive' value={props.positive} />
      </div>
    )
}

const StatisticLine = ({text, value}) => {
if(text==='positive'){
  return (
    <div>
      <p>{text} {value} %</p>
    </div>
  )
}
return (
  <div>
    <p>{text} {value}</p>
  </div>
  )
}

const App = () => {
  const [all, setAll] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const avg= (good*1 + neutral*0 + bad*(-1))/all;
const positive=(good/all)*100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => {setGood(good + 1), setAll(all + 1)}} text='good' />
      <Button onClick={() => {setNeutral(neutral + 1), setAll(all + 1)}} text='neutral' />
      <Button onClick={() => {setBad(bad + 1), setAll(all + 1)}} text='bad' />
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive} />
    </div>
  )
}


export default App
