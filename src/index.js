import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcomepage';
import Homepage from './components/homepage';
import { HashRouter, Route, Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import './index.css';


/*const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      Part {props.part.name}, total : {props.part.exercises}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.number}</p>)
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if(props.allClicks.length === 0 ){
    return(
      <div>
        The app is used by pressing the buttons.
      </div>
    )
  }
  return(
    <div>
      Button presse history: {props.allClicks.join('>')}
    </div>
  )
}*/
const App = () => {
  /*const course = {
    header: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }]
  }
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0);

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const[allClicks, setAll] = useState([])

  const handleLeftClick = () =>{
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }*/

  return (
    <div>
      {/* <div>
        <Header header={course.header} />
        <Content parts={course.parts} />
        <Total number={total} />
      </div>
      <div>
        <Display counter={counter} />
        <Button handleClick={increaseByOne} text="Plus" />
        <Button handleClick={setToZero} text="Zero" />
        <Button handleClick={decreaseByOne} text="Minus" />
      </div>
      <div>
        {left}
        <br />
        <Button handleClick ={handleLeftClick} text = 'left' />
        <Button handleClick = {handleRightClick}text = 'right' />
        <br />
        {right}
        <History allClicks = {allClicks} />
      </div> */}
      <div>
        <Welcome />
      </div>
    </div>
  )

}

//ReactDOM.render(<Router/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render((
  <HashRouter>
    <div>
    <Route path="/" component={App} />
    <Route path="/homepage" component={Homepage} />
    </div>
  </HashRouter>

), document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
