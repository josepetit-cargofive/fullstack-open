import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './components/Header'
import {Content} from './components/Content'
import {Total} from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      text:'Fundamentals of React',
      value:10
    },
    {
      text:'Using props to pass data',
      value:7
    },
    {
      text:'State of a component',
      value:14
    }
  ]
  const result = parts.reduce((total, part) => total = total + part.value, 0);
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totals={result} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))