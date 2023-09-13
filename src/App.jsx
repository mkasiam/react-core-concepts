import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {
  function ClickHandle(){
    alert("Button clicked")
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={ClickHandle}>Click me</button>
     
    </>
  )
}

export default App
